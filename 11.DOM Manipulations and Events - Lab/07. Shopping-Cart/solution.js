function solve() {

   let productElements = document.querySelectorAll('.product');
   let totalSum = 0;
   const products = [];


   for (const product of productElements) {
      let buttonelement = product.querySelector('.add-product');
      buttonelement.addEventListener('click', addProduct);
      let checkOutButton = document.querySelector('.checkout');
      checkOutButton.addEventListener('click', checkOut);
   }

   function addProduct(event) {
      //let productName = event.target.parentElement.parentElement.querySelector('.product-title').textContent;
      let productName = closest('.product', event.target).querySelector('.product-title').textContent;
      //let procuctPrice = event.target.parentElement.parentElement.querySelector('.product-line-price').textContent;
      let procuctPrice = closest('.product',event.target).querySelector('.product-line-price').textContent;
      let textArea = document.getElementsByTagName('textarea')[0];
      textArea.value += `Added ${productName} for ${procuctPrice} to the cart.\n`;
      totalSum += Number(procuctPrice);
      if (!products.includes(productName)) {
         products.push(productName);
      }

   }

   function checkOut() {
      document.getElementsByTagName('textarea')[0].value += `You bought ${products.join(', ')} for ${totalSum.toFixed(2)}.`
      console.log(totalSum.toFixed(2));
      let buttons = Array.from(document.querySelectorAll('button'));
      buttons.forEach(button => button.disabled = true);
   }

   function closest (selector, element) {
      let elem = element;

      do {
         if (elem.matches(selector)) return elem;
         elem = elem.parentElement;
      } while (elem);
   }

}

// You will be given some products that you should be able to add to your cart.
// Each product will have a name, picture, and price.
// When the "Add" button is clicked, append the current product to the textarea in the following format:
// "Added {name} for {money} to the cart.\n". The price must be fixed to the second digit.
// When the button "Checkout" is clicked, calculate the total money that you need to pay for the products
// that are currently in your cart. Append the result to the textarea in the following format:
// "You bought {list} for {totalPrice}."
// The list should contain only the unique products, separated by ", ". The total price should be rounded
// to the second decimal point.
// Also, after clicking over "Checkout" and every from above is done you should disable all buttons.
// You can't add products or checkout again if once the checkout button is clicked).