function textBill (){

    var textBillCallsTotal = 0;
    var textBillSmsTotal = 0;
    var totalCost = 0;


    function textBillTotal(billTypeEntered)  {
        
      if (billTypeEntered === "call"){

      textBillCallsTotal += 2.75;
      }
      
      else if (billTypeEntered === "sms"){
      
      textBillSmsTotal += 0.65;
      };
    }

    function getTotalCalls(){
        return textBillCallsTotal;
  
    }
  
    function getTotalSms(){
        return textBillSmsTotal;
    }
  
    function getOverallTotal(){
        return totalCost = textBillCallsTotal + textBillSmsTotal   
  
    }
     
    function getCriticalLevel() {
        return 50;
    }
  
    function getWarningLevel() {
      return 30;
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
    textBillTotal,
    getTotalCalls,
    getTotalSms,
    getOverallTotal,
    totalClassName


  }
  

}