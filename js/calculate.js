class Calculate{
   constructor (){
      // base price of insurance 
      this.basePrice = 2000000
      // current year 
      this.curYear = new Date().getFullYear() - 622;

   }
   // calculate and return the insurance price
   calculateInsurance (car, year, type){
      let price;
      switch (true) {
         case car == "1":
            price = this.basePrice * 1.15
            break;
         case car == "2":
            price = this.basePrice * 1.35
            break;
         case car == "3":
            price = this.basePrice * 1.65
            break;
      }
      let yearRange = this.curYear - year
      price = price - price*(yearRange/100)
      switch (true) {
         case type == "basic":
            price = price * 1.15 
            break;
         case type == "complete":
            price = price * 1.30 
            break;
      }
      // round 
      return price.toFixed(0)
   }
}