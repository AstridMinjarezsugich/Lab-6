'use strict';
var storehours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// var with array with the storehours open
var table = document.getElementById('store-table');
// store constructor function
var Store = function (name, min, max, avgCookiesPerHour) {
  this.name = name; // name of store
  this.min = min; // min number of customers per hour
  this.max = max; // max number or cust per hour
  this.avgCookiesPerHour = avgCookiesPerHour; // avg num of cookies sold per CUSTOMER
  this.cookiesPerHrArray = ['<td>' + name + '</td>']; // number of cookies sold at this store per hour
  this.dailyTotal = 0;
  storeArray.push(this);
};
var storeArray = [];

// one hour of cookies sold, produced by random number
Store.prototype.custHourly = function() {
  var randomAmountofCooksPerHr = Math.floor(Math.random() * (this.max - this.min)) + this.min;
  return randomAmountofCooksPerHr;
};

Store.prototype.salesGen = function() {
  var total = 0;
  for ( var i = 0; i < storehours.length; i++) {
    var hourlyCookies = Math.ceil(this.custHourly() * this.avgCookiesPerHour);
    this.cookiesPerHrArray.push('<td>' + hourlyCookies + '</td>');
    total += hourlyCookies;
  }

  this.cookiesPerHrArray.push('<td>' + total + '</td>');
};

Store.prototype.render = function(){
  var tableRow = document.createElement('tr');
  tableRow.innerHTML = this.cookiesPerHrArray.join('');
  table.appendChild(tableRow);
};


//begin the constructor
var pikePlace = new Store('First and Pike', 23, 65, 6.3);
var seatac = new Store('Seatac', 3, 24, 1.2);
var seattleCtr = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var storeArr = [pikePlace, seatac, seattleCtr, capHill, alki];

function renderStores(){
  for(var i = 0; i < storeArr.length; i++) {
    storeArr[i].salesGen();
    storeArr[i].render();
  }
}

renderStores();
//Table Rendering
var storeTableEL = document.getElementById('store-table');

var renderAsATableHeader = function(){
  var trowEl = document.createElement('tHead');
  for(var h = 0; h < storehours.length; h++){
    var tdEl = document.createElement('td');
    tdEl.textContent = storehours[h];
    trowEl.appendChild(tdEl);
  }
  storeTableEL.appendChild(trowEl);
};

var renderAsATableRow = function(){
  for(var i = 0; i < storeArray.length; i++) {
    storeArray[i].totalSales();
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = storeArray[i].name;
    trEl.appendChild(thEl);
    for(var c = 0; c < storeArray[i].cookiesSoldEachHour.length; c++) {
      var tdEl = document.createElement('td');
      tdEl.textContent = storeArray[i].cookiesSoldEachHour[c];
      trEl.appendChild(tdEl);
    }
    thEl = document.createElement('td');
    thEl.textContent = storeArray[i].dailyTotal;
    trEl.appendChild(thEl);
    storeTableEL.appendChild(trEl);
  }
};

var renderAsATableFooter = function(){
  var trEl = document.createElement('tFoot');
  var thEl = document.createElement('th');
  thEl.textContent = 'total';
  trEl.appendChild(thEl);
  for(var i = 1; i < storehours.length - 1; i++) {
    var hourlytotal = 0;
    for(var t = 0; t < storeArray.length; t++) {
      var tdEl = document.createElement('td');
      hourlytotal += storeArray[t].cookiesSoldEachHour[i - 1];
    }
    tdEl.textContent = hourlytotal;
    trEl.appendChild(tdEl);
    storeTableEL.appendChild(trEl);
  }
};
//Rendering for Stores
renderAsATableHeader();
renderAsATableRow();
renderAsATableFooter();

