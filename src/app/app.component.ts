import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor() {
   
  }

  public allowDrop(ev) {
    ev.preventDefault();
  }

  arr: any[] = [
    {
        "routeidHub": 13150542,
        "routeId": 53086,
        "routeStatus": 10,
        "billofladings": [
            {
                "billofladingidHub": 175790790,
                "billOfLadingId": 114712,
                "orderNo": "366620",
                "secondOrderNo": "366620",
                "tripNo": 1,
                "billOfLading": null,
                "billofladingdetails": [
                    {
                        "billofladingidHub": 63702518,
                        "detailID": 233992,
                        "quantity": 1,
                        "billofLadingSub": "0",
                        "netGallons": 0,
                        "ordered": 1,
                        "detailcardtouse": 95,
                        "productId": 6,
                        "terminal": 9,
                        "tblcard": {
                            "idHub": 92,
                            "cardid": 95,
                            "cardnumber": "902641",
                            "custid": 14,
                            "loadUnder": 250,
                            "termid": 9,
                            "tenant": "1",
                            "terminal": {
                                "idHub": 942,
                                "terminalId": 9,
                                "address": "55 Hundreds Rd",
                                "terminalName": "Hundreds Office",
                                "latitude": 42.47158889,
                                "longitude": -70.95804291,
                                "radius": 500,
                                "tenant": "1",
                                "siteVerification": false
                            },
                            "tblloadunder": {
                                "idHub": 1314,
                                "branded": 0,
                                "brandID": 0,
                                "loadUnderName": "Global Oil",
                                "loadUnderID": 250
                            },
                            "billtype": {
                                "billingcodeHub": 14,
                                "billingCSZ": "Rockford, IL 61110",
                                "displayName": "Road Range",
                                "tanksSuppliedwSafeFill": 0,
                                "billingCode": 14,
                                "billingCodeName": "Road Ranger",
                                "inventoryTolerance": 500.0
                            }
                        },
                        "product": {
                            "productId": 6,
                            "displayCode": "FuelOil",
                            "productDescription": "NA1993, Fuel Oil, 3, PG III  No.2 Fuel Oil",
                            "productName": "No. 2 Fuel Oil",
                            "productOrder": 6,
                            "octane": 0.0,
                            "bioDieselCompatible": 0
                        }
                    },
                    {
                        "billofladingidHub": 63702582,
                        "detailID": 234209,
                        "quantity": 4000,
                        "billofLadingSub": "0",
                        "netGallons": 0,
                        "ordered": 4000,
                        "detailcardtouse": 229,
                        "productId": 1,
                        "terminal": 9,
                        "tblcard": {
                            "idHub": 226,
                            "cardid": 229,
                            "cardnumber": "770098",
                            "custid": 14,
                            "loadUnder": 25,
                            "termid": 9,
                            "tenant": "1",
                            "terminal": {
                                "idHub": 942,
                                "terminalId": 9,
                                "address": "55 Hundreds Rd",
                                "terminalName": "Hundreds Office",
                                "latitude": 42.47158889,
                                "longitude": -70.95804291,
                                "radius": 500,
                                "tenant": "1",
                                "siteVerification": false
                            },
                            "tblloadunder": {
                                "idHub": 25,
                                "branded": 0,
                                "brandID": 0,
                                "loadUnderName": "Global CT Rack",
                                "loadUnderID": 25
                            },
                            "billtype": {
                                "billingcodeHub": 14,
                                "billingCSZ": "Rockford, IL 61110",
                                "displayName": "Road Range",
                                "tanksSuppliedwSafeFill": 0,
                                "billingCode": 14,
                                "billingCodeName": "Road Ranger",
                                "inventoryTolerance": 500.0
                            }
                        },
                        "product": {
                            "productId": 1,
                            "displayCode": "REG",
                            "productDescription": "UN1203, Gasoline, 3,  PG II  Regular",
                            "productName": "Regular",
                            "productOrder": 1,
                            "octane": 87.0,
                            "bioDieselCompatible": 0
                        }
                    }
                ],
                "billofladingnotes": [],
                "dealer": {
                    "locationidHub": 93,
                    "locationID": 139,
                    "address": "32 Lyman St.",
                    "address2": null,
                    "city": "Westborough",
                    "county": null,
                    "state": "MA",
                    "zip": null,
                    "dealer": "Stop and Shop Westborough",
                    "tenant": "1",
                    "updatesource": "synchronizer",
                    "loadUnderID": null,
                    "specialInstructions": "250 directions sit amet, nonummy ligula volutpat hac integer nonummy. Suspendisse ultricies, congue etiam tellus, erat libero, nulla eleifend, mauris pellentesque. Suspendisse integer praesent vel, integer gravida mauris, fringilla vehicula lacinia non***250 spec instr sit amet, nonummy ligula volutpat hac integer nonummy. Suspendisse ultricies, congue etiam tellus, erat libero, nulla eleifend, mauris pellentesque. Suspendisse integer praesent vel, integer gravida mauris, fringilla vehicula lacinia non",
                    "latitude": 42.2733526,
                    "longitude": -71.6113911,
                    "radius": 500,
                    "tbltankDTOs": [
                        {
                            "idHub": "1452960",
                            "counter": 11,
                            "locationID": 139,
                            "tankNumber": 1,
                            "product": 6,
                            "productName": "No. 2 Fuel Oil",
                            "tankSize": 2000,
                            "safeFill": "1,800",
                            "inactive": 0,
                            "tankName": "1 Fuel Oil",
                            "lastInventoryDate": "2017-04-10 06:45:00",
                            "lastInventory": 9426,
                            "inventoryAccount": true,
                            "displayCode": "FuelOil",
                            "calculatedUllage": "-7,626"
                        },
                        {
                            "idHub": "1452991",
                            "counter": 19,
                            "locationID": 139,
                            "tankNumber": 9,
                            "product": 1,
                            "productName": "Regular",
                            "tankSize": 3000,
                            "safeFill": "2,700",
                            "inactive": 0,
                            "tankName": "REG- OOS",
                            "lastInventoryDate": "2017-04-10 06:45:00",
                            "lastInventory": 202,
                            "inventoryAccount": true,
                            "displayCode": "REG",
                            "calculatedUllage": "2,498"
                        },
                        {
                            "idHub": "1452961",
                            "counter": 3098,
                            "locationID": 139,
                            "tankNumber": 10,
                            "product": 1,
                            "productName": "Regular",
                            "tankSize": 2000,
                            "safeFill": "1,800",
                            "inactive": 0,
                            "tankName": "Regular",
                            "lastInventoryDate": null,
                            "lastInventory": 0,
                            "inventoryAccount": true,
                            "displayCode": "REG",
                            "calculatedUllage": "1,800"
                        },
                        {
                            "idHub": "1452965",
                            "counter": 12,
                            "locationID": 139,
                            "tankNumber": 20,
                            "product": 6,
                            "productName": "No. 2 Fuel Oil",
                            "tankSize": 0,
                            "safeFill": "inactive",
                            "inactive": -1,
                            "tankName": "2 Fuel Oil",
                            "lastInventoryDate": "2017-04-10 06:45:00",
                            "lastInventory": 9523,
                            "inventoryAccount": true,
                            "displayCode": "FuelOil",
                            "calculatedUllage": "-9,523"
                        },
                        {
                            "idHub": "1452966",
                            "counter": 13,
                            "locationID": 139,
                            "tankNumber": 30,
                            "product": 6,
                            "productName": "No. 2 Fuel Oil",
                            "tankSize": 0,
                            "safeFill": "inactive",
                            "inactive": -1,
                            "tankName": "3 Fuel Oil",
                            "lastInventoryDate": "2017-04-10 06:45:00",
                            "lastInventory": 4529,
                            "inventoryAccount": true,
                            "displayCode": "FuelOil",
                            "calculatedUllage": "-4,529"
                        },
                        {
                            "idHub": "1452967",
                            "counter": 14,
                            "locationID": 139,
                            "tankNumber": 40,
                            "product": 6,
                            "productName": "No. 2 Fuel Oil",
                            "tankSize": 0,
                            "safeFill": "inactive",
                            "inactive": -1,
                            "tankName": "4 Fuel Oil",
                            "lastInventoryDate": "2017-04-10 06:45:00",
                            "lastInventory": 8984,
                            "inventoryAccount": true,
                            "displayCode": "FuelOil",
                            "calculatedUllage": "-8,984"
                        },
                        {
                            "idHub": "1452977",
                            "counter": 15,
                            "locationID": 139,
                            "tankNumber": 50,
                            "product": 6,
                            "productName": "No. 2 Fuel Oil",
                            "tankSize": 11763,
                            "safeFill": "inactive",
                            "inactive": -1,
                            "tankName": "5 Fuel Oil",
                            "lastInventoryDate": "2017-04-10 06:45:00",
                            "lastInventory": 9025,
                            "inventoryAccount": true,
                            "displayCode": "FuelOil",
                            "calculatedUllage": "1,562"
                        },
                        {
                            "idHub": "1452978",
                            "counter": 16,
                            "locationID": 139,
                            "tankNumber": 60,
                            "product": 18,
                            "productName": "DieselOne ULSD Clear",
                            "tankSize": 11763,
                            "safeFill": "inactive",
                            "inactive": -1,
                            "tankName": "ClearDsl",
                            "lastInventoryDate": "2017-04-10 06:45:00",
                            "lastInventory": 9155,
                            "inventoryAccount": true,
                            "displayCode": null,
                            "calculatedUllage": "1,432"
                        },
                        {
                            "idHub": "1452979",
                            "counter": 17,
                            "locationID": 139,
                            "tankNumber": 70,
                            "product": 17,
                            "productName": "DieselOne Red Dyed",
                            "tankSize": 12044,
                            "safeFill": "inactive",
                            "inactive": -1,
                            "tankName": "Red Dyed",
                            "lastInventoryDate": "2017-04-10 06:45:00",
                            "lastInventory": 7741,
                            "inventoryAccount": true,
                            "displayCode": null,
                            "calculatedUllage": "3,099"
                        },
                        {
                            "idHub": "1452980",
                            "counter": 18,
                            "locationID": 139,
                            "tankNumber": 80,
                            "product": 6,
                            "productName": "No. 2 Fuel Oil",
                            "tankSize": 12032,
                            "safeFill": "inactive",
                            "inactive": -1,
                            "tankName": "8 Fuel Oil",
                            "lastInventoryDate": "2017-04-10 06:45:00",
                            "lastInventory": 5579,
                            "inventoryAccount": true,
                            "displayCode": "FuelOil",
                            "calculatedUllage": "5,250"
                        }
                    ],
                    "emailAddress": null,
                    "dealerBOLEmail": null,
                    "siteVerification": true
                },
                "cardtouse": 95,
                "locationID": 139,
                "billingCode": 14,
                "tStamp": "2020-04-21 19:28:20",
                "arrivedAtCustomerTime": null,
                "eta": "2020-04-21 16:45:00",
                "etaFormatted": null,
                "arrivedAtRackTime": null,
                "leftRackTime": null,
                "finalizedDeliveryTime": null,
                "tenant": "1",
                "tenantName": null,
                "split": false,
                "terminal": 9,
                "terminalName": "Hundreds Office",
                "twoTerminalLoad": false,
                "multipleSuppliers": true,
                "hideGallonsOnManifest": 0,
                "deliverwhen": "0400-2400",
                "scheduleShift": 1,
                "loadAfterPriceChange": false,
                "loadBeforePriceChange": false,
                "scheduleDate": "2020-04-21 00:00:00",
                "scheduleDateFormatted": null,
                "loadTotal": null,
                "batchNumber": 23208,
                "truck": 0,
                "zone": 1,
                "loadingNumber": "",
                "bolstatus": 12,
                "bolimageSent": null
            },
            {
                "billofladingidHub": 175790794,
                "billOfLadingId": 114744,
                "orderNo": "363",
                "secondOrderNo": "363",
                "tripNo": 2,
                "billOfLading": null,
                "billofladingdetails": [
                    {
                        "billofladingidHub": 63702523,
                        "detailID": 234054,
                        "quantity": 10000,
                        "billofLadingSub": "0",
                        "netGallons": 0,
                        "ordered": 10000,
                        "detailcardtouse": 1132,
                        "productId": 1,
                        "terminal": 34,
                        "tblcard": {
                            "idHub": 39380,
                            "cardid": 1132,
                            "cardnumber": "44-4015-40003",
                            "custid": 6,
                            "loadUnder": 220,
                            "termid": 34,
                            "tenant": "1",
                            "terminal": {
                                "idHub": 27,
                                "terminalId": 34,
                                "address": "18 Lyman St",
                                "terminalName": "Staples",
                                "latitude": 42.471583,
                                "longitude": -71.95804711,
                                "radius": 500,
                                "tenant": "1",
                                "siteVerification": false
                            },
                            "tblloadunder": {
                                "idHub": 1284,
                                "branded": 0,
                                "brandID": 0,
                                "loadUnderName": "Royal Olympus Cont MA",
                                "loadUnderID": 220
                            },
                            "billtype": {
                                "billingcodeHub": 6,
                                "billingCSZ": "St. Charles, IL 60175-1588",
                                "displayName": "Parent Pet",
                                "tanksSuppliedwSafeFill": 0,
                                "billingCode": 6,
                                "billingCodeName": "Parent Petroleum",
                                "inventoryTolerance": 500.0
                            }
                        },
                        "product": {
                            "productId": 1,
                            "displayCode": "REG",
                            "productDescription": "UN1203, Gasoline, 3,  PG II  Regular",
                            "productName": "Regular",
                            "productOrder": 1,
                            "octane": 87.0,
                            "bioDieselCompatible": 0
                        }
                    }
                ],
                "billofladingnotes": [],
                "dealer": {
                    "locationidHub": 546,
                    "locationID": 647,
                    "address": "19101 Nw 2Nd Ave",
                    "address2": null,
                    "city": "San Diego",
                    "county": null,
                    "state": "VA",
                    "zip": null,
                    "dealer": "441 U-Gas",
                    "tenant": "1",
                    "updatesource": "WEB",
                    "loadUnderID": null,
                    "specialInstructions": "250 directions sit amet, nonummy ligula volutpat hac integer nonummy. Suspendisse ultricies, congue etiam tellus, erat libero, nulla eleifend, mauris pellentesque. Suspendisse integer praesent vel, integer gravida mauris, fringilla vehicula lacinia non***250 spec instr sit amet, nonummy ligula volutpat hac integer nonummy. Suspendisse ultricies, congue etiam tellus, erat libero, nulla eleifend, mauris pellentesque. Suspendisse integer praesent vel, integer gravida mauris, fringilla vehicula lacinia non",
                    "latitude": 42.5018997192383,
                    "longitude": -71.0746994018555,
                    "radius": 500,
                    "tbltankDTOs": [
                        {
                            "idHub": "711",
                            "counter": 2109,
                            "locationID": 647,
                            "tankNumber": 1,
                            "product": 1,
                            "productName": "Regular",
                            "tankSize": 10000,
                            "safeFill": "9,000",
                            "inactive": 0,
                            "tankName": "Regular",
                            "lastInventoryDate": null,
                            "lastInventory": 0,
                            "inventoryAccount": false,
                            "displayCode": "REG",
                            "calculatedUllage": "9,000"
                        },
                        {
                            "idHub": "712",
                            "counter": 2110,
                            "locationID": 647,
                            "tankNumber": 2,
                            "product": 1,
                            "productName": "Regular",
                            "tankSize": 10000,
                            "safeFill": "9,000",
                            "inactive": 0,
                            "tankName": "Regular",
                            "lastInventoryDate": null,
                            "lastInventory": 0,
                            "inventoryAccount": false,
                            "displayCode": "REG",
                            "calculatedUllage": "9,000"
                        }
                    ],
                    "emailAddress": null,
                    "dealerBOLEmail": null,
                    "siteVerification": false
                },
                "cardtouse": 1132,
                "locationID": 647,
                "billingCode": 6,
                "tStamp": "2020-04-21 19:28:53",
                "arrivedAtCustomerTime": null,
                "eta": "2020-04-21 19:38:00",
                "etaFormatted": null,
                "arrivedAtRackTime": null,
                "leftRackTime": null,
                "finalizedDeliveryTime": null,
                "tenant": "1",
                "tenantName": null,
                "split": false,
                "terminal": 34,
                "terminalName": "Staples",
                "twoTerminalLoad": false,
                "multipleSuppliers": false,
                "hideGallonsOnManifest": 0,
                "deliverwhen": "2200-0200",
                "scheduleShift": 1,
                "loadAfterPriceChange": false,
                "loadBeforePriceChange": false,
                "scheduleDate": "2020-04-21 00:00:00",
                "scheduleDateFormatted": null,
                "loadTotal": null,
                "batchNumber": 23214,
                "truck": 0,
                "zone": 1,
                "loadingNumber": "",
                "bolstatus": 10,
                "bolimageSent": null
            }
        ],
        "punchIn": null,
        "punchOut": null,
        "truckNumber": "T-9",
        "truckImeiNumber": "bA",
        "truck": 22,
        "trailerNumber": "TK17",
        "defaultLoadDisplay": true,
        "driverMessage": "",
        "globalMessage": "",
        "dealerPix": true,
        "bolImages": true,
        "showInventoryonConnect": true,
        "gPSsetStatus": true,
        "bucketName": "prodce",
        "shift": "MA-AM",
        "gpsRefreshRate": 60000,
        "syncRate": 900000,
        "switchOnGpsSync": true,
        "startMiles": 0,
        "finishMiles": 0,
        "fuelUsed": 0,
        "totalMiles": 0,
        "mpg": 0.0,
        "fuelLocationID": 1,
        "tblfuellocations": [
            {
                "idHub": 494,
                "fuelLocationID": 1,
                "fuelLocation": "Global",
                "fuelLocationState": "MA"
            },
            {
                "idHub": 495,
                "fuelLocationID": 2,
                "fuelLocation": "J&H",
                "fuelLocationState": "MA"
            },
            {
                "idHub": 496,
                "fuelLocationID": 3,
                "fuelLocation": "Kerrivan Lane",
                "fuelLocationState": "MA"
            },
            {
                "idHub": 497,
                "fuelLocationID": 4,
                "fuelLocation": "Other",
                "fuelLocationState": "MA"
            },
            {
                "idHub": 498,
                "fuelLocationID": 5,
                "fuelLocation": "Mabardy",
                "fuelLocationState": "NH"
            },
            {
                "idHub": 499,
                "fuelLocationID": 6,
                "fuelLocation": "Yard",
                "fuelLocationState": "MA"
            }
        ],
        "hideDetailsOnConnect": true,
        "tblBolReadings": [],
        "deviceUsesLoaddocs": null,
        "splits": 0,
        "driverId": 13,
        "date": "2020-04-21 00:00:00",
        "defGallons": 0,
        "defLocationId": null,
        "oostateMiles": 0
    }
];
  
  public drag(ev, val) {
    console.log(ev);
    if(ev != undefined) {
      // ev.dataTransfer.setData("text3", ev.target.id);
      ev.dataTransfer.setData("text3", val);
    }
    
  }
  
  public drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text3");
    console.log('data: ',data);
    
    let jsonData = JSON.parse(data);
    console.log(jsonData);
    
    // var node = document.createElement("span");                 // Create a <li> node
    // var textnode = document.createTextNode('Load-'+jsonData.val);         // Create a text node
    // node.appendChild(textnode);
    // ev.target.appendChild(node);
    ev.target.appendChild(document.getElementById(data));
    // this.arr = [{id: new Date().getTime(), val: 1},{id: new Date().getTime(), val: 2},{id: new Date().getTime(), val: 3},{id: new Date().getTime(), val: 4}];
    

  }


  public renderData(): any[] {
    console.log('helllo...');
    return [1,2,3,4,5,6,7];
  }


  public isOpened: boolean = false;

  public openBillBoard() {
    this.isOpened = !this.isOpened;
  }



    /**
   * creates serialized string
   *
   * @private
   * @param {*} unSerializedInput : un serialized input
   * @returns {string} : serialized output
   *
   * @memberOf AppComponent
   */
  private getSerializedString(unSerializedInput: any): string {
    let serializedOutput: string = '';

    try {
      serializedOutput = JSON.stringify(unSerializedInput);
    }
    catch (ex) {
      serializedOutput = '';
    }

    return serializedOutput;
  }

}


