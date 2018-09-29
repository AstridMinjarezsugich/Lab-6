'use strict';

var pikePlace = { //Planning out objects properties that make the site work
  name: 'First and Pike',
  min: 23,
  max: 65,
  avgCookiesPerSale: 6.3,
  cookiesSoldEachHour: [],
};

pikePlace.calculateCustomersPerHour = function(){ //function to calculate customers per hour
  var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.round(randomAmount * this.avgCookiesPerSale);
};

pikePlace.calculateCookiesSoldEAchHour = function(){ //amount of cookies sold for length of time
  console.log(this);
  for(var i = 0; i < 15; i++){
    this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
  }
};

pikePlace.renderHours = function(){
  this.calculateCookiesSoldEAchHour(); // calling the data needed to give the amount of cookies sold
  var storesContainer = document.getElementById('stores');
  console.log(storesContainer);
  var headerEl = document.createElement('h2');
  console.log(headerEl);
  headerEl.textContent = this.name; 
  storesContainer.appendChild(headerEl);
  var ulEl = document.createElement('ul'); //create an element
  console.log(this.cookiesSoldEachHour);
  for(var i in this.cookiesSoldEachHour){ //give ul content
      //same as
     //for (var i = 0; i < this.cookiesSoldEachHour.Length; i ++)
    var listItemEl = document.createElement('li');
    console.log(listItemEl);
    listItemEl.textContent = this.cookiesSoldEachHour[i];
    ulEl.appendChild(listItemEl);
  }
  //append the ul
  storesContainer.appendChild(ulEl);
};
pikePlace.renderHours();
//pikePlace.calculateCookiesSoldEAchHour();

var seaTac = {
  name: 'SeaTac Airport',
  min: 3,
  max: 24,
  avgCookiesPerSale: 1.2,
  cookiesSoldEachHour: [],
};

seaTac.calculateCustomersPerHour = function(){
  var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.round(randomAmount * this.avgCookiesPerSale); 
};

seaTac.calculateCookiesSoldEAchHour = function(){
  console.log(this);
  for(var i = 0; i <15; i ++);{
    this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
  }
};

seaTac.renderHours = function(){ 
  this.calculateCookiesSoldEAchHour();
  var storesContainer = document.getElementById('stores');
  console.log(storesContainer);
  var headerEl = document.createElement('h2');
  console.log(headerEl);
  headerEl.textContent = this.name;
  storesContainer.appendChild(headerEl);
  var ulEl = document.createElement('ul');
  console.log(this.cookiesSoldEachHour);
  for(var i in this.cookiesSoldEachHour){
    
    var listItemEl = document.createElement('li');
    console.log(listItemEl);
    listItemEl.textContent = this.cookiesSoldEachHour[i];
    ulEl.appendChild(listItemEl);
  }
  storesContainer.appendChild(ulEl);
};
seaTac.renderHours();













