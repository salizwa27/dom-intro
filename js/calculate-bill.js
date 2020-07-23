//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button

const calculateBtn = document.querySelector(".calculateBtn");
const billTotalElement = document.querySelector(".billTotal");
const billStringTotalElement = document.querySelector(".billString");
const billTotalSpanElement = document.querySelector(".total");

var calculateBillInstantiate = calculateBill()

function phoneBillColor(roundedTotal) {

  const theTotal = Number(roundedTotal);

  billTotalSpanElement.classList.remove("warning");
  billTotalSpanElement.classList.remove("critical");
  billTotalSpanElement.classList.add(calculateBillInstantiate.totalShowClassName(theTotal));


};

function calculateBtnClicked() {
  let billString = billStringTotalElement.value;

  const roundedTotal = calculateBillInstantiate.action(billString);
  billTotalElement.innerHTML = roundedTotal;
  phoneBillColor(roundedTotal);

  billTotalElement.innerHTML = roundedTotal;
};
calculateBtn.addEventListener("click", calculateBtnClicked);