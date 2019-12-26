<template>
  <b-col>
    <b-card :header="header">
      <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group label="Image:" label-for="img" label-cols-sm="2" label-size="sm" description="Driver Profile Image">
            <b-form-file id="img" size="sm"></b-form-file>
          </b-form-group>
          <b-form-group label="CNIC:" label-for="file-cnic" label-cols-sm="2" label-size="sm" description="Driver Scanned CNIC">
            <b-form-file id="file-cnic" size="sm"></b-form-file>
          </b-form-group>
          <b-form-group label="Lincense:" label-for="file-lincense" label-cols-sm="2" label-size="sm" description="Driver Scanned Lincense">
            <b-form-file id="file-lincense" size="sm"></b-form-file>
          </b-form-group>
          <b-form-group label="Letter:" label-for="file-letter" label-cols-sm="2" label-size="sm" description="Driver Scanned Registration Letter">
            <b-form-file id="file-letter" size="sm"></b-form-file>
          </b-form-group>
        </b-form>
        <b-card class="mt-3" header="Form Data Result" v-if="consoleCard">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </div>
    </b-card>
  </b-col>
</template>
<script>
export default {
  props: ['show', 'consoleCard'],
  data() {
    return {
      header: 'Driver Docs',
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn']
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
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
