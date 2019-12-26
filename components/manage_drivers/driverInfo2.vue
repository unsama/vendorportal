<template>
  <b-col sm="12" lg="12">
    <b-card :header="driverInfoHeader">
      <div>
        <b-button variant="primary" size="sm" class="float-right" @click="editDriver">
          <fa :icon="['fas', 'edit']" />
        </b-button>
        <b-container fluid>
          <b-row>
            <b-col sm="4">
              <table class="table">
                <thead>
                  <tr>
                    <th colspan="2">
                      <h6>General Information</h6>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>First Name</th>
                    <td>{{ 'Shafiq' }}</td>
                  </tr>
                  <tr>
                    <th>Last Name</th>
                    <td>{{ 'Ahmed' }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{ 'test@gmail.com' }}</td>
                  </tr>
                  <tr>
                    <th>Mobile No</th>
                    <td>{{ '03331234567' }}</td>
                  </tr>
                  <tr>
                    <th>CNIC No</th>
                    <td>{{ '23456789012345' }}</td>
                  </tr>
                  <tr>
                    <th>Driver License</th>
                    <td>{{ '343-2323' }}</td>
                  </tr>
                  <tr>
                    <th>Adda Name</th>
                    <td>{{ 'Ayehsa Manzil' }}</td>
                  </tr>
                </tbody>
              </table>
            </b-col>
            <b-col sm="4">
              <table class="table">
                <thead>
                  <tr>
                    <th colspan="2">
                      <h6>Vehicle Information</h6>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Vehicle Type</th>
                    <td>{{ '22 wheeler' }}</td>
                  </tr>
                  <tr>
                    <th>Model Year</th>
                    <td>{{ '2019' }}</td>
                  </tr>
                  <tr>
                    <th>Vehicle Number</th>
                    <td>{{ 'KHI-2232' }}</td>
                  </tr>
                  <tr>
                    <th>Vehicle Make</th>
                    <td>{{ 'Toyota' }}</td>
                  </tr>
                </tbody>
              </table>
            </b-col>
            <b-col sm="4">
              <table class="table">
                <thead>
                  <tr>
                    <th colspan="2">
                      <h6>Documents</h6>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Profile image</th>

                    <!-- <a class="btn btn-info btn-sm mar-bot-5">absent</a> -->
                    <button class="btn btn-danger btn-sm" v-if="true">
                      <fa :icon="['fas', 'exclamation']" />
                    </button>
                    <button class="btn btn-info btn-sm mar-bot-5" v-if="false"></button>
                  </tr>
                  <tr>
                    <th>Scanned cnic</th>
                    <!-- <a class="btn btn-info btn-sm mar-bot-5"></a> -->
                    <button class="btn btn-danger btn-sm mar-bot-5" v-if="true">
                      <fa :icon="['fas', 'exclamation']" />
                    </button>
                    <button class="btn btn-info btn-sm mar-bot-5" v-if="false"></button>
                  </tr>
                  <tr>
                    <th>Scanned Licence</th>
                    <!-- <a class="btn btn-info btn-sm mar-bot-5"></a> -->
                    <button class="btn btn-danger btn-sm mar-bot-5" v-if="true">
                      <fa :icon="['fas', 'exclamation']" />
                    </button>
                    <button class="btn btn-info btn-sm mar-bot-5" v-if="false"></button>
                  </tr>
                  <tr>
                    <th>Scanned Registration Letter</th>
                    <!-- <a class="btn btn-info btn-sm mar-bot-5"></a> -->
                    <button class="btn btn-danger btn-sm mar-bot-5" v-if="true">
                      <fa :icon="['fas', 'exclamation']" />
                    </button>
                    <button class="btn btn-info btn-sm mar-bot-5" v-if="false"></button>
                  </tr>
                </tbody>
              </table>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </b-card>
  </b-col>
</template>
<script>
export default {
  data() {
    return {
      driverInfoHeader: 'Driver Information'
    }
  },
  methods: {
    editDriver(item) {
      this.selected = item

      this.$router.push({
        path: '/vendor/driver'
      })
    }
  }
}
</script>
