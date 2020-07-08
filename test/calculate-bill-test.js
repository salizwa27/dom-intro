describe("The calculate bill factory functions", function() {
    
    it ("should be able to give call total when 'call' is entered", function() {

        let calculateBillFact = calculateBill();

        calculateBillFact.makeCallTwo ();

        assert.equal(2.75, calculateBillFact.myOverallTotal())
        
    })

    it ("should be able to give call total when 'call' is entered more than once", function() {

        let calculateBillFact = calculateBill();

        calculateBillFact.makeCallTwo ();
        calculateBillFact.makeCallTwo ();
        calculateBillFact.makeCallTwo ();
        calculateBillFact.makeCallTwo ();

        assert.equal(11.00, calculateBillFact.myOverallTotal())
        
    })

    it ("should be able to give sms total when 'sms' is entered", function() {

        let calculateBillFact = calculateBill();

        calculateBillFact.sendSmsTwo ();

        assert.equal(0.85, calculateBillFact.myOverallTotal())
        
    })

    it ("should be able to give sms total when 'sms' is entered more than once", function() {

        let calculateBillFact = calculateBill();

        calculateBillFact.sendSmsTwo ();
        calculateBillFact.sendSmsTwo ();
        calculateBillFact.sendSmsTwo ();
        calculateBillFact.sendSmsTwo ();

        assert.equal(3.40, calculateBillFact.myOverallTotal())
        
    })

    it ("should be able to give totals when 'sms & call' is entered", function() {

        let calculateBillFact = calculateBill();

        calculateBillFact.makeCallTwo ();
        calculateBillFact.makeCallTwo ();
        calculateBillFact.sendSmsTwo ();

        assert.equal(6.35, calculateBillFact.myOverallTotal())
        
    })

    describe("The Critical & Warning Level for Calculate Bill", function() {
        it ("should be able to return class name 'critical' when danger level is reached", function() {
    
            let calculateBillFact = calculateBill();
    
            calculateBillFact.callMade();
            calculateBillFact.callMade();
            calculateBillFact.callMade();
            calculateBillFact.callMade();
    
            assert.equal(0.00, calculateBillFact.myOverallTotal())
            assert.equal("critical", calculateBillFact.totalShowClassName())
            
        })

        it ("should be able to return class name 'warning' when warning level is reached", function() {
    
            let calculateBillFact = calculateBill();
    
            calculateBillFact.callMade();
            calculateBillFact.callMade();
            calculateBillFact.callMade();
            calculateBillFact.callMade();
    
            assert.equal(0.00, calculateBillFact.myOverallTotal())
            assert.equal("warning", calculateBillFact.totalShowClassNameTwo())
            
        })

    })
    
})