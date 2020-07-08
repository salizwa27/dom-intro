describe("The radio button bill factory functions", function() {
    
    it ("should be able to give call total when 'call' is entered", function() {

        let radioBillFact = radioBill();

        radioBillFact.radioBillTotal('call');

        assert.equal(2.75, radioBillFact.getOverallTotal())
        
    })

    it ("should be able to give call total when 'call' is entered more than once", function() {

        let radioBillFact = radioBill();

        radioBillFact.getTotalCalls ();
        radioBillFact.getTotalCalls ();
        radioBillFact.getTotalCalls ();
        radioBillFact.getTotalCalls ();
        assert.equal(0, radioBillFact.getOverallTotal())
        
    })

    it ("should be able to give sms total when 'sms' is entered", function() {

        let radioBillFact = radioBill();

        radioBillFact.getTotalSms ();

        assert.equal(0, radioBillFact.getOverallTotal())
        
    })

    it ("should be able to give sms total when 'sms' is entered more than once", function() {

        let radioBillFact = radioBill();

        radioBillFact.getTotalSms ();
        radioBillFact.getTotalSms ();
        radioBillFact.getTotalSms ();
        radioBillFact.getTotalSms ();

        assert.equal(0, radioBillFact.getOverallTotal())
        
    })

    it ("should be able to give totals when 'sms & call' is entered", function() {

        let radioBillFact = radioBill();

        radioBillFact.getTotalCalls ();
        radioBillFact.getTotalCalls ();
        radioBillFact.getTotalSms ();

        assert.equal(0, radioBillFact.getOverallTotal())
        
    })

    describe("The Danger & Warning Level for Radio Button Bill", function() {
        it ("should be able to return class name 'danger' when danger level is reached", function() {
    
            let radioBillFact = radioBill();
    
            radioBillFact.radioBillTotal('call');
            radioBillFact.radioBillTotal('call');
            radioBillFact.radioBillTotal('call');
            radioBillFact.radioBillTotal('call');
    
            assert.equal(11, radioBillFact.getOverallTotal())
            assert.equal("critical", radioBillFact.totalClassName())
            
        })

        it ("should be able to return class name 'warning' when danger level is reached", function() {
    
            let radioBillFact = radioBill();
    
            radioBillFact.radioBillTotal('call');
            radioBillFact.radioBillTotal('call');
    
            assert.equal(5.5, radioBillFact.getOverallTotal())
            assert.equal("warning", radioBillFact.totalClassName())
            
        })

    })

})