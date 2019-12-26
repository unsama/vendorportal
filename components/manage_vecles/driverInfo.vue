<template>
  <div>
    <p>Driver Information</p>
    <b-container>
      <b-row>
        <b-col><b-form-input id="firstName" size="sm" placeholder="Enter your first name"></b-form-input></b-col>
        <b-col><b-form-input id="lastName" size="sm" placeholder="Enter your last name"></b-form-input></b-col>
      </b-row>
      <b-row>
        <b-col><b-form-input v-model="mobileNo" type="number" size="sm" class="mt-3" placeholder="Enter your mobile Number"></b-form-input></b-col>
        <b-col><b-form-input v-model="cnicNo" type="number" size="sm" class="mt-3" placeholder="Enter your cnic Number"></b-form-input></b-col>
      </b-row>
      <b-row>
        <b-col><b-form-input id="drivingLicenceNo" size="sm" class="mt-3" placeholder="Enter your driving licence number"></b-form-input></b-col>
        <b-col
          ><div class="w-100">
            <b-button variant="primary" size="sm" class="float-right mt-3" @click="show = false">
              Submit
            </b-button>
          </div></b-col
        >
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {}
</script>
