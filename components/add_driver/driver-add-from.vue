<template>
  <div class="card">
    <h5 class="card-header text-left">Add Driver</h5>
    <div class="card-body">
      <form @submit.prevent="submitForm">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>First Name</label>
            <input
              type="text"
              class="form-control"
              v-model.trim="$v.firstname.$model"
              :class="{
                'is-invalid': $v.firstname.$error,
                'is-valid': $v.firstname.$invalid
              }"
            />
            <!-- <div class="valid-feedback">Your vehicle number is valid!</div> -->
            <div class="invalid-feedback">
              <span v-if="!$v.firstname.required">first name is required</span>
            </div>
          </div>
          <div class="form-group col-md-6">
            <label>Last Name</label>
            <input
              type="text"
              class="form-control"
              v-model.trim="$v.lastname.$model"
              :class="{
                'is-invalid': $v.lastname.$error,
                'is-valid': $v.lastname.$invalid
              }"
            />
            <!-- <div class="valid-feedback">Your vehicle number is valid!</div> -->
            <div class="invalid-feedback">
              <span v-if="!$v.lastname.required">Last name is required</span>
            </div>
          </div>
          <div class="form-group col-md-6">
            <label>Email</label>
            <input
              type="text"
              class="form-control"
              v-model.trim="$v.email.$model"
              :class="{
                'is-invalid': $v.email.$error,
                'is-valid': $v.email.$invalid
              }"
            />
            <!-- <div class="valid-feedback">Your vehicle number is valid!</div> -->
            <div class="invalid-feedback">
              <span v-if="!$v.email.required">Email is required</span>
            </div>
          </div>
          <div class="form-group col-md-6">
            <label>Password</label>
            <input
              type="text"
              class="form-control"
              v-model.trim="$v.password.$model"
              :class="{
                'is-invalid': $v.password.$error,
                'is-valid': $v.password.$invalid
              }"
            />
            <!-- <div class="valid-feedback">Your vehicle number is valid!</div> -->
            <div class="invalid-feedback">
              <span v-if="!$v.password.required">Password is required</span>
            </div>
          </div>
          <div class="form-group col-md-6">
            <label>Mobile Number</label>
            <input
              type="text"
              class="form-control"
              v-model.trim="$v.mobileNo.$model"
              :class="{
                'is-invalid': $v.mobileNo.$error,
                'is-valid': $v.mobileNo.$invalid
              }"
            />
            <!-- <div class="valid-feedback">Your vehicle number is valid!</div> -->
            <div class="invalid-feedback">
              <span v-if="!$v.mobileNo.required">Mobile Number is required</span>
            </div>
          </div>
          <div class="form-group col-md-6">
            <label>CNIC Number</label>
            <input
              type="text"
              class="form-control"
              v-model.trim="$v.cnicNo.$model"
              :class="{
                'is-invalid': $v.cnicNo.$error,
                'is-valid': $v.cnicNo.$invalid
              }"
            />
            <!-- <div class="valid-feedback">Your vehicle number is valid!</div> -->
            <div class="invalid-feedback">
              <span v-if="!$v.cnicNo.required">CNIC Number is required</span>
            </div>
          </div>
          <div class="form-group col-md-6">
            <label>Driving Licence Number</label>
            <input
              type="text"
              class="form-control"
              v-model.trim="$v.drivingLicenceNo.$model"
              :class="{
                'is-invalid': $v.drivingLicenceNo.$error,
                'is-valid': $v.drivingLicenceNo.$invalid
              }"
            />
            <!-- <div class="valid-feedback">Your vehicle number is valid!</div> -->
            <div class="invalid-feedback">
              <span v-if="!$v.drivingLicenceNo.required">CNIC Number is required</span>
            </div>
          </div>
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
            <label>Adda</label>
            <select
              class="form-control"
              v-model.trim="$v.adda.$model"
              :class="{
                'is-invalid': $v.adda.$error,
                'is-valid': !$v.adda.$invalid
              }"
            />
            <div class="valid-feedback">Your adda name is valid!</div>
            <div class="invalid-feedback">
              <span v-if="!$v.vehicleType.required">Adda is required</span>
            </div>
          </div>
          <div class="form-group col-md-6">
            <label>Profile Image</label>
            <b-form-file id="img" size="sm" class="form-control" />
            <!-- <div class="valid-feedback">Your vehicle number is valid!</div> -->
            <!-- <div class="invalid-feedback">
              <span v-if="!$v.drivingLicenceNo.required">CNIC Number is required</span>
            </div> -->
          </div>
          <div class="form-group col-md-6">
            <label>Scanned CNIC</label>
            <b-form-file id="img_cnic" size="sm" class="form-control" />
            <!-- <div class="valid-feedback">Your vehicle number is valid!</div> -->
            <!-- <div class="invalid-feedback">
              <span v-if="!$v.drivingLicenceNo.required">CNIC Number is required</span>
            </div> -->
          </div>
          <div class="form-group col-md-6">
            <label>Scanned Licence</label>
            <b-form-file id="img_licence" size="sm" class="form-control" />
            <!-- <div class="valid-feedback">Your vehicle number is valid!</div> -->
            <!-- <div class="invalid-feedback">
              <span v-if="!$v.drivingLicenceNo.required">CNIC Number is required</span>
            </div> -->
          </div>
          <div class="form-group col-md-6">
            <label>Scanned Registration Letter</label>
            <b-form-file id="img_regLetter" size="sm" class="form-control" />
            <!-- <div class="valid-feedback">Your vehicle number is valid!</div> -->
            <!-- <div class="invalid-feedback">
              <span v-if="!$v.drivingLicenceNo.required">CNIC Number is required</span>
            </div> -->
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
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      mobileNo: '',
      cnicNo: '',
      drivingLicenceNo: '',
      vehicleType: '',
      adda: '',
      submitstatus: null
    }
  },
  validations: {
    firstname: {
      required
    },
    lastname: {
      required
    },
    email: {
      required
    },
    password: {
      required
    },
    mobileNo: {
      required
    },
    cnicNo: {
      required
    },
    drivingLicenceNo: {
      required
    },
    vehicleType: {
      required
    },
    adda: {
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
