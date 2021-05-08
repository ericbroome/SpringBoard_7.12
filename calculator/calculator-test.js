describe('Loan calculation tests', () => {
  it('should calculate the monthly rate correctly', () => {
    expect(calculateMonthlyPayment({amount: 50000, rate: 0.1, years: 10})).toEqual("660.75");
  });
  
  it("should return a result with 2 decimal places", () => {
    let str = calculateMonthlyPayment({amount: 50000, rate: 0.1, years: 10});
    let num = parseFloat(str).toFixed(2);
    expect(calculateMonthlyPayment({amount: 50000, rate: 0.1, years: 10})).toEqual(num.toString());
  });
});


