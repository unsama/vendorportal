<template>
  <div>
    <b-container>
      <h3>Create a Wallet</h3>
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
        <b-button size="sm" variant="info" class="float-right mt-3">Clear</b-button>
      </div>
    </b-container>
  </div>
</template>
