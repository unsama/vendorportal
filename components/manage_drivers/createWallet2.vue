<template>
  <b-col sm="12" lg="4">
    <b-card :header="createWalletHeader">
      <div>
        <b-container fluid>
          <b-row>
            <b-col>
              <b-form-input v-model="narration" type="text" size="sm" class="mt-3" placeholder="Type Naration"></b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-input v-model="credit" type="number" size="sm" class="mt-3" placeholder="Credit"></b-form-input>
              <small class="form-text text-muted">Give balance to driver</small>
            </b-col>
            <b-col>
              <b-form-input v-model="debit" type="number" size="sm" class="mt-3" placeholder="Debit"></b-form-input>
              <small class="form-text text-muted">Take balance from driver</small>
            </b-col>
          </b-row>
          <div>
            <b-button size="sm" variant="success" class="float-right mt-3">Create</b-button>
            <b-button size="sm" variant="info" class="float-left mt-3">Clear</b-button>
          </div>
        </b-container>
      </div>
    </b-card>
  </b-col>
</template>
<script>
import consola from 'consola'
export default {
  props: ['form', 'show', 'consoleCard'],
  created() {
    this.$bus.$on('form-reset', () => {
      this.form.narration = ''
      this.form.credit = ''
      this.form.debit = ''
    })
  },
  data() {
    return {
      createWalletHeader: 'Create Wallet'
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
      this.form.narration = ''
      this.form.credit = ''
      this.form.debit = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
