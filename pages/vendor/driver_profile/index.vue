<template>
  <div>
    <!-- <b-row>
      <b-col>
        <h5>Profile</h5>
      </b-col>
    </b-row> -->
    <b-row class="mt-3">
      <driverInfo2 :show="show" :consoleCard="consoleCard" />
    </b-row>
    <b-row>
      <driverJobs :show="show" :consoleCard="consoleCard" />
    </b-row>
    <b-row>
      <driverWallets :show="show" :consoleCard="consoleCard" />
    </b-row>
    <b-row>
      <driverAllLogs :show="show" :consoleCard="consoleCard" />
      <driverPerDayLogs :show="show" :consoleCard="consoleCard" />
    </b-row>
  </div>
</template>
<script>
import consola from 'consola'
// import driverInfo from './../../../components/manage_drivers/driverInfo'
import driverInfo2 from './../../../components/manage_drivers/driverInfo2'
import driverJobs from './../../../components/manage_drivers/driverJobs'
import driverWallets from './../../../components/manage_drivers/driverWallets'
import driverAllLogs from './../../../components/manage_drivers/driverAllLogs'
import driverPerDayLogs from './../../../components/manage_drivers/driverPerDayLogs'
// import createWallet from './../../../components/manage_drivers/createWallet'
// import createWallet2 from './../../../components/manage_drivers/createWallet2'
export default {
  data() {
    return {
      show: true,
      consoleCard: false
    }
  },
  validate({ params }) {
    consola.success('V')
    consola.success(/^[0-9a-zA-Z-]*$/.test(params.id))
    return /^[0-9a-zA-Z-]*$/.test(params.id)
  },
  name: 'Vendor',
  components: {
    // driverInfo,
    driverInfo2,
    driverAllLogs,
    driverPerDayLogs,
    // createWallet2,
    driverJobs,
    driverWallets
    // createWallet
  },
  layout: 'vendor',
  meta: { type: 'vendor' }
}
</script>
