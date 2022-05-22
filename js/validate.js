class Validate{
   // validate all of the form for display insurance price 
   validateForm(form, element_1, element_2){
      if (element_1 != "0" && element_2 != "0") {
         // find checked radio btn 
         let radio = this.validateRadios(form);
         // calculate price 
         let insurancePrice = calculate.calculateInsurance(element_2, element_1, radio);
         // display price 
         display.displayPrice(insurancePrice, element_2, element_1, radio)
      }else {
         // display error 
         display.displayAlert("Please complete the form !!", "alert-danger")
      }
   }
   // find checked radio 
   validateRadios(form) {
      return form.querySelector("input[type='radio']:checked").value;
   }
}