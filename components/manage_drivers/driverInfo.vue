<template>
  <div>
    <h4 class="mt-3">Driver Information</h4>
    <b-row class="mt-3">
      <b-col sm="6">
        <h5>{{ 'Rafiq Ahmed' }}</h5>
      </b-col>
      <b-col sm="6">
        <b-button variant="outline-primary" size="sm" class="float-right mt-3"><nuxt-link to="#">Edit Driver</nuxt-link></b-button>
        <b-button variant="success" size="sm" class="float-right mt-3" @click="show = false" v-if="true">Unblock</b-button>
        <b-button variant="danger" size="sm" class="float-right mt-3" @click="show = false" v-else>Block</b-button>
        <b-button variant="success" size="sm" class="float-right mt-3" @click="show = false" v-if="true">Active</b-button>
        <b-button variant="danger" size="sm" class="float-right mt-3" @click="show = false" v-else>Deactive</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12">
        <b-row>
          <b-col sm="4">
            <table class="table">
              <thead>
                <tr>
                  <th colspan="2">
                    <h4>General Information</h4>
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
                    <h4>Vehicle Information</h4>
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
                    <h4>Documents</h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Profile image</th>
                  <td>
                    <!-- <a class="btn btn-info btn-sm mar-bot-5">absent</a> -->
                    <button class="btn btn-danger btn-sm mar-bot-5" v-if="true">absent</button>
                    <button class="btn btn-info btn-sm mar-bot-5" v-if="false"></button>
                  </td>
                </tr>
                <tr>
                  <th>Scanned cnic</th>
                  <!-- <a class="btn btn-info btn-sm mar-bot-5"></a> -->
                  <button class="btn btn-danger btn-sm mar-bot-5" v-if="true">absent</button>
                  <button class="btn btn-info btn-sm mar-bot-5" v-if="false"></button>
                </tr>
                <tr>
                  <th>Scanned Licence</th>
                  <!-- <a class="btn btn-info btn-sm mar-bot-5"></a> -->
                  <button class="btn btn-danger btn-sm mar-bot-5" v-if="true">absent</button>
                  <button class="btn btn-info btn-sm mar-bot-5" v-if="false"></button>
                </tr>
                <tr>
                  <th>Scanned Registration Letter</th>
                  <!-- <a class="btn btn-info btn-sm mar-bot-5"></a> -->
                  <button class="btn btn-danger btn-sm mar-bot-5" v-if="true">absent</button>
                  <button class="btn btn-info btn-sm mar-bot-5" v-if="false"></button>
                </tr>
              </tbody>
            </table>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
