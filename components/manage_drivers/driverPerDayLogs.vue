<template>
  <b-col sm="12" lg="4" class="mt-3">
    <b-card :header="header">
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
  name: 'Vendor',
  layout: 'vendor',
  meta: { type: 'vendor' },

  data() {
    return {
      header: 'Driver Per day Logs',
      headVariant: 'dark',
      perPage: 3,
      currentPage: 1,
      items: [
        {
          Day: '06 Dec 2019',
          Duration: '00:06:17'
        },
        {
          Day: '06 Dec 2019',
          Duration: '00:06:17'
        },
        {
          Day: '06 Dec 2019',
          Duration: '00:06:17'
        },
        {
          Day: '06 Dec 2019',
          Duration: '00:06:17'
        }
      ]
    }
  }
}
</script>
