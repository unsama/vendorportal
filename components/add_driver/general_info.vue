<template>
  <b-col sm="12" lg="6">
    <b-card :header="header">
      <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-container fluid>
            <b-row>
              <b-col sm="12" xl="6"
                ><b-form-group label="First Name*:" label-for="firstName" description="Give Driver First Name">
                  <b-form-input id="firstName" v-model="form.name.first" type="text" required placeholder="First Name"></b-form-input> </b-form-group
              ></b-col>
              <b-col sm="12" xl="6"
                ><b-form-group label="Last Name*:" label-for="lastName" description="Give Driver Last Name">
                  <b-form-input id="lastName" v-model="form.name.last" type="text" required placeholder="Last Name"></b-form-input> </b-form-group
              ></b-col>
            </b-row>
            <b-row>
              <b-col sm="12" xl="6">
                <b-form-group label="Email*:" label-for="email" description="Give Driver Email">
                  <b-form-input id="email*" v-model="form.email" type="email" required placeholder="Email"></b-form-input> </b-form-group
              ></b-col>
              <b-col sm="12" xl="6">
                <b-form-group label="Password*:" label-for="password" description="Give Driver Password">
                  <b-form-input
                    id="password"
                    v-model="form.password"
                    type="password"
                    required
                    placeholder="Enter Password"
                  ></b-form-input> </b-form-group
              ></b-col>
            </b-row>
            <b-row>
              <b-col sm="12" xl="6"
                ><b-form-group label="Mobile No*:" label-for="phone" description="Give Driver Mobile No">
                  <b-form-input id="phone" v-model="form.mobile" type="text" required placeholder="Mobile"></b-form-input> </b-form-group
              ></b-col>
              <b-col sm="12" xl="6">
                <b-form-group label="CNIC No*:" label-for="cnic" description="Give Driver CNIC No">
                  <b-form-input id="cnic" v-model="form.cnic" type="text" required placeholder="CNIC"></b-form-input> </b-form-group
              ></b-col>
            </b-row>
            <b-row>
              <b-col sm="12" xl="6">
                <b-form-group label="Driving License*:" label-for="license" description="Give Driver Driving License No">
                  <b-form-input id="license" v-model="form.license" type="text" required placeholder="Driving License"></b-form-input>
                </b-form-group> </b-col
              ><b-col sm="12" xl="6">
                <b-form-group label="Vehicle*:" label-for="vehicle" description="Select Driver Vehicle">
                  <b-form-select id="vehicle" v-model="form.vehicle" :options="vehicle_list">
                    <option value="null">Select Any Vehicle</option>
                  </b-form-select>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-form-group label="Adda*:" label-for="adda" description="Select Driver Adda">
                  <b-form-select id="adda" v-model="form.adda" :options="adda_list">
                    <option value="null">Select Any Adda</option>
                  </b-form-select>
                </b-form-group>
              </b-col>
            </b-row>
          </b-container>
        </b-form>
        <b-card class="mt-3" header="Form Data Result" v-if="consoleCard">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </div>
    </b-card>
  </b-col>
</template>
<script>
import consola from 'consola'
export default {
  props: ['form', 'show', 'consoleCard'],
  computed: {
    adda_list() {
      return this.$store.state.adda_list
    }
  },
  created() {
    this.$bus.$on('form-reset', () => {
      this.form.adda = null
      this.form.vehicle = null
      this.form.name.first = ''
      this.form.name.last = ''
      this.form.email = ''
      this.form.password = ''
      this.form.mobile = ''
      this.form.cnic = ''
      this.form.license = ''
    })
  },
  data() {
    return {
      vehicle_list: ['Pickup', 'Truck', 'Shehzore', 'Mazda', 'Other'],
      header: 'Driver Info'
    }
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.name.first = ''
      this.form.name.last = ''
      this.form.email = ''
      this.form.password = ''
      this.form.mobile = ''
      this.form.cnic = ''
      this.form.license = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
