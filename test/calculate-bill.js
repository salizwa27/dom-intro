function calculateBill (){

  var callTotal2 = 2.75;
  var smsTotal2 = 0.85;
  var warningLevel2 = 5;
  var criticalLevel2 = 10;

  var theeTotal2 = 0;
  var theeWarningTotal = 0;
  var theeCriticalTotal = 0;

  function makeCallTwo (){
    return theeTotal2 += callTotal2;

  }

  function callMade (){
    return theeTotal2.toFixed(2);

  }

  function sendSmsTwo () {
    return theeTotal2 += smsTotal2;

  }

  function smsSent (){
    return theeTotal2.toFixed(2);

  }

  function myOverallTotal () {
    return theeTotal2.toFixed(2);

  }

  function setCriticalLevel () {
    theeCriticalTotal = criticalLevel2;

  }

  function getCriticalLevel () {
    return theeCriticalTotal;

  }

  function setWarningLevel () {
    return theeWarningTotal = warningLevel2 ();

  }

  function getWarningLevel () {
    return theeWarningTotal;

  }

  function totalReachedCriticalLevel () {
   return theeTotal2 >= getCriticalLevel ();

  }

  function totalReachedWarningLevel () {
   return theeTotal2 >= getWarningLevel ();

  }

  function totalShowClassName () {
    
    if (totalReachedCriticalLevel()) {
      return "critical"
    }
  }

  function totalShowClassNameTwo () {

    if (totalReachedWarningLevel()) {
      return "warning"
    }
  }

  return {
    makeCallTwo,
    callMade,
    sendSmsTwo,
    smsSent,
    myOverallTotal,
    setCriticalLevel,
    getCriticalLevel,
    setWarningLevel,
    getWarningLevel,
    totalShowClassName,
    totalShowClassNameTwo

  }

}