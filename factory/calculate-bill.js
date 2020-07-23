function calculateBill() {

  //var callTotal2 = 0;
  //var smsTotal2 = 0;
  //var theeTotal2 = 0;

  var roundedTotal = 0

  function action(billString) {


    var billList = billString.split(",");
    var billTotal = 0;


    for (var i = 0; i < billList.length; i++) {

      var billCost = billList[i].trim();

      if (billCost === "call") {
        billTotal += 2.75;
      }
      else if (billCost === "sms") {
        billTotal += 0.75;
      }
    }
    roundedTotal = billTotal.toFixed(2);
    return roundedTotal;


  }

function totalShowClassName() {

    if (action(roundedTotal) >= 50) {
      return "critical"
    }

   else if (action(roundedTotal) >= 30) {
      return "warning"
    }
  }

  return {
    action,
    totalShowClassName,
  

  }

}