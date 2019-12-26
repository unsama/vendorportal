<template>
  <div>
    <b-modal ref="model-pendingStatus" title="Request Detail">
      <div>
        <b-row>
          <b-col sm="4">
            <table class="table">
              <thead v-if="selected.Client_Name">
                <tr>
                  <th class="text-center" colspan="2">Client Details</th>
                </tr>
              </thead>
              <tbody v-if="selected.Client_Name">
                <tr>
                  <th>Client Name</th>
                  <td>{{ selected.Client_Name }}</td>
                </tr>
                <tr v-if="true">
                  <th>Client Number</th>
                  <td>{{ selected.Client_No }}</td>
                </tr>
              </tbody>
              <tbody v-if="selected.Origin">
                <tr>
                  <th>Origin</th>
                  <td>{{ selected.Origin }}</td>
                </tr>
                <tr v-if="selected.Destination">
                  <th>Destination</th>
                  <td>{{ selected.Destination }}</td>
                </tr>
                <tr v-if="selected.Vehicle_Type">
                  <th>Vehicle_Type</th>
                  <td>{{ selected.Vehicle_Type }}</td>
                </tr>
                <tr v-if="selected.Status">
                  <th>Status</th>
                  <td>{{ selected.Status }}</td>
                </tr>
              </tbody>
            </table>
          </b-col>
          <b-col sm="2">
            <!-- just for space -->
          </b-col>
          <b-col sm="4">
            <table class="table">
              <thead>
                <tr>
                  <th class="text-center" colspan="2">Request Details</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="selected.Created_At">
                  <th>Created_At</th>
                  <td>{{ selected.Created_At }}</td>
                </tr>
                <tr v-if="selected.Reach_Time">
                  <th>Reach_Time</th>
                  <td>{{ selected.Reach_Time }}</td>
                </tr>
                <tr v-if="selected.Load_Time">
                  <th>Load_Time</th>
                  <td>{{ selected.Load_Time }}</td>
                </tr>
                <!-- <tr v-if="transReq.data.oneWay !== null">
                        <th>Type</th>
                        <td>{{ transReq.data.oneWay ? 'One Way' : 'Two Way' }}</td>
                      </tr> -->
                <tr v-if="selected.Drop_Time">
                  <th>Drop_Time</th>
                  <td>{{ selected.Drop_Time }}</td>
                </tr>
              </tbody>
            </table>
          </b-col>
        </b-row>
        <b-row v-if="true">
          <b-col sm="12">
            <b-form-group label="Vehicle*:" label-for="vehicle" description="Select Vehicle">
              <b-form-select id="vehicle" v-model="vehicle" :options="vehicle_list">
                <option value="null">Select Any Vehicle</option>
              </b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
      </div>
      <template v-slot:modal-footer>
        <div class="w-100">
          <b-button variant="primary" size="sm" class="float-right" @click="show = false">Allot</b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: []
    }
  }
}
</script>
