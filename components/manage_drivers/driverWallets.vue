<template>
  <b-col sm="12" class="mt-3">
    <b-card :header="driverWalletHeader">
      <b-container fluid>
        <div class="overflow-auto">
          <b-table :head-variant="headVariant" responsive bordered hover :items="items"></b-table>
          <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>
        </div>
      </b-container>
    </b-card>
  </b-col>
</template>
<script>
export default {
  data() {
    return {
      headVariant: 'dark',
      driverWalletHeader: 'Driver Wallets',
      perPage: 3,
      currentPage: 1,
      items: [
        {
          '#': '1',
          Naration: 'Natration1',
          column3: 'some data',
          column4: 'some data',
          coulmn5: 'some data'
        },
        {
          '#': 2,
          Naration: 'Natration1',
          column3: 'some data',
          column4: 'some data',
          coulmn5: 'some data'
        },
        {
          '#': '3',
          Naration: 'Natration1',
          column3: 'some data',
          column4: 'some data',
          coulmn5: 'some data'
        },
        {
          '#': '4',
          Naration: 'Natration1',
          column3: 'some data',
          column4: 'some data',
          coulmn5: 'some data'
        }
      ]
    }
  }
}
</script>
