<template>
  <b-col sm="12" lg="8" class="mt-3">
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
      header: 'Driver Logs',
      headVariant: 'dark',
      perPage: 3,
      currentPage: 1,
      items: [
        {
          Login_Time: '06-12-2019',
          Logout_Time: '06-12-2019',
          Durartion: '00-02-18',
          Entry_Of: '2 years ago'
        },
        {
          Login_Time: '06-12-2019',
          Logout_Time: '06-12-2019',
          Durartion: '00-02-18',
          Entry_Of: '2 years ago'
        },
        {
          Login_Time: '06-12-2019',
          Logout_Time: '06-12-2019',
          Durartion: '00-02-18',
          Entry_Of: '2 years ago'
        },
        {
          Login_Time: '06-12-2019',
          Logout_Time: '06-12-2019',
          Durartion: '00-02-18',
          Entry_Of: '2 years ago'
        }
      ]
    }
  }
}
</script>
