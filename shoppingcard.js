const cartProduct = document.querySelector(".item");
const itemlist = document.querySelector(".item-list");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let subtotal = 0;

// update cart total
const updateCartTotal = () => {
  if (subtotal === 0) {
    document.querySelector(".discount-amt").textContent = '0';
    document.querySelector(".tax-amt").textContent = '0';
    document.querySelector(".total-amt").textContent = '0';
  }
else{
  const discount = parseInt(document.querySelector(".discount-amt").textContent) || 0;
  const tax = parseInt(document.querySelector(".tax-amt").textContent) || 0;
  document.querySelector(".total-amt").textContent = subtotal - discount + tax;
}
 
};

// update cart count
const updateCartCount = () => {
  const itemsCount = cart.reduce((total, item) => total + parseInt(item.quantity), 0);
  document.querySelector(".items-in-cart").textContent = itemsCount;
};




const renderCartItems = () => {
  itemlist.innerHTML = ''; 
  subtotal = 0;

  cart.forEach((item, index) => {
    const newCartProduct = cartProduct.cloneNode(true);
    newCartProduct.style.display = "flex";
    newCartProduct.querySelector(".item-img").src = item.image;
    newCartProduct.querySelector(".item-name").textContent = item.name;
    newCartProduct.querySelector(".item-price").textContent = item.price;
    newCartProduct.querySelector(".quant-value").textContent = item.quantity;

    function updateTotal() {
      const quantity = parseInt(newCartProduct.querySelector(".quant-value").textContent);
      const price = parseFloat(newCartProduct.querySelector(".item-price").textContent);
      const itemTotal = quantity * price;
      newCartProduct.querySelector(".item-total").textContent = itemTotal;
      return itemTotal;
    }
    const eachItemTotal = updateTotal();
    subtotal += eachItemTotal;

   
    // Remove item from cart
    newCartProduct.querySelector(".item-close").addEventListener('click', () => {
      cart = cart.filter((_, i) => i !== index);
      localStorage.setItem("cart", JSON.stringify(cart)); 

    
      renderCartItems();
      updateCartCount();
    });

    
    function updateSubtotal(change) {
      subtotal += change;
      document.querySelector(".sub-total").textContent = subtotal;
      updateCartTotal();
    }

    newCartProduct.querySelector(".plus").addEventListener('click', () => {
      const quantity = parseInt(newCartProduct.querySelector(".quant-value").textContent) + 1;
      newCartProduct.querySelector(".quant-value").textContent = quantity;
      const price = parseFloat(newCartProduct.querySelector(".item-price").textContent);
      const itemTotal = quantity * price;
      newCartProduct.querySelector(".item-total").textContent = itemTotal;
      cart[index].quantity = quantity;
      localStorage.setItem("cart", JSON.stringify(cart));
      updateSubtotal(price);
      updateCartCount();
    });

   

    newCartProduct.querySelector(".minus").addEventListener('click', () => {
      let quantity = parseInt(newCartProduct.querySelector(".quant-value").textContent);
      if (quantity > 0) {
        quantity -= 1;
        newCartProduct.querySelector(".quant-value").textContent = quantity;
        const price = parseFloat(newCartProduct.querySelector(".item-price").textContent);
        const itemTotal = quantity * price;
        newCartProduct.querySelector(".item-total").textContent = itemTotal;
        cart[index].quantity = quantity;
        localStorage.setItem("cart", JSON.stringify(cart));
        updateSubtotal(-price);
        updateCartCount();
      }

      if (quantity === 0) {
        cart = cart.filter((_, i) => i !== index);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCartItems(); 
        updateCartCount(); 
      }
    });

    itemlist.append(newCartProduct);
  });

  document.querySelector(".sub-total").textContent = subtotal;
  updateCartTotal();
};


renderCartItems();
updateCartCount();


 








// const cartProduct = document.querySelector(".item");
// const itemlist = document.querySelector(".item-list");

// function setCookie(name, value, days) {
//   let expires = "";
//   if (days) {
//     const date = new Date();
//     date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//     expires = "expires=" + date.toUTCString();
//   }
//   document.cookie = name + "=" + (value || "") + ";" + expires + ";path=/";
// }

// function getCookie(name) {
//   const nameEQ = name + "=";
//   const ca = document.cookie.split(';');
//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) === ' ') c = c.substring(1);
//     if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
//   }
//   return null;
// }

