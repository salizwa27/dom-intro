// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


const billTypeText = document.querySelector(".billTypeText");

const textTotalAddBtn = document.querySelector(".addToBillBtn");

const callsTotalElem = document.querySelector(".callTotalOne");

const smsTotalElem = document.querySelector(".smsTotalOne");

const totalCostElem = document.querySelector(".totalOne");

var callsTotal = 0
var smsTotal = 0

function textBillTotal()  {

  var billTypeEntered = billTypeText.value; 
  
if (billTypeEntered === "call"){
    //dot not coma 2.75

callsTotal += 2.75;
}

else if (billTypeEntered === "sms"){
  //dot not coma 0.65
smsTotal += 0.65;
};

callsTotalElem.innerHTML = callsTotal.toFixed(2);

smsTotalElem.innerHTML = smsTotal.toFixed(2);

var totalCost = callsTotal + smsTotal;
totalCostElem.innerHTML = totalCost.toFixed(2);

textBillTotalColor(totalCost);
};

function textBillTotalColor(totalCost){

totalCostElem.classList.remove("danger");
totalCostElem.classList.remove("warning");

if (totalCost >= 50){
totalCostElem.classList.add("danger");
}

else if (totalCost >= 30){
totalCostElem.classList.add("warning");
};
};
 textTotalAddBtn.addEventListener("click", textBillTotal);
