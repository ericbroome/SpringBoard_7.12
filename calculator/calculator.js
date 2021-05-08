window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupInitialValues() {
  let elAmount = document.querySelector("#loan-amount");
  let elYears = document.querySelector("#loan-years");
  let elRate = document.querySelector("#loan-rate");
  elAmount.value = 50000;
  elYears.value = 10;
  elRate.value = 0.1;
  let values = getCurrentUIValues();
  let strPayment = calculateMonthlyPayment(values);
  updateMonthly(strPayment);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = getCurrentUIValues();
  let strPayment = calculateMonthlyPayment(values);
  updateMonthly(strPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let valPRate = values.rate / 12;
  let valMTerm = values.years * 12;
  let valPayment = (values.amount * valPRate) / (1 - Math.pow((1 + valPRate), -valMTerm));
  return valPayment.toFixed(2).toString();
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let elPayment = document.querySelector("#monthly-payment");
  elPayment.innerText = monthly;
}
