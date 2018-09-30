'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var form = document.getElementById('stores_form');
var tables = document.getElementById('shell');
var data

//Constructor for all stores-Lab 7
var Store = function(name, min, max, avgCookiesPerHour){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookiesPerHour = avgCookiesPerHour;
  this.cookiesPerHrArray = ['<td> + name + </td>']
}

//Populate array of average customers per hour
Store.prototype.cusHourly = function() {
  var randomAmountOfCooksPerHr = Math.floor(Math.random() * (this.max - this.min)) + this.min;
  return randomAmountOfCooksPerHr;
};

//Populate cookies per hour
Store.prototype.salesGen = function() {
  var total = 0;
  for(var i =0; i < hours.length; i++) {
    var hourlyCookies = Math.ceil(this.cusHourly() * this.avgCookiesPerHour);
    this.cookiesPerHrArray.push('<td>' + hourlyCookies + '</td>');

    total += hourlyCookies;
  }

  this.cookiesPerHrArray.push('<td>' + total + '</td>');
}
Store.prototype.render = function() {
  var tableRow = document.createElement('<tr>');
  tableRow.innerHTML = this.cookiesPerHrArray.join('');
  table.appendChild(tableRow)
}

//TO DO!! Total number of cookies sold per store daily

//Instantiate constructor
var pikePlace = new Store('First and Pike', 23, 65, 6.3)
var seatac = new Store('SeaTac Airport', 3, 24, 1.2)
var seattleCtr = new Store('Seattle Center', 11, 38, 3.7)
var capHill = new Store('Capitol Hill', 20, 38, 2.3)
var alki = new Store('Alki', 2, 16, 4.6)

var storeArr = [pikePlace, seatac, seattleCtr, capHill, alki];

function renderStore(){
  for(var i =0; i < storeArr.length; i++) {
    storeArr[i].salesGen();
    storeArr[i].render();
  }
}

renderStores();

  

// start out with planning the objects that collect data and make site work
var pikePlace = {
 // variable for a location with set minimum and maximum cookies sold
 name: 'First and Pike',
 min: 23,
 max: 65,
 avgCookiesPerSale: 6.3,
 cookiesSoldEachHour: [],
 avgCustArr: [],
 totalCooks: 0,
 // to store a bunch of values, not only to calculate but also to store

 // need function to calculate cookies sales per hour
 // method that generates a random number
 calculateCustPerHour: function () {
   for (var i = 0; i < hours.length; i++) {
     var randomAmount = Math.floor(Math.random() * (this.max - this.min)) + this.min;
     this.avgCustArr.push(randomAmount);
     // adds a random amount of cust for each hour to the array
     // math.round will get me .5 and higher to go up and anything less to round down
   }
 },
 // by adding coma it keeps it open
 //method to calculate the cookies sold each hour, over all 15 hours and to store them in array
 calculateCookiesSoldEachHour: function () {
   for (var j = 0; j < hours.length; j++) {
     this.totalCooks += this.avgCustArr[j];
     console.log("**********", this.totalCooks)
     // each hour of the day put amount of cust. mult by cook for sale, this is to calculate 15 times
     //"this" points back to the object in which the object is called in
   }
 },

 //creat list and append it to the DOM-document, object, model
 listThings: function () {
   var container = document.createElement('div');
   container.innerHTML = '<h3>' + this.name + '</h3>';
   document.body.appendChild(container);

   var list = document.createElement('ul');
   var listArr =[];
   for(var i =0; i < hours.length; i++){
     if(i > 5){
       listArr.push('<li>' + hours[i] + ':' + this.avgCustArr[i] + 'cookies</li>');
     } else {
      listArr.push('<li>' + hours[i] + ':' + this.avgCustArr[i] + 'cookies</li>');
     }
   }
   
   listArr.push('<li>Totals: ' + this.totalCooks + 'cookies</li>');
   var fullString = listArr.join('');
   list.innerHTML = fullString;
   document.body.appendChild(list)
 }

}



pikePlace.calculateCustPerHour();
pikePlace.calculateCookiesSoldEachHour();
pikePlace.listThings();


