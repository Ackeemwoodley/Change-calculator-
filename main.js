function handleClickEvent() {
// store amount due
let amountDue = document.getElementById('amount-due');
let amountDueValue = parseFloat(amountDue.value);
// store amount received
let amountReceived = document.getElementById('amount-received');
let amountReceivedValue = parseFloat(amountReceived.value);

if (isNaN(amountDueValue) || isNaN(amountReceivedValue)) {
    document.getElementById('output').innerText = "Please enter valid numbers for both fields.";
    return;
}

// calculate change due
let changeDue = amountReceivedValue - amountDueValue;
 
   
if (changeDue < 0) {
    let NeededAmount = Math.abs(changeDue).toFixed(2);  
        document.getElementById('output').innerText =  "You need $" + NeededAmount + " more.";
        return;
    }

    document.getElementById('output').innerText = "";  // Clear the output

     // Now break down the change due into coins (dollars, quarters, dimes, nickels, pennies)
     let dollars = Math.floor(changeDue);
     let remainder = (changeDue - dollars);
 
     let quarters = Math.floor(remainder / 0.25);
     remainder = (remainder - quarters * 0.25);
 
     let dimes = Math.floor(remainder / 0.10);
     remainder = (remainder - dimes * 0.10);
 
     let nickels = Math.floor(remainder / 0.05);
     remainder = (remainder - nickels * 0.05);
 
     let pennies = Math.round(remainder / 0.01);  // Round to handle any floating point precision issues

    document.getElementById('dollars-output').innerText = `${dollars}`;
    document.getElementById('quarters-output').innerText = `${quarters }`;
    document.getElementById('dimes-output').innerText = `${dimes}`;
    document.getElementById('nickels-output').innerText = `${nickels}`;
    document.getElementById('pennies-output').innerText = `${pennies }`;
}

    document.getElementById('calculate-change').addEventListener('click', handleClickEvent);;