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



var radioBillFact = radioBill();

function radioBillTotal(){

var checkedBtn = document.querySelector("input[name='billItemType']:checked");

var billItemInserted = checkedBtn.value;
radioBillFact.radioBillTotal(billItemInserted)

  
     callTotalTwo.innerHTML=radioBillFact.getTotalCalls().toFixed(2);
     smsTotalTwo.innerHTML= radioBillFact.getTotalSms().toFixed(2);

    totalTwo.innerHTML= radioBillFact.getOverallTotal().toFixed(2);
    totalTwo.classList.add(radioBillFact.totalClassName())
};



radioBillAddBtn.addEventListener("click",radioBillTotal)
