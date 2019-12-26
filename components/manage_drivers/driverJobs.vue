<template>
  <b-col sm="12" class="mt-3">
    <b-card :header="driverJobsHeader">
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
      headVariant: 'dark',
      driverJobsHeader: 'Driver Jobs',
      perPage: 3,
      currentPage: 1,
      items: [
        {
          Created_At: '06-12-2019',
          Reach_Time: '06-12-2019',
          Load_Time: '06-12-2019',
          Drop_Time: '06-12-2019',
          Client_Name: 'Ahmed',
          Origin: 'Karachi',
          Destination: 'Hyderabad',
          Distance: '200 KM',
          Duration: '3 hours',
          Labours: '6'
        },
        {
          Created_At: '06-12-2019',
          Reach_Time: '06-12-2019',
          Load_Time: '06-12-2019',
          Drop_Time: '06-12-2019',
          Client_Name: 'Ahmed',
          Origin: 'Karachi',
          Destination: 'Hyderabad',
          Distance: '200 KM',
          Duration: '3 hours',
          Labours: '6'
        },
        {
          Created_At: '06-12-2019',
          Reach_Time: '06-12-2019',
          Load_Time: '06-12-2019',
          Drop_Time: '06-12-2019',
          Client_Name: 'Ahmed',
          Origin: 'Karachi',
          Destination: 'Hyderabad',
          Distance: '200 KM',
          Duration: '3 hours',
          Labours: '6'
        },
        {
          Created_At: '06-12-2019',
          Reach_Time: '06-12-2019',
          Load_Time: '06-12-2019',
          Drop_Time: '06-12-2019',
          Client_Name: 'Ahmed',
          Origin: 'Karachi',
          Destination: 'Hyderabad',
          Distance: '200 KM',
          Duration: '3 hours',
          Labours: '6'
        }
      ]
    }
  }
}
</script>