// function deleteCookie(name) {
//   document.cookie = name + '=; Max-Age=-99999999;';
// }

// function getCart() {
//   const cartCookie = getCookie('cart');
//   return cartCookie ? JSON.parse(cartCookie) : [];
// }

// function setCart(cart) {
//   setCookie('cart', JSON.stringify(cart), 7); // Cookie expires in 7 days
// }

// let cart = getCart();
// let subtotal = 0;

// // update cart total
// const updateCartTotal = () => {
//   if (subtotal === 0) {
//     document.querySelector(".discount-amt").textContent = '0';
//     document.querySelector(".tax-amt").textContent = '0';
//     document.querySelector(".total-amt").textContent = '0';
//   } else {
//     const discount = parseInt(document.querySelector(".discount-amt").textContent) || 0;
//     const tax = parseInt(document.querySelector(".tax-amt").textContent) || 0;
//     document.querySelector(".total-amt").textContent = subtotal - discount + tax;
//   }
// };

// // update cart count
// const updateCartCount = () => {
//   const itemsCount = cart.reduce((total, item) => total + parseInt(item.quantity), 0);
//   document.querySelector(".items-in-cart").textContent = itemsCount;
// };

// const renderCartItems = () => {
//   itemlist.innerHTML = ''; 
//   subtotal = 0;

//   cart.forEach((item, index) => {
//     const newCartProduct = cartProduct.cloneNode(true);
//     newCartProduct.style.display = "flex";
//     newCartProduct.querySelector(".item-img").src = item.image;
//     newCartProduct.querySelector(".item-name").textContent = item.name;
//     newCartProduct.querySelector(".item-price").textContent = item.price;
//     newCartProduct.querySelector(".quant-value").textContent = item.quantity;

//     function updateTotal() {
//       const quantity = parseInt(newCartProduct.querySelector(".quant-value").textContent);
//       const price = parseFloat(newCartProduct.querySelector(".item-price").textContent);
//       const itemTotal = quantity * price;
//       newCartProduct.querySelector(".item-total").textContent = itemTotal;
//       return itemTotal;
//     }
//     const eachItemTotal = updateTotal();
//     subtotal += eachItemTotal;

//     // Remove item from cart
//     newCartProduct.querySelector(".item-close").addEventListener('click', () => {
//       cart = cart.filter((_, i) => i !== index);
//       setCart(cart); 

//       renderCartItems();
//       updateCartCount();
//     });

//     function updateSubtotal(change) {
//       subtotal += change;
//       document.querySelector(".sub-total").textContent = subtotal;
//       updateCartTotal();
//     }

//     newCartProduct.querySelector(".plus").addEventListener('click', () => {
//       const quantity = parseInt(newCartProduct.querySelector(".quant-value").textContent) + 1;
//       newCartProduct.querySelector(".quant-value").textContent = quantity;
//       const price = parseFloat(newCartProduct.querySelector(".item-price").textContent);
//       const itemTotal = quantity * price;
//       newCartProduct.querySelector(".item-total").textContent = itemTotal;
//       cart[index].quantity = quantity;
//       setCart(cart);
//       updateSubtotal(price);
//       updateCartCount();
//     });

//     newCartProduct.querySelector(".minus").addEventListener('click', () => {
//       let quantity = parseInt(newCartProduct.querySelector(".quant-value").textContent);
//       if (quantity > 0) {
//         quantity -= 1;
//         newCartProduct.querySelector(".quant-value").textContent = quantity;
//         const price = parseFloat(newCartProduct.querySelector(".item-price").textContent);
//         const itemTotal = quantity * price;
//         newCartProduct.querySelector(".item-total").textContent = itemTotal;
//         cart[index].quantity = quantity;
//         setCart(cart);
//         updateSubtotal(-price);
//         updateCartCount();
//       }

//       if (quantity === 0) {
//         cart = cart.filter((_, i) => i !== index);
//         setCart(cart);
//         renderCartItems(); 
//         updateCartCount(); 
//       }
//     });

//     itemlist.append(newCartProduct);
//   });

//   document.querySelector(".sub-total").textContent = subtotal;
//   updateCartTotal();
// };

// renderCartItems();
// updateCartCount();
