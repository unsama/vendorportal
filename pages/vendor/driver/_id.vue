<template>
  <div>
    <b-container>
      <b-row>
        <b-col sm="9">
          <driverInfo />
        </b-col>
        <b-col sm="3" class="mt-3">
          <createWallet />
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="12">
          <driverJobs />
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="12">
          <driverWallets />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import consola from 'consola'
import driverInfo from './../../../components/manage_drivers/driverInfo'
import driverJobs from './../../../components/manage_drivers/driverJobs'
import driverWallets from './../../../components/manage_drivers/driverWallets'
import createWallet from './../../../components/manage_drivers/createWallet'
export default {
  data() {
    return {}
  },
  validate({ params }) {
    consola.success('V')
    consola.success(/^[0-9a-zA-Z-]*$/.test(params.id))
    return /^[0-9a-zA-Z-]*$/.test(params.id)
  },
  name: 'Vendor',
  components: {
    driverInfo,
    driverJobs,
    driverWallets,
    createWallet
  },
  layout: 'vendor',
  meta: { type: 'vendor' }
}
</script>
