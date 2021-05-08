describe("Helpers test", () => {
  beforeEach( () => {
    // initialization logic
    billAmtInput.value = 40;
    tipAmtInput.value = 10;
    submitPaymentInfo();
  });

  it("should calculate payment and tip on sumPaymentTotal()", () => {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
    expect(sumPaymentTotal("billAmt")).toEqual(140);
    expect(sumPaymentTotal("tipAmt")).toEqual(30);
  });

  it("should calculate tip percent on calculateTipPercent()", () => {
    expect(calculateTipPercent(100, 15)).toEqual(15);
  });

  it("Should create a td element", () => {
    let newTr = createTr();
    appendTd(newTr, "Testing with Jasmine");
    let theChild = newTr.firstElementChild;
    expect(theChild.tagName.toLowerCase()).toEqual("td");
    if(theChild)theChild.remove();
    if(newTr)newTr = null; //GC will eventually collect this
  });

  it("Should create a \"delete button\" on a tr", () => {
    let newTr = createTr();
    appendDeleteBtn(newTr);
    let theChild = newTr.firstElementChild;
    expect(theChild.tagName.toLowerCase()).toEqual("td");
    expect(theChild.innerText).toEqual("X");
    newTr.remove();
    if(theChild)theChild.remove();
    if(newTr)newTr = null; //GC will eventually collect this
    });

  it("Should delete the row associated with the delete button", () => {
    let table = document.createElement("table");
    let newTr = createTr();
    let newTd = appendDeleteBtn(newTr);
    let fakeEvent = {};
    fakeEvent.target = newTd;
    fakeEvent.stopPropagation = function(){};
    table.append(newTr);
    deleteTrContainingTd(fakeEvent);
    expect(table.children.length).toEqual(0);
  });

  afterEach( () => {
    restoreDOM();
  });
});

createTr = function(id=null) {
  let newTr = document.createElement("tr");
  newTr.setAttribute("id", id ? id : `tr-${Date.now()}`);
  return newTr;
}
