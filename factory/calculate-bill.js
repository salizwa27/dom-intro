function calculateBill() {

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

function totalShowClassName(roundedTotal) {
    if (Number(roundedTotal) >= 50) {
      return "critical"
    }

   else if (Number(roundedTotal) >= 30) {
      return "warning"
    }
  }

  return {
    action,
    totalShowClassName,
  

  }

}