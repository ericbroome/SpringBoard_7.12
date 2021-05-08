describe("Payments test", function() {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 100;
    tipAmtInput.value = 15;
  });

  it("should add a curPayment object to allPayments, update html and reset input values on submitPaymentInfo()", function () {
    let len = Object.keys(allPayments).length;
    submitPaymentInfo(null);
    expect(Object.keys(allPayments).length).toEqual(len + 1);
  });

  it("Should return undefined or null when input invalid on createCurPayment()", () => {
    let cp = createCurPayment();
    expect(createCurPayment()).toEqual({billAmt:"100", tipAmt:"15", tipPercent:15});
    billAmtInput.value = 0;
    expect(createCurPayment()).toBeFalsy();
  });

  it("should create a row of payment information on appendPaymentTable()", function () {
    let table = document.querySelector("#paymentTable");
    let rows = table.rows.length;
    appendPaymentTable(createCurPayment());
    expect(table.rows.length).toEqual(rows + 1);
  });

  it("should tally all and reveal on updateSummary()", function () {
    submitPaymentInfo(null);
    updateSummary();
    expect(summaryTds[0].innerHTML).toEqual(`$${sumPaymentTotal('billAmt')}`);
    expect(summaryTds[1].innerHTML).toEqual(`$${sumPaymentTotal('tipAmt')}`);
    expect(summaryTds[2].innerHTML).toEqual("15%");
    });

  afterEach(function() {
    restoreDOM();
  });
});

