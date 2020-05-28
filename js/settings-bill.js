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

const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
const radioBillAddBtn = document.querySelector(".radioBillAddBtn")
const callTotalSettings = document.querySelector(".callTotalSettings");
const smsTotalSettings = document.querySelector(".smsTotalSettings");
const totalSettings = document.querySelector(".totalSettings");
const callCostSetting = document.querySelector(".callCostSetting");
const smsCostSetting = document.querySelector(".smsCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");
const updateSettings = document.querySelector(".updateSettings");

var callTotal = 0;
var smsTotal = 0;
var total = 0;


function billTypeWithSettings (){
  
  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  var billRadio = checkedRadioBtn.value;
  
  var call = Number( callCostSetting.value );
  var sms = Number( smsCostSetting.value );
  var warning = Number(warningLevelSetting.value )
  var critical = Number(criticalLevelSetting.value);
  
   
  if (billRadio === 'call'){
    callTotal += call; 
  }
  
  else if (billRadio === 'sms'){
    smsTotal += sms;
  }
  
  
  callTotalSettings.innerHTML = callTotal.toFixed(2);
  smsTotalSettings.innerHTML = smsTotal.toFixed(2);
  
  
  total = callTotal + smsTotal;
  totalSettings.innerHTML = total.toFixed(2);
  

  
  var callCost = 0 ;
  var smsCost = 0;
  var warningLevel = 0 ;
  var criticalLevel = 0 ; 
  
  
  var checkedBtn = updateSettings.value;
  

  if (checkedBtn === "call"){
    callCost = callTotal;
  }
  
  else if (checkedBtn === "sms"){
    smsCost = smsTotal;
  }
  
  
  callCostSetting.innerHTML = callCost.toFixed(2);
  smsCostSetting.innerHTML = smsCost.toFixed(2);
  
  var totalCost = callCost + smsCost;
  
  warningLevelSetting.innerHTML = totalCost.toFixed(2) ;
  criticalLevelSetting.innerHTML = totalCost.toFixed(2) ;
  
  
  billTypeWithSettingsColor(total);
};
function billTypeWithSettingsColor (totalCost){
  
  totalSettings.classList.remove('danger');
  totalSettings.classList.remove('warnings');
  
  
  if (totalCost >= criticalLevelSetting.value){
    totalSettings.classList.add('danger');
  }
  
  else if (totalCost >= warningLevelSetting.value){
    totalSettings.classList.add('warning');
  }
  
  
  
};

 

radioBillAddBtn.addEventListener("click",billTypeWithSettings)

updateSettings.addEventListener("click",billTypeWithSettings)