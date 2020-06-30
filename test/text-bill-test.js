describe("The text bill factory functions", function() {

    it ("should be able to give call total when 'call' is entered", function() {

        let textBillfact = textBill();

        textBillfact.makeCallOne();

        //assert.equal(2.75, textBillfact.totalCost())
        
    })

    it ("should be able to give call total when 'call' is entered 3 times", function() {

        let textBillfact = textBill();

        textBillfact.makeCallOne();
        textBillfact.makeCallOne();
        textBillfact.makeCallOne();

        //assert.equal(8.25, textBillfact.totalCost())
        
    })
})