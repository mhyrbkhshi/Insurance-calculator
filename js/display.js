class Display{
   constructor (){
      // current year 
      this.curYear = new Date().getFullYear() - 622;
      // result contianer 
      this.result = document.querySelector("#result")
      // submit of form 
      this.subBtn = result.parentElement.querySelector("button[type='submit']")
      // loading contianer 
      this.loading = document.querySelector("#loading");
   }
   // display range of years in selectTag
   displayYears(range, selectTag){
      // last year 
      let lastYear = this.curYear - range
      // make options with years and add to selectTag
      for (let index = this.curYear; index >= lastYear; index--) {
         let opt = document.createElement("option");
         opt.appendChild(document.createTextNode(index));
         selectTag.appendChild(opt);
      }
   }
   // display alert 2s in div#loading 
   displayAlert(text, wich){
      // this for remove insurance price
      let all = this.result.querySelectorAll("div")
      all = Array.from(all)
      if (all) {
         all.forEach(element => {
            element.remove()
         });        
      }
      // make alert 
      let div = document.createElement("div")
      div.setAttribute("class", `alert ${wich}`)
      div.style.textAlign = "center"
      div.appendChild(document.createTextNode(text));
      // displayed alert in result 
      this.loading.appendChild(div);
      // disable submit btn of form 
      this.subBtn.disabled = true
      // able the btn and remove alert 
      setTimeout(() => {
         this.subBtn.disabled = false
         div.remove()
      }, 2000);
   }
   // display insurance price in <div>#result 
   displayPrice (price, car, year, type){
      // this for remove insurance price
      let all = this.result.querySelectorAll("div")
      all = Array.from(all)
      if (all) {
         all.forEach(element => {
            element.remove()
         });        
      }
      // make div container for result 
      let div = document.createElement("div")
      let carName;
      let typeName;
      switch (true) {
         case car == "1":
            carName = "Peraid";
            break;
         case car == "2":
            carName = "Pars";
            break;
         case car == "3":
            carName = "Optima";
            break;
      }
      switch (true) {
         case type == "basic":
            typeName = "Simple"
            break;
         case type == "complete":
            typeName = "Complete"
            break;
      }
      div.innerHTML = `
         <h4 class="header">Result </h4>
         <h5 class="result">Car model : ${carName}</h5>
         <h5 class="result"> Construction year: ${year}</h5>
         <h5 class="result">Insurance type : ${typeName}</h5>
         <h5 class="result">Price : ${price} tomans</h5>
         `;
         // display spinner 
         this.displaySpinner(div)
   }
   // display spinner for 1s in div#loading
   displaySpinner (result){
      // define spinner img 
      let spinner = document.createElement("img");
      spinner.setAttribute("src", "./css/spinner.gif");
      this.loading.appendChild(spinner);
      this.subBtn.disabled = true ;
      setTimeout(() => {
         spinner.remove();
         this.subBtn.disabled = false;
         this.result.parentElement.querySelector("form").reset()
         this.result.appendChild(result)
      }, 1000);
   }
}