describe("The calculate bill factory functions", function() {
    
    it ("should be able to give call total when 'call' is entered", function() {

        let calculateBillFact = calculateBill();

        calculateBillFact.action('call');
    
        assert.equal(2.75, calculateBillFact.myOverallTotal())
        
    })

    it ("should be able to give call total when 'call' is entered more than once", function() {

        let calculateBillFact = calculateBill();

        calculateBillFact.action('call');
        calculateBillFact.action('call');
        calculateBillFact.action('call');
        calculateBillFact.action('call');

        assert.equal(11.00, calculateBillFact.myOverallTotal())
        
    })

    it ("should be able to give sms total when 'sms' is entered", function() {

        let calculateBillFact = calculateBill();

        calculateBillFact.action('sms');

        assert.equal(0.75, calculateBillFact.myOverallTotal())
        
    })

    it ("should be able to give sms total when 'sms' is entered more than once", function() {

        let calculateBillFact = calculateBill();

        calculateBillFact.action('sms');
        calculateBillFact.action('sms');
        calculateBillFact.action('sms');
        calculateBillFact.action('sms');

        assert.equal(3.00, calculateBillFact.myOverallTotal())
        
    })

    it ("should be able to give totals when 'sms & call' is entered", function() {

        let calculateBillFact = calculateBill();

        calculateBillFact.action('call');
        calculateBillFact.action('call');
        calculateBillFact.action('sms');

        assert.equal(6.25, calculateBillFact.myOverallTotal())
        
    })

    describe("The Critical & Warning Level for Calculate Bill", function() {
        it ("should be able to return class name 'critical' when danger level is reached", function() {
    
            let calculateBillFact = calculateBill();
    
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
    
            assert.equal(66.00, calculateBillFact.myOverallTotal())
            assert.equal("critical", calculateBillFact.totalShowClassName())
            
        })

        it ("should be able to return class name 'warning' when warning level is reached", function() {
    
            let calculateBillFact = calculateBill();

            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
            calculateBillFact.action('call');
    
            
            assert.equal(35.75, calculateBillFact.myOverallTotal())
            assert.equal("warning", calculateBillFact.totalShowClassNameTwo())
            
        })

    })
    
})