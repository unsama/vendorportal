<template>
  <div>
    <b-modal ref="modelForAcceptedStatus" title="Request Detail">
      <div>
        <b-row>
          <b-col sm="4">
            <table class="table">
              <thead v-if="true">
                <tr>
                  <th class="text-center" colspan="2">Client Details</th>
                </tr>
              </thead>
              <tbody v-if="true">
                <tr>
                  <th>Client Name</th>
                  <td>{{ transReq.data.clientname }}</td>
                </tr>
                <tr v-if="transReq.data.clientno">
                  <th>Client Number</th>
                  <td>{{ transReq.data.clientno }}</td>
                </tr>
              </tbody>
              <thead v-if="transReq.data.vendorname">
                <tr>
                  <th class="text-center" colspan="2">Vendor Details</th>
                </tr>
              </thead>
              <tbody v-if="transReq.data.vendorname">
                <tr>
                  <th>Vendor Name</th>
                  <td>{{ transReq.data.vendorname }}</td>
                </tr>
                <tr v-if="transReq.data.vendorno">
                  <th>Vendor Number</th>
                  <td>{{ transReq.data.vendorno }}</td>
                </tr>
              </tbody>
            </table>
          </b-col>
          <b-col sm="4">
            <table class="table">
              <thead>
                <tr>
                  <th class="text-center" colspan="2">Request Details</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="transReq.data.desText">
                  <th>Destination</th>
                  <td>{{ transReq.data.desText }}</td>
                </tr>
                <tr v-if="transReq.data.disText">
                  <th>Distance</th>
                  <td>{{ transReq.data.disText }}</td>
                </tr>
                <tr v-if="transReq.data.durText">
                  <th>Duration</th>
                  <td>{{ transReq.data.durText }}</td>
                </tr>
                <tr v-if="transReq.data.oneWay !== null">
                  <th>Type</th>
                  <td>{{ transReq.data.oneWay ? 'One Way' : 'Two Way' }}</td>
                </tr>
                <tr v-if="transReq.data.orgText">
                  <th>Origin</th>
                  <td>{{ transReq.data.orgText }}</td>
                </tr>
                <tr v-if="transReq.data.requDate">
                  <th>Departure</th>
                  <td>{{ transReq.data.requDate }}</td>
                </tr>
                <tr v-if="transReq.data.retuDate">
                  <th>Arrival</th>
                  <td>{{ transReq.data.retuDate }}</td>
                </tr>
                <tr v-if="transReq.data.vecType">
                  <th>Vehicle</th>
                  <td>{{ transReq.data.vecType }}</td>
                </tr>
              </tbody>
            </table>
          </b-col>
          <b-col sm="4">
            <table class="table">
              <thead>
                <tr>
                  <th class="text-center" colspan="2">Request Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="transReq.data.createdAt">
                  <th>CreatedAt</th>
                  <td>{{ transReq.data.createdAt }}</td>
                </tr>
                <tr v-if="transReq.data.allot_time">
                  <th>Alloted At</th>
                  <td>{{ transReq.data.allot_time }}</td>
                </tr>
                <tr v-if="transReq.data.accept_time">
                  <th>Accept At</th>
                  <td>{{ transReq.data.accept_time }}</td>
                </tr>
                <tr v-if="transReq.data.start_time">
                  <th>Start At</th>
                  <td>{{ transReq.data.start_time }}</td>
                </tr>
                <tr v-if="transReq.data.complete_time">
                  <th>Complete At</th>
                  <td>{{ transReq.data.complete_time }}</td>
                </tr>
                <tr v-if="transReq.data.commission">
                  <th>Commission %</th>
                  <td>{{ transReq.data.commission }}</td>
                </tr>
                <tr v-if="transReq.data.commissionPrice">
                  <th>Commission</th>
                  <td>{{ transReq.data.commissionPrice }}</td>
                </tr>
                <tr v-if="transReq.data.totalPrice">
                  <th>Total Price</th>
                  <td>{{ transReq.data.totalPrice }}</td>
                </tr>
                <tr v-if="transReq.data.status">
                  <th>Status</th>
                  <td>{{ transReq.data.status }}</td>
                </tr>
              </tbody>
            </table>
          </b-col>
        </b-row>
      </div>
      <template v-slot:modal-footer>
        <div class="w-100">
          <b-button variant="primary" size="sm" class="float-right" @click="show = false">Complete Request</b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>
