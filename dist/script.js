// grab everything we need
        const priceInput = document.querySelector('[name=price]');
        const quantityInput =document.querySelector('[name=quantity]');
        const total = document.querySelector('.total');
        const tree = document.querySelector('.tree')
        const quantityLabel = document.querySelector('.quantity-label');
        const priceLabel = document.querySelector('.price-label');
const price = 0
const quantity = 0
const treeprice = 0
       // create the functions that we'll need
        function calculatePieCost() {
            const quantity = quantityInput.value;
            const price = priceInput.value;
            const cost = price * (quantity/100)*1.96;
            console.log(cost);
            total.innerText = cost.toFixed() + ' tons of CO2 per year';
          const treecost = cost*1000/21;
            console.log(treecost);
           tree.innerText = 'thats equal to ' + treecost.toFixed() + ' trees 🌳 per year';
        }
function calculateTreeCost() {
            const quantity = quantityInput.value;
            const price = priceInput.value;
            
        }
        function updateQuantityLabel() {
            const quantity = quantityInput.value;
            quantityLabel.innerText = quantity +'%';
        }
 function updatePriceLabel() {
            const price = priceInput.value;
            priceLabel.innerText = price + ' cars 🚗';
        }
        // on first fun
        calculatePieCost();
        calculateTreeCost();

       // add our event listeners
        priceInput.addEventListener('input', calculatePieCost);
        priceInput.addEventListener('input', updatePriceLabel);
        quantityInput.addEventListener('input', calculatePieCost);
        quantityInput.addEventListener('input', updateQuantityLabel);