describe("The text bill factory functions", function() {
    
    it ("should be able to give call total when 'call' is entered", function() {

        let textBillFact = textBill();

        textBillFact.textBillTotal('call');

        assert.equal(2.75, textBillFact.getOverallTotal())
        
    })

    it ("should be able to give call total when 'call' is entered more than once", function() {

        let textBillFact = textBill();

        textBillFact.textBillTotal('call');
        textBillFact.textBillTotal('call');
        textBillFact.textBillTotal('call');
        textBillFact.textBillTotal('call');
        
        assert.equal(11,  textBillFact.getOverallTotal())
        
    })

    it ("should be able to give sms total when 'sms' is entered", function() {

        let textBillFact = textBill();

        textBillFact.textBillTotal('sms');

        assert.equal(0.65, textBillFact.getOverallTotal())
        
    })

    it ("should be able to give sms total when 'sms' is entered more than once", function() {

        let textBillFact = textBill();

        textBillFact.textBillTotal('sms');
        textBillFact.textBillTotal('sms');
        textBillFact.textBillTotal('sms');
        textBillFact.textBillTotal('sms');

        assert.equal(2.60, textBillFact.getOverallTotal())
        
    })

    describe("The Danger & Warning Level for text Bill", function() {
        it ("should be able to return class name 'danger' when danger level is reached", function() {
    
            let textBillFact = textBill();
    
            textBillFact.textBillTotal('call');
            textBillFact.textBillTotal('call');
            textBillFact.textBillTotal('call');
            textBillFact.textBillTotal('call');
    
            assert.equal(11, textBillFact.getOverallTotal())
            assert.equal("critical", textBillFact.totalClassName())
            
        })

        it ("should be able to return class name 'warning' when danger level is reached", function() {
    
            let textBillFact = textBill();
    
            textBillFact.textBillTotal('call');
            textBillFact.textBillTotal('call');
    
            assert.equal(5.5, textBillFact.getOverallTotal())
            assert.equal("warning", textBillFact.totalClassName())
            
        })

    })


})









/*describe("The text bill factory functions", function() {

    it ("should be able to give call total when 'call' is entered", function() {

        let textBillfact = textBill();

        textBillfact.makeCallOne();

        assert.equal(2.75, textBillfact.makeCallOne())
        
    })

    it ("should be able to give call total when 'call' is entered 3 times", function() {

        let textBillfact = textBill();

        textBillfact.makeCallOne();
        textBillfact.makeCallOne();
        textBillfact.makeCallOne();

        assert.equal(2.75, textBillfact.makeCallOne())
        
    })

    it ("should be able give sms total when 'sms' is entered", function() {

        let textBillfact = textBill();

        textBillfact.sendSmsOne();

        assert.equal(0.85, textBillfact.sendSmsOne())
        
    })

    it ("should be able to give sms total when 'sms' is entered 3 times", function() {

        let textBillfact = textBill();

        textBillfact.sendSmsOne();
        textBillfact.sendSmsOne();
        textBillfact.sendSmsOne();

        assert.equal(0.85, textBillfact.sendSmsOne())
        
    })

    it ("should be able to give sms total and call total when 'sms and call' is entered 3 times", function() {

        let textBillfact = textBill();

        textBillfact.makeCallOne();
        textBillfact.makeCallOne();
        textBillfact.sendSmsOne();
        textBillfact.sendSmsOne();
        textBillfact.sendSmsOne();

        assert.equal(0.00, textBillfact.theTotalOne())
        assert.equal(2.75, textBillfact.makeCallOne())
        assert.equal(0.85, textBillfact.sendSmsOne())
    })

})*/