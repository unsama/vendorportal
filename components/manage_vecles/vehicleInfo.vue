<template>
  <b-col sm="12" lg="12">
    <b-card :header="header">
      <div>
        <b-form>
          <b-container fluid>
            <b-row>
              <b-col sm="12" xl="6">
                <b-form-group label="Vehicle Type*:" label-for="vehicleType" description="Choose Vehicle Type">
                  <b-form-select
                    id="vehicleType"
                    v-model="vehicleType"
                    required
                    :options="v_options"
                    size="sm"
                    placeholder="select Vehicle Type"
                  ></b-form-select>
                </b-form-group>
              </b-col>
              <b-col sm="12" xl="6">
                <b-form-group label="Vehicle Number*:" label-for="vehicleNumber" description="Enter Vehicle Number">
                  <b-form-input id="vehicleNumber" v-model="vehicleNumber" required type="text" placeholder="Vehicle Number"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="12" xl="6">
                <b-form-group label="Vehicle Make:" label-for="vehicleMake" description="Enter Vehicle Make">
                  <b-form-input id="vehicleMake" v-model="form.vehicleMake" type="text" placeholder="Vehicle Make"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="12" xl="6">
                <b-form-group label="Model Year" label-for="modelYear" description="Vehicle Model Year">
                  <b-form-input id="modelYear" v-model="form.modelYear" type="text" placeholder="Enter Model Year"></b-form-input>
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
    <b-card-footer footer-class="cardFoot">
      <div class="mt-3 clearfix">
        <b-button size="sm" @click="onSubmit" variant="success" class="float-right">Add</b-button>
        <b-button size="sm" @click="reset" variant="info" class="float-right">Reset</b-button>
      </div>
    </b-card-footer>
  </b-col>
</template>
<script>
import consola from 'consola'
import { required } from 'vuelidate/lib/validators'
import cities from '~/assets/cities.json'
export default {
  props: ['form', 'show', 'consoleCard'],
  created() {
    this.$bus.$on('form-reset', () => {
      this.form.vehicleType = ''
      this.form.vehicleNumber = ''
      this.form.vehicleMake = ''
      this.form.modelYear = ''
      this.form.vehicleOrigin = ''
      this.form.destination = ''
    })
  },
  computed: {
    v_options() {
      return this.$store.state.HeavyVechiles
    }
  },
  data() {
    return {
      header: 'Vehicle Info',
      vehicleType: '',
      selectedOrigin: null,
      originOptions: cities,
      selectedDestination: null,
      destinationOptions: cities,
      selectedType: null,
      make: null,
      vehicleNumber: null,
      modelYear: null,

      commission: null,
      destination: null,
      origin: null,
      price: null,
      d_cnic: null,
      d_licenseNo: null,
      d_name: null,
      d_phone: null,
      name: null,
      v_year: null,
      v_make: null,
      v_model: null,
      v_number: null,
      vehicleId: null,

      vehicleName: null,
      typeOptions: [
        { value: null, text: 'Please select vehicle type' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ]
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      consola.error('XXX')
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.vehicleType = ''
      this.vehicleNumber = ''
      this.form.vehicleMake = ''
      this.form.modelYear = ''
      this.form.vehicleOrigin = ''
      this.form.destination = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    reset() {
      this.$bus.$emit('form-reset')
    }
  }
}
</script>
