//get a reference to the sms or call radio buttons

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

//var callTotal = 0;
//var smsTotal = 0;
//var total = 0;

//var call = 0;
//var sms = 0;
//var warning = 0;
//var critical = 0;

var billTypeWithSettingsInstantiate = BillWithSettings()

function updateSettings() {
  billTypeWithSettingsInstantiate.setCallCost(Number(callCostSetting.value));
  // alert(billTypeWithSettingsInstantiate.getCallCost())
  billTypeWithSettingsInstantiate.setSmsCost(Number(smsCostSetting.value));
  billTypeWithSettingsInstantiate.setWarningLevel(Number(warningLevelSetting.value));
  billTypeWithSettingsInstantiate.setCriticalLevel(Number(criticalLevelSetting.value));

  billTypeWithSettingsColor();
}

function billTypeWithSettings() {

  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");

  
    if (checkedRadioBtn) {
      var billRadio = checkedRadioBtn.value;
   
      if (billRadio === 'call') {
        billTypeWithSettingsInstantiate.makeCall();
      }

      else if (billRadio === 'sms') {
        billTypeWithSettingsInstantiate.sendSms();
      }
    }
  

  callTotalSettings.innerHTML =  billTypeWithSettingsInstantiate.getTotalCallCost().toFixed(2);
  smsTotalSettings.innerHTML =  billTypeWithSettingsInstantiate.getTotalSmsCost().toFixed(2);



  totalSettings.innerHTML = billTypeWithSettingsInstantiate.getTotalCost().toFixed(2);
  billTypeWithSettingsColor();


};

function billTypeWithSettingsColor(totalCost) {

  totalSettings.classList.remove('critical');
  totalSettings.classList.remove('warning');
  totalSettings.classList.add(billTypeWithSettingsInstantiate.totalClassName());



};



addBtnElem.addEventListener("click", billTypeWithSettings)

updateSettingsElem.addEventListener("click", updateSettings)

