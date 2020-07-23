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
  

  callTotalSettings.innerHTML =  billTypeWithSettingsInstantiate.getTotalCallCost();
  smsTotalSettings.innerHTML =  billTypeWithSettingsInstantiate.getTotalSmsCost();



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





/*const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
const radioBillAddBtn = document.querySelector(".radioBillAddBtn")
const callTotalSettings = document.querySelector(".callTotalSettings");
const smsTotalSettings = document.querySelector(".smsTotalSettings");
const totalSettings = document.querySelector(".totalSettings");
const callCostSetting = document.querySelector(".callCostSetting");
const smsCostSetting = document.querySelector(".smsCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");
const updateSettings = document.querySelector(".updateSettings");

var settingsInstance = BillWithSettings()

function settingValue(){

   settingsInstance.setCallCost(Number(callCostSetting.value));
   settingsInstance.setSmsCost(Number( smsCostSetting.value ));
   settingsInstance.setWarningLevel(Number(warningLevelSetting.value));
   settingsInstance.setCriticalLevel(Number(criticalLevelSetting.value));
  
   billTypeWithSettingsColor();
}

function billTypeWithSettings (){
  
   
  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  
  var billRadio = checkedRadioBtn.value;
  
 if (billRadio === 'call'){
   settingsInstance.makeCall()
 
   }
  
  else if (billRadio === 'sms'){
    settingsInstance.sendSms()
  }
  
  callTotalSettings.innerHTML = settingsInstance.getTotalCallCost().toFixed(2);
  smsTotalSettings.innerHTML = settingsInstance.getTotalSmsCost().toFixed(2);
  totalSettings.innerHTML = settingsInstance.getTotalCost().toFixed(2)
   
  billTypeWithSettingsColor();
};

function billTypeWithSettingsColor (){
  
  totalSettings.classList.remove('critical');
  totalSettings.classList.remove('warning');
  totalSettings.classList.add(settingsInstance.totalClassName());

};

 
  radioBillAddBtn.addEventListener("click",billTypeWithSettings)
   updateSettings.addEventListener("click",settingValue)*/