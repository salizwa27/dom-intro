// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

// const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
const radioBillAddBtnElem = document.querySelector(".radioBillAddBtn")
const callTotalSettings = document.querySelector(".callTotalSettings");
const smsTotalSettings = document.querySelector(".smsTotalSettings");
const totalSettings = document.querySelector(".totalSettings");
const callCostSetting = document.querySelector(".callCostSetting");
const smsCostSetting = document.querySelector(".smsCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");
const updateSettingsElem = document.querySelector(".updateSettings");
const addBtnElem = document.querySelector(".addBtn")

var callTotal = 0;
var smsTotal = 0;
var total = 0;

var call = 0;
var sms = 0;
var warning = 0;
var critical = 0;


function updateSettings() {
  call = Number(callCostSetting.value);
  sms = Number(smsCostSetting.value);
  warning = Number(warningLevelSetting.value)
  critical = Number(criticalLevelSetting.value);
  billTypeWithSettingsColor(total);
}

function billTypeWithSettings() {

  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");

  if (total < critical) {
    if (checkedRadioBtn) {
      var billRadio = checkedRadioBtn.value;
   
      if (billRadio === 'call') {
        callTotal += call;
      }

      else if (billRadio === 'sms') {
        smsTotal += sms;
      }
    }
  }

  callTotalSettings.innerHTML = callTotal.toFixed(2);
  smsTotalSettings.innerHTML = smsTotal.toFixed(2);

  total = callTotal + smsTotal;
  billTypeWithSettingsColor(total);
  totalSettings.innerHTML = total.toFixed(2);



};

function billTypeWithSettingsColor(totalCost) {

  totalSettings.classList.remove('danger');
  totalSettings.classList.remove('warning');


  if (totalCost >= critical ) {
    totalSettings.classList.remove('warning');
    totalSettings.classList.add('danger');
  }

  else if (totalCost >= warning &&  totalCost < critical ) {
    totalSettings.classList.remove('danger');
    totalSettings.classList.add('warning');
  }



};



addBtnElem.addEventListener("click", billTypeWithSettings)

updateSettingsElem.addEventListener("click", updateSettings)