var seaTac = {
  // variable for a location with set minimum and maximum cookies sold
  name: 'SeaTac Airport',
  min: 3,
  max: 24,
  avgCookiesPerSale: 1.2,
  cookiesSoldEachHour: [],
  avgCustArr: [],
  totalCooks: 0,
  // to store a bunch of values, not only to calculate but also to store
 
  // need function to calculate cookies sales per hour
  // method that generates a random number
  calculateCustPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var randomAmount = Math.floor(Math.random() * (this.max - this.min)) + this.min;
      this.avgCustArr.push(randomAmount);
      // adds a random amount of cust for each hour to the array
      // math.round will get me .5 and higher to go up and anything less to round down
    }
  },
  // by adding coma it keeps it open
  //method to calculate the cookies sold each hour, over all 15 hours and to store them in array
  calculateCookiesSoldEachHour: function () {
    for (var j = 0; j < hours.length; j++) {
      this.totalCooks += this.avgCustArr[j];
      console.log("**********", this.totalCooks)
      // each hour of the day put amount of cust. mult by cook for sale, this is to calculate 15 times
      //"this" points back to the object in which the object is called in
    }
  },
 
  //creat list and append it to the DOM-document, object, model
 
  listThings: function () {
    var container = document.createElement('div');
    container.innerHTML = '<h3>' + this.name + '</h3>';
    document.body.appendChild(container);
 
    var list = document.createElement('ul');
    var listArr =[];
    for(var i =0; i < hours.length; i++){
      if(i > 5){
        listArr.push('<li>' + hours[i] + ':' + this.avgCustArr[i] + 'cookies</li>');
      } else {
       listArr.push('<li>' + hours[i] + ':' + this.avgCustArr[i] + 'cookies</li>');
      }
    }
    
 
    listArr.push('<li>Totals: ' + this.totalCooks + 'cookies</li>');
 
    var fullString = listArr.join('');
    list.innerHTML = fullString;
    document.body.appendChild(list)
   
  }
 
 }
 
 
 
 seaTac.calculateCustPerHour();
 seaTac.calculateCookiesSoldEachHour();
 seaTac.listThings();

 var seattleCenter = {
  // variable for a location with set minimum and maximum cookies sold
  name: 'Seattle Center',
  min: 11,
  max: 38,
  avgCookiesPerSale: 3.7,
  cookiesSoldEachHour: [],
  avgCustArr: [],
  totalCooks: 0,
  // to store a bunch of values, not only to calculate but also to store
 
  // need function to calculate cookies sales per hour
  // method that generates a random number
  calculateCustPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var randomAmount = Math.floor(Math.random() * (this.max - this.min)) + this.min;
      this.avgCustArr.push(randomAmount);
      // adds a random amount of cust for each hour to the array
      // math.round will get me .5 and higher to go up and anything less to round down
    }
  },
  // by adding coma it keeps it open
  //method to calculate the cookies sold each hour, over all 15 hours and to store them in array
  calculateCookiesSoldEachHour: function () {
    for (var j = 0; j < hours.length; j++) {
      this.totalCooks += this.avgCustArr[j];
      console.log("**********", this.totalCooks)
      // each hour of the day put amount of cust. mult by cook for sale, this is to calculate 15 times
      //"this" points back to the object in which the object is called in
    }
  },
 
  //creat list and append it to the DOM-document, object, model
 
  listThings: function () {
    var container = document.createElement('div');
    container.innerHTML = '<h3>' + this.name + '</h3>';
    document.body.appendChild(container);
 
    var list = document.createElement('ul');
    var listArr =[];
    for(var i =0; i < hours.length; i++){
      if(i > 5){
        listArr.push('<li>' + hours[i] + ':' + this.avgCustArr[i] + 'cookies</li>');
      } else {
       listArr.push('<li>' + hours[i] + ':' + this.avgCustArr[i] + 'cookies</li>');
      }
    }
    
 
    listArr.push('<li>Totals: ' + this.totalCooks + 'cookies</li>');
 
    var fullString = listArr.join('');
    list.innerHTML = fullString;
    document.body.appendChild(list)
   
  }
 
 }
 
 
 
 seattleCenter.calculateCustPerHour();
 seattleCenter.calculateCookiesSoldEachHour();
 seattleCenter.listThings();


 var capitolHill = {
  // variable for a location with set minimum and maximum cookies sold
  name: 'Capitol Hill',
  min: 20,
  max: 38,
  avgCookiesPerSale: 2.3,
  cookiesSoldEachHour: [],
  avgCustArr: [],
  totalCooks: 0,
  // to store a bunch of values, not only to calculate but also to store
 
  // need function to calculate cookies sales per hour
  // method that generates a random number
  calculateCustPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var randomAmount = Math.floor(Math.random() * (this.max - this.min)) + this.min;
      this.avgCustArr.push(randomAmount);
      // adds a random amount of cust for each hour to the array
      // math.round will get me .5 and higher to go up and anything less to round down
    }
  },
  // by adding coma it keeps it open
  //method to calculate the cookies sold each hour, over all 15 hours and to store them in array
  calculateCookiesSoldEachHour: function () {
    for (var j = 0; j < hours.length; j++) {
      this.totalCooks += this.avgCustArr[j];
      console.log("**********", this.totalCooks)
      // each hour of the day put amount of cust. mult by cook for sale, this is to calculate 15 times
      //"this" points back to the object in which the object is called in
    }
  },
 
  //creat list and append it to the DOM-document, object, model
 
  listThings: function () {
    var container = document.createElement('div');
    container.innerHTML = '<h3>' + this.name + '</h3>';
    document.body.appendChild(container);
 
    var list = document.createElement('ul');
    var listArr =[];
    for(var i =0; i < hours.length; i++){
      if(i > 5){
        listArr.push('<li>' + hours[i] + ':' + this.avgCustArr[i] + 'cookies</li>');
      } else {
       listArr.push('<li>' + hours[i] + ':' + this.avgCustArr[i] + 'cookies</li>');
      }
    }
    
 
    listArr.push('<li>Totals: ' + this.totalCooks + 'cookies</li>');
 
    var fullString = listArr.join('');
    list.innerHTML = fullString;
    document.body.appendChild(list)
   
  }
 
 }
 
 
 
 capitolHill.calculateCustPerHour();
 capitolHill.calculateCookiesSoldEachHour();
 capitolHill.listThings();


 var Alki = {
  // variable for a location with set minimum and maximum cookies sold
  name: 'Alki',
  min: 2,
  max: 16,
  avgCookiesPerSale: 4.6,
  cookiesSoldEachHour: [],
  avgCustArr: [],
  totalCooks: 0,
  // to store a bunch of values, not only to calculate but also to store
 
  // need function to calculate cookies sales per hour
  // method that generates a random number
  calculateCustPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      var randomAmount = Math.floor(Math.random() * (this.max - this.min)) + this.min;
      this.avgCustArr.push(randomAmount);
      // adds a random amount of cust for each hour to the array
      // math.round will get me .5 and higher to go up and anything less to round down
    }
  },
  // by adding coma it keeps it open
  //method to calculate the cookies sold each hour, over all 15 hours and to store them in array
  calculateCookiesSoldEachHour: function () {
    for (var j = 0; j < hours.length; j++) {
      this.totalCooks += this.avgCustArr[j];
      console.log("**********", this.totalCooks)
      // each hour of the day put amount of cust. mult by cook for sale, this is to calculate 15 times
      //"this" points back to the object in which the object is called in
    }
  },
 
  //creat list and append it to the DOM-document, object, model
 
  listThings: function () {
    var container = document.createElement('div');
    container.innerHTML = '<h3>' + this.name + '</h3>';
    document.body.appendChild(container);
 
    var list = document.createElement('ul');
    var listArr =[];
    for(var i =0; i < hours.length; i++){
      if(i > 5){
        listArr.push('<li>' + hours[i] + ':' + this.avgCustArr[i] + 'cookies</li>');
      } else {
       listArr.push('<li>' + hours[i] + ':' + this.avgCustArr[i] + 'cookies</li>');
      }
    }
    
 
    listArr.push('<li>Totals: ' + this.totalCooks + 'cookies</li>');
 
    var fullString = listArr.join('');
    list.innerHTML = fullString;
    document.body.appendChild(list)
   
  }
 
 }
 
 Alki.calculateCustPerHour();
 Alki.calculateCookiesSoldEachHour();
 Alki.listThings();




