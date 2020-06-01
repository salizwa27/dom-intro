// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

const billItemTypeRadio = document.querySelector(".billItemTypeRadio");
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");
const callTotalTwo = document.querySelector(".callTotalTwo");
const smsTotalTwo = document.querySelector(".smsTotalTwo");
const totalTwo = document.querySelector(".totalTwo");


var callTotal = 0;
var smsTotal = 0;
var theTotal = 0;

function radioBillTotal(){

var checkedBtn = document.querySelector("input[name='billItemType']:checked");

var billItemInserted = checkedBtn.value;

   if (billItemInserted === "call"){
       callTotal += 2.75;
     
      }
      else if (billItemInserted === "sms") {
          smsTotal += 0.75;
      
}
  
     callTotalTwo.innerHTML= callTotal.toFixed(2);
     smsTotalTwo.innerHTML= smsTotal.toFixed(2);
   
    theTotal = callTotal + smsTotal;
    totalTwo.innerHTML= theTotal.toFixed(2);
    radioBillTotalColor(theTotal);
};
function radioBillTotalColor(theTotal){
  

    totalTwo.classList.remove("danger");

    totalTwo.classList.remove("warning");

    if (theTotal >= 50){
     
      totalTwo.classList.add("danger");

}
   else if (theTotal >= 30){
     
     totalTwo.classList.add("warning");
}

};

radioBillAddBtn.addEventListener("click",radioBillTotal)
