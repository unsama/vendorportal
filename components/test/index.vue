<template>
  <div class="overflow-auto">
    <b-row>
      <b-col sm="12">
        <b-card>
          <div style="padding:0;margin:0;">
            <table width="100%" style="background-color:#333333;color:whitesmoke;border-radius:5px;" cellpadding="20" cellspacing="0">
              <tbody>
                <tr>
                  <td height="50px" align="center">
                    <img
                      style="border-bottom:3px solid #fcd519;"
                      src="https://roadioapp.com:4443/images/roadio_logo_web.png"
                      ,
                      width="200"
                      alt="Logo"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <table width="100%" align="center" cellspacing="0" style='font-family:"Helvetica","Arial",sans-serif;'>
                      <tbody>
                        <tr>
                          <td style="border-left: 3px solid #fcd519;padding-left: 10px;">
                            <h4>Invoice From:<br />RoadioApp</h4>
                            <a>roadioapppak@gmail.com</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div style="padding: 5px;"></div>
                          </td>
                        </tr>
                        <tr>
                          <td style="border-left: 3px solid #fcd519;padding-left: 10px;">
                            <h4>Invoice To:<invDabr />{{ 'invData.client_data.first_name' + ' ' + 'invData.client_data.last_name' }}</h4>
                            <a>{{ 'ta.client_data.email' }}</a>
                          </td>
                        </tr>
                        <br />
                        <tr>
                          <td colspan="2" style="border-left: 3px solid #fcd519;padding-left: 10px;">
                            <h4>Date: {{ 'invData.inv_data.createdAt' }}</h4>
                            <h4>Invoice #: {{ 'invData.inv_data.invoice_no' }}</h4>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div style="padding: 5px;"></div>
                          </td>
                        </tr>
                        <tr>
                          <td style="width:50%;vertical-align: top;float: right;margin-top: -248px;">
                            <table width="100%" align="center" border="0" style="border: 2px solid;">
                              <thead>
                                <tr>
                                  <th colspan="2" style="border: 2px solid;">
                                    <h4 style="margin: 0;padding: 10px;text-align: center;font-size: 27px;color: #fcd519;">Driver Details</h4>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td style="border: 2px solid;padding: 5px;text-align:left;">Name</td>
                                  <td style="border: 2px solid;padding: 5px;text-align:left;">
                                    {{ 'invData.driver_data.first_name' + ' ' + 'invData.driver_data.last_name' }}
                                  </td>
                                </tr>
                                <tr>
                                  <td style="border: 2px solid;padding: 5px;text-align:left;">Email</td>
                                  <td style="border: 2px solid;padding: 5px;text-align:left;">{{ 'invData.driver_data.email' }}</td>
                                </tr>
                                <tr>
                                  <td style="border: 2px solid;padding: 5px;text-align:left;">Mobile No.</td>
                                  <td style="border: 2px solid;padding: 5px;text-align:left;">{{ 'invData.driver_data.mob_no' }}</td>
                                </tr>
                                <tr>
                                  <td style="border: 2px solid;padding: 5px;text-align:left;">Vehicle</td>
                                  <td style="border: 2px solid;padding: 5px;text-align:left;">{{ 'invData.driver_data.vehicle' }}</td>
                                </tr>
                                <tr>
                                  <td style="border: 2px solid;padding: 5px;text-align:left;">Vehicle Number</td>
                                  <td style="border: 2px solid;padding: 5px;text-align:left;">{{ 'invData.driver_data.v_number' }}</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td style="width:40%;vertical-align: top;">
                            <table width="100%" align="center" border="0" style="border: 2px solid;margin-top: -248px;">
                              <thead>
                                <tr>
                                  <th colspan="2" style="border: 2px solid;">
                                    <h4 style="margin: 0;padding: 10px;text-align: center;font-size: 27px;color: #fcd519;">Request Details</h4>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td style="border: 2px solid;padding: 5px;text-align:left;">Created Request</td>
                                  <td style="border: 2px solid;padding: 5px;text-align:left;">{{ 'invData.req_data.createdAt' }}</td>
                                </tr>
                                <tr>
                                  <td style="border: 2px solid;padding: 5px;text-align:left;">Origin</td>
                                  <td style="border: 2px solid;padding: 5px;text-align:left;">{{ 'invData.req_data.orgText' }}</td>
                                </tr>
                                <tr>
                                  <td style="border: 2px solid;padding: 5px;text-align:left;">Destination</td>
                                  <td style="border: 2px solid;padding: 5px;text-align:left;">{{ 'invData.req_data.desText' }}</td>
                                </tr>
                                <tr>
                                  <td style="border: 2px solid;padding: 5px;text-align:left;">Vehicle Required</td>
                                  <td style="border: 2px solid;padding: 5px;text-align:left;">{{ 'invData.req_data.vecType' }}</td>
                                </tr>
                                <tr>
                                  <td style="border: 2px solid;padding: 5px;text-align:left;">Est. Time</td>
                                  <td style="border: 2px solid;padding: 5px;text-align:left;">{{ 'invData.req_data.durText' }}</td>
                                </tr>
                                <tr>
                                  <td style="border: 2px solid;padding: 5px;text-align:left;">Est. Distance</td>
                                  <td style="border: 2px solid;padding: 5px;text-align:left;">{{ 'invData.req_data.disText' }}</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div style="padding: 5px;"></div>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            <table width="100%" align="center" border="0" style="border: 2px solid;">
                              <thead>
                                <tr>
                                  <th style="border: 2px solid;">
                                    <h4 style="margin: 0;padding: 10px;text-align: center;font-size: 27px;color: #fcd519;">Order Details</h4>
                                  </th>
                                  <th style="border: 2px solid;min-width: 150px;width: auto;">
                                    <h4 style="margin: 0;padding: 10px;text-align: center;font-size: 27px;color: #fcd519;">Amount</h4>
                                  </th>
                                  <th style="border: 2px solid;min-width: 150px;width: auto;">
                                    <h4 style="margin: 0;padding: 10px;text-align: center;font-size: 27px;color: #fcd519;">Discount</h4>
                                  </th>
                                  <th style="border: 2px solid;min-width: 150px;width: auto;">
                                    <h4 style="margin: 0;padding: 10px;text-align: center;font-size: 27px;color: #fcd519;">Payable</h4>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td style="border: 2px solid;padding: 5px;text-align:center;">
                                    From({{ 'invData.req_data.orgText ' }}) To({{ 'invData.req_data.desText' }}) User({{
                                      'invData.client_data.first_name'
                                    }}) Driver({{ 'invData.driver_data.first_name' }})
                                  </td>
                                  <td style="border: 2px solid;padding: 5px;text-align:center;">Rs.{{ 'invData.inv_data.amount' }}</td>
                                  <!-- <td style="border: 2px solid;padding: 5px;text-align:center;" v-if="invData.inv_data.discountPrice &lt; 1">Rs.0</td> -->
                                  <!-- <td style="border: 2px solid;padding: 5px;text-align:center;" v-else="v-else">
                                    Rs.{{ invData.inv_data.amount - invData.inv_data.discountPrice }}
                                  </td> -->
                                  <td style="border: 2px solid;padding: 5px;text-align:center;" v-if="true">Rs.{{ 'invData.inv_data.amount' }}</td>
                                  <!-- <td style="border: 2px solid;padding: 5px;text-align:center;" v-else="false">
                                    Rs.{{ "invData.inv_data.discountPrice" }}
                                  </td> -->
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div style="padding: 10px;"></div>
                          </td>
                        </tr>
                        <tr>
                          <td style="border-left: 3px solid #fcd519;padding-left: 10px;">
                            <h4>Phone: 0303*******</h4>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div style="padding: 5px;"></div>
                          </td>
                        </tr>
                        <tr>
                          <td style="border-left: 3px solid #fcd519;padding-left: 10px;float: right;margin-right: 369px;margin-top: -47px;">
                            <h4>Email:&nbsp;<a>roadioapppak@gmail.com</a></h4>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div style="padding: 5px;"></div>
                          </td>
                        </tr>
                        <tr>
                          <td style="border-left: 3px solid #fcd519;padding-left: 10px;float: right;margin-top: -54px;">
                            <h4>Website:&nbsp;<a>www.roadioapp.com</a></h4>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>