<template>
  <b-card>
    <b-card-header>Add Vehicle</b-card-header>
    <b-card-body>
      <b-container fluid>
        <b-row>
          <vehicleInfo :form="form" :show="show" :consoleCard="consoleCard" />
        </b-row>
      </b-container>
    </b-card-body>
    <!-- <b-card-footer footer-class="cardFoot">
      <div class="mt-3 clearfix">
        <b-button size="sm" @click="onSubmit" variant="success" class="float-right">Add</b-button>
        <b-button size="sm" @click="reset" variant="info" class="float-right">Reset</b-button>
      </div>
    </b-card-footer> -->
  </b-card>
</template>
<script>
import consola from 'consola'
// import required from 'vuelidate/lib/validators/required'
import vehicleInfo from '~/components/manage_vecles/vehicleInfo'
// import driverInfo from './../../../components/manage_vecles/driverInfo'
export default {
  name: 'Vendor',
  // components: {
  //   vehicleInfo
  //   // driverInfo
  // },
  layout: 'vendor',
  meta: { type: 'vendor' }
  // data() {
  //   return {
  //     form: {
  //       vehicleType: '',
  //       vehicleNumber: '',
  //       vehicleMake: '',
  //       modelYear: '',
  //       vehicleOrigin: '',
  //       destination: ''
  //     },
  //     show: true,
  //     consoleCard: false
  //   }
  // },
  // validations: {
  //   vehicleType: { required }
  // },
  // computed: {
  //   vehicleTypeErrors() {
  //     const errors = []
  //     if (!this.$v.vehicleType.$dirty) return errors
  //     !this.$v.vehicleType.required && errors.push('Vehicle Type is required.')
  //     return errors
  //   }
  // },
  // methods: {
  //   Save() {
  //     let name
  //     this.$store.state.HeavyVechiles.forEach((data) => {
  //       if (data.value === this.form.vehicleType) name = data.text
  //     })
  //     consola.warn(name)
  //     this.$store.dispatch('add_vehicle', {
  //       name,
  //       destination: this.form.destination,
  //       origin: this.form.vehicleOrigin,
  //       v_year: this.form.modelYear,
  //       v_make: this.form.vehicleMake,
  //       v_number: this.form.vehicleNumber,
  //       vehicleId: this.form.vehicleType
  //     })
  //     //  consola.warn(this.form)
  //   },
  //   onSubmit(evt) {
  //     alert('Hello')
  //     this.$v.$touch()
  //     if (this.$v.$dirty) {
  //       console.log('User Validations Failed!')
  //     } else {
  //       console.log('All Good!')
  //     }
  //     evt.preventDefault()
  //     alert(JSON.stringify(this.form))
  //   },
  //   reset() {
  //     this.$bus.$emit('form-reset')
  //   }
  // }
}
</script>
