function textBill (){

    var textBillCallsTotal = 0;
    var textBillSmsTotal = 0;
    var totalCost = 0;


    function textBillTotal(billTypeEntered)  {

     //   var billTypeEntered = billTypeText.value; 
        
      if (billTypeEntered === "call"){
          //dot not coma 2.75
      
      textBillCallsTotal += 2.75;
      }
      
      else if (billTypeEntered === "sms"){
        //dot not coma 0.65
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
    textBillTotal,
    getTotalCalls,
    getTotalSms,
    getOverallTotal,
    totalClassName


  }
  

}