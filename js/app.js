const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deleveryCost = document.getElementById('delivery-cost');
const priceTotal = document.getElementById('total-price');
const bestPrice = document.getElementById('best-price');
const finalPrice = document.getElementById('final-price');


/* -------------- memory cost function-----------------  */
function costMemory(cost) {
    const memoryCost = document.getElementById('memory-cost');


    if (cost == 180) {
        memoryCost.innerText = 180;
    }
    else {
        memoryCost.innerText = 0;

    }
    updateTotal(memoryCost, storageCost, deleveryCost)
    lastTotal(memoryCost, storageCost, deleveryCost);
}

// call memory cost
document.getElementById('memory-btn-1').addEventListener('click', function () {
    costMemory(0);
})
document.getElementById('memory-btn-2').addEventListener('click', function () {
    costMemory(180);
})



/*--------------- storage cost function-------------  */
function costStorage(cost) {
    const storageCost = document.getElementById('storage-cost');
    if (cost == 100) {
        storageCost.innerText = 100;
    }
    else if (cost == 180) {
        storageCost.innerText = 180;
    }
    else {
        storageCost.innerText = 0;
    }
    updateTotal(storageCost, memoryCost, deleveryCost);
    lastTotal(storageCost, memoryCost, deleveryCost);
}

// call storage cost 
document.getElementById('storage-btn-1').addEventListener('click', function () {
    costStorage(0)
})
document.getElementById('storage-btn-2').addEventListener('click', function () {
    costStorage(100);
})
document.getElementById('storage-btn-3').addEventListener('click', function () {
    costStorage(180);
})




 /*------------ delivery cost function------------ */
function costDelivery(cost) {
    const deliveryCost = document.getElementById('delivery-cost');
    if (cost == 20) {
        deliveryCost.innerText = 20;
    }
    else {
        deliveryCost.innerText = 0;
    }
    updateTotal(deliveryCost, memoryCost, storageCost)
    lastTotal(deleveryCost, memoryCost, storageCost);
}

// call delivery cost
document.getElementById('delivery-btn-1').addEventListener('click', function () {
    costDelivery(0);
})
document.getElementById('delivery-btn-2').addEventListener('click', function () {
    costDelivery(20);
})



/* --------------update total function--------------------- */
function updateTotal(value1, value2, value3) {
    const bestPriceTaka = parseInt(bestPrice.innerText);
    const value2Taka = parseInt(value2.innerText);
    const value3Taka = parseInt(value3.innerText);
    const Taka = parseInt(value1.innerText);

    const grandTotal = bestPriceTaka + Taka + value2Taka + value3Taka;
    priceTotal.innerText = grandTotal;
}





 /*-------------------- update final total function -------------------*/
function lastTotal(input1, input2, input3) {
    const bestPriceTaka = parseInt(bestPrice.innerText);
    const input2Taka = parseInt(input2.innerText);
    const input3Taka = parseInt(input3.innerText);
    const Taka = parseInt(input1.innerText);

    const grandTotal = bestPriceTaka + Taka + input2Taka + input3Taka;
    finalPrice.innerText = grandTotal;
}




 /*-------------------- discount calculation---------------------  */
document.getElementById('apply').addEventListener('click', function () {
    const input = document.getElementById('input');
    const inputText = input.value;

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;


    const finalPrice = document.getElementById('final-price');
    if (inputText.toLowerCase() == 'stevekaku') {
        finalPrice.innerText = totalPriceText - (totalPriceText * .2);
    }
    input.value ="";
});
