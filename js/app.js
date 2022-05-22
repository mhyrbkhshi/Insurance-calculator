// class 
const display = new Display()
const validate = new Validate()
const calculate = new Calculate()


// variable 
const yearSelect = document.querySelector("#year");
const subBtn = document.querySelector(".btn-primary")
const form = document.querySelector("#request-quote")
const carSelect = document.querySelector("#make");


// eventlistener
eventListener();
function eventListener() { 
   // when page loaded 
   document.addEventListener("DOMContentLoaded", e => {
      // display current year up to 10 years ago in year select 
      display.displayYears(10, yearSelect);
   });
   // when form submited 
   form.addEventListener("submit", e => {
      e.preventDefault()
      // validate form 
      validate.validateForm(e.target, yearSelect.value, carSelect.value)
   })
};
