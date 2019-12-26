import Vuex from 'vuex'
import consola from 'consola'
import moment from 'moment'
import { auth, DB } from '~/plugins/firebase.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
      errorMessage: '',
      token: null,
      auth: false,
      authType: null,
      sidebar: false,
      MyVechiles: [],
      HeavyVechiles: [],
      adda_list: []
    },
    getters: {
      GetUser: (state, getters) => state.user,
      getToken: (state, getters) => state.token,
      getAuth: (state, getters) => state.auth,
      getAuthType: (state, getters) => state.authType
    },
    mutations: {
      setAddaList: (state, payload) => (state.adda_list = payload),
      setHeavyVechiles: (state, payload) => (state.HeavyVechiles = payload),
      setMyVechiles: (state, payload) => (state.MyVechiles = payload),
      setErrorMessage: (state, payload) => (state.errorMessage = payload),
      setToggleSidebar: (state) => (state.sidebar = !state.sidebar),
      setUser: (state, payload) => {
        state.user = payload
        state.auth = !!payload
      },
      setToken: (state, payload) => (state.token = payload),
      setAuthType: (state, payload) => (state.authType = payload)
    },
    actions: {
      get_adda_list({ commit }) {
        return new Promise((resolve, reject) => {
          this.$axios.get('https://localhost:4443/test/adda_list').then((payload) => {
            commit('setAddaList', payload.data)
          })
        })
      },
      add_driver({ commit }, data) {
        alert(data)
        return new Promise((resolve, reject) => {
          this.$axios
            .post('https://localhost:4443/test/add_vendor_driver', data)
            .then(({ data }) => {
              consola.success(data)
            })
            .catch(reject)
        })
      },
      add_vehicle(
        { commit },
        // eslint-disable-next-line camelcase
        { commission, destination, origin, price, d_cnic, d_licenseNo, d_name, d_phone, name, v_year, v_make, v_model, v_number, vehicleId }
      ) {
        return new Promise((resolve, reject) => {
          this.$axios.post('https://localhost:4443/test/add_vendor_vehicle', {
            commission,
            destination,
            origin,
            price,
            d_cnic,
            d_licenseNo,
            d_name,
            d_phone,
            name,
            v_year,
            v_make,
            v_model,
            v_number,
            vehicleId
          })
        })
      },
      get_my_vehicles({ commit }) {
        this.$axios
          .get('https://localhost:4443/test/heavy_vehicles')
          .then(({ data }) => {
            consola.success(data.data)
            const payload = []
            for (const property in data.data) {
              if (data.data.hasOwnProperty(property)) {
                const obj = {}

                obj.value = property
                obj.text = data.data[property].name
                obj.disabled = !data.data[property].status
                payload.push(obj)
              }
            }
            commit('setHeavyVechiles', payload)
          })
          .catch(consola.error)

        this.$axios
          .get('https://localhost:4443/test/get_vendor_vehicles')
          .then(({ data }) => {
            const payload = []
            for (const property in data.data) {
              if (data.data.hasOwnProperty(property)) {
                const obj = {}
                obj.ID = property
                consola.success(data.data[property].createdAt)
                obj.Created_At = moment(data.data[property].createdAt).format('DD-MM-YYYY')
                obj.Vehicle_Name = data.data[property].name
                obj.Vehicle_Number = data.data[property].v_number
                obj.Origin = data.data[property].availabilityInfo ? data.data[property].availabilityInfo.origin : ''
                obj.Destination = data.data[property].availabilityInfo ? data.data[property].availabilityInfo.destination : ''
                obj.Driver_Name = data.data[property].availabilityInfo
                  ? data.data[property].availabilityInfo.driverInfo
                    ? data.data[property].availabilityInfo.driverInfo.name
                    : ''
                  : ''
                obj.Driver_CNIC = data.data[property].availabilityInfo
                  ? data.data[property].availabilityInfo.driverInfo
                    ? data.data[property].availabilityInfo.driverInfo.cnic
                    : ''
                  : ''
                obj.Driver_LicenseNo = data.data[property].availabilityInfo
                  ? data.data[property].availabilityInfo.driverInfo
                    ? data.data[property].availabilityInfo.driverInfo.licenseNo
                    : ''
                  : ''
                obj.Driver_Phone = data.data[property].availabilityInfo
                  ? data.data[property].availabilityInfo.driverInfo
                    ? data.data[property].availabilityInfo.driverInfo.phone
                    : ''
                  : ''

                obj.Price = data.data[property].availabilityInfo ? data.data[property].availabilityInfo.price : ''
                obj.Commission_Price = data.data[property].availabilityInfo ? data.data[property].availabilityInfo.comission : ''
                obj.Status = data.data[property].status

                payload.push(obj)
              }
            }
            consola.success(payload)
            commit('setMyVechiles', payload)
          })
          .catch(consola.error)
      },

      nuxtClientInit({ commit }) {
        return new Promise((resolve, reject) => {
          consola.info('i Run Every Time')

          auth.onAuthStateChanged((user) => {
            if (user) {
              user
                .getIdToken()
                .then((token) => commit('setToken', token))
                .catch((e) => commit('setToken', null))
              commit('setUser', {
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
                email: user.email,
                phoneNumber: user.phoneNumber
              })
              DB.ref('users')
                .child(user.uid)
                .once('value')
                .then((snap) => {
                  if (snap.exists()) commit('setAuthType', snap.val().type)
                  else commit('setAuthType', 'admin')
                  resolve()
                })
                .catch((e) => consola.info(e))
            } else {
              commit('setUser', null)
              commit('setToken', null)
              resolve()
            }
          })
        })
      },
      signIn({ commit }, { email, password, type }) {
        return new Promise((resolve, reject) => {
          if (!email || !password || !type) return reject(new Error(`Give ${email ? (password ? 'type' : 'password') : 'email'} to Login`))
          DB.ref('users')
            .orderByChild('email')
            .equalTo(email)
            .once('value')
            .then((users) => {
              let isOk = false
              users.forEach((user) => (isOk = user.val().type === type ? true : isOk))

              if (isOk) {
                consola.info('asdasdas')
              }
            })
            .catch((e) => consola.error(e))
          auth
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
              consola.info(user)
              resolve(user)
            })
            .catch((e) => consola.error(e))
        })
      },
      ToggleSidebar({ commit }) {
        commit('setToggleSidebar')
      },
      signOut({ commit }) {
        return new Promise((resolve, reject) => {
          auth
            .signOut()
            .then(() => commit('setUser', null), commit('setToken', null), resolve())
            .catch((e) => reject(e))
        })
      }
    }
  })
}
export default createStore
