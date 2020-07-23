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

const textBillInstantiate = textBill()

function textBillTotal() {

  var billTypeEntered = billTypeText.value;

  textBillInstantiate.textBillTotal(billTypeEntered)



  callsTotalElem.innerHTML = textBillInstantiate.getTotalCalls().toFixed(2);

  smsTotalElem.innerHTML = textBillInstantiate.getTotalSms().toFixed(2);


  totalCostElem.innerHTML = textBillInstantiate.getOverallTotal().toFixed(2);

  textBillTotalColor(textBillInstantiate.getOverallTotal());
};

function textBillTotalColor(totalCost) {

  totalCostElem.classList.remove("critical");
  totalCostElem.classList.remove("warning");
  totalCostElem.classList.add(textBillInstantiate.totalClassName());


};
textTotalAddBtn.addEventListener("click", textBillTotal);



