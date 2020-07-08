function radioBill() {

    var totalCalls = 0;
    var totalSms = 0;
    var totalCost = 0;

  function radioBillTotal(billItemType) {

    if (billItemType === "call"){
        totalCalls += 2.75;
    }

    else if (billItemType === "sms"){
        totalSms += 0.85;
    }
  }

  function getTotalCalls(){
      return totalCalls;

  }

  function getTotalSms(){
      return totalSms;
  }

  function getOverallTotal(){
      return totalCost = totalCalls + totalSms   

  }
   
  function getCriticalLevel() {
      return 10;
  }

  function getWarningLevel() {
    return 5;
}

  function totalClassName(){

    if (getOverallTotal() >= getCriticalLevel()) {
        return "critical"
    }

    if (getOverallTotal() >= getWarningLevel()) {
        return "warning"
    }
}

  return {
      radioBillTotal,
      getTotalCalls,
      getTotalSms,
      getOverallTotal,
      totalClassName
  }

}
