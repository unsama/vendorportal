<template>
  <div class="card">
    <h5 class="card-header text-left">Add Vehicle</h5>
    <div class="card-body">
      <form @submit.prevent="submitForm">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Vehicle type</label>
            <select
              class="form-control"
              v-model.trim="$v.vehicleType.$model"
              :class="{
                'is-invalid': $v.vehicleType.$error,
                'is-valid': !$v.vehicleType.$invalid
              }"
            />
            <div class="valid-feedback">Your vehicle type is valid!</div>
            <div class="invalid-feedback">
              <span v-if="!$v.vehicleType.required">Vehicle type is required</span>
            </div>
          </div>
          <div class="form-group col-md-6">
            <label>Vehicle Number</label>
            <input
              type="text"
              class="form-control"
              v-model.trim="$v.vehicleNumber.$model"
              :class="{
                'is-invalid': $v.vehicleNumber.$error
              }"
            />
            <!-- <div class="valid-feedback">Your vehicle number is valid!</div> -->
            <div class="invalid-feedback">
              <span v-if="!$v.vehicleNumber.required">Vehicle number is required</span>
            </div>
          </div>
          <div class="form-group col-md-6">
            <label>Model Year</label>
            <input type="text" class="form-control" v-model="vehicleModel" />
          </div>
          <div class="form-group col-md-6">
            <label>Vehicle Make</label>
            <input type="text" class="form-control" v-model="vehicleMake" />
          </div>
        </div>
        <button type="submit" class="btn btn-sm btn-primary float-right">submit {{ submitstatus }}</button>
      </form>
    </div>
  </div>
</template>
<script>
import { required, numeric, url } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      vehicleType: '',
      vehicleNumber: '',
      vehicleModel: '',
      vehicleMake: '',
      submitstatus: null
    }
  },
  validations: {
    vehicleType: {
      required
    },
    vehicleNumber: {
      required
    }
  },
  methods: {
    submitForm() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitstatus = 'Fail'
      } else {
        this.submitstatus = 'Success'
      }
    }
  }
}
</script>
