function radioBill() {

    var callCost = 0;
    var smsCost = 0;
    var totalCost = 0;

  function radioBillTotal(billItemType) {

    if (billItemType === "call"){
        callCost += 2.75;
    }

    else if (billItemType === "sms"){
        smsCost += 0.85;
    }
  }

  function getTotalCalls(){
      return callCost;

  }

  function getTotalSms(){
      return smsCost;
  }

  function getOverallTotal(){
      return totalCost = callCost + smsCost   

  }

  function totalClassName(){

    if (getOverallTotal() >= 10) {
        return "critical"
    }

    if (getOverallTotal() >= 5) {
        return "warning";
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
