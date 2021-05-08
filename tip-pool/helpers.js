// Restore DOM to original state
const restoreDOM = function() {
  serverId = 0;
  allServers = {};
  paymentId = 0;
  allPayments = {};
  serverTbody.innerHTML = "";
  billAmtInput.value = "";
  tipAmtInput.value = "";
  summaryTds[0].innerHTML = "";
  summaryTds[1].innerHTML = "";
  summaryTds[2].innerHTML = "";
  serverTbody.innerHTML = "";
  paymentTbody.innerHTML = "";
}
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;
  tr.append(newTd);
}

//Append a delete button to a row
function appendDeleteBtn(tr) {
  appendTd(tr, "X");
  let newTd = tr.lastElementChild;
  newTd.addEventListener("click", deleteTrContainingTd);
  return newTd;
}

function deleteTrContainingTd(event) {
  event.stopPropagation();
  if(event.target.tagName.toLowerCase() != "td") return;
  event.target.parentElement.remove();
}