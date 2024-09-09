document.addEventListener("cookieyes_banner_load", function (eventData) {
    //  Check the value in the JSON eventData and perform the desired action.
    console.log("banner-loading");
})

document.addEventListener("cookieyes_consent_update", function (eventData) 
{
    // Check the value in the JSON eventData and perform desired action
     console.log("banner-update");
});


//SLIDESHOW
const productContainers = document.querySelectorAll('.shopping-catgs');
const nxtBtn = document.querySelectorAll('.nxt-btn');
const preBtn = document.querySelectorAll('.pre-btn');

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
        item.style.scrollBehavior="smooth";
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
        item.style.scrollBehavior="smooth";
    })
})

//MODAL
const closeButton=document.querySelector(".data-close-modal")
const modal=document.querySelector(".data-modal")

function closebutton(){
  modal.close();
  count=0;
  document.querySelector('.quant-value').textContent=count;

}
productname=document.querySelector('.productname');
modalprice=document.querySelector('.modalprice');
modalimg=document.querySelector('.modal-img');



const products = document.querySelectorAll(".product-div1,.drone-div,.phone-div,.gaming-div,.monitor-div,.headphone-div,.camera-div");
products.forEach((product) => {
  product.addEventListener("click", () => {
    modal.showModal();
    productname.textContent = product.querySelector(".pro-name").textContent;
    modalprice.textContent = product.querySelector(".pro-price").textContent;
    modalimg.src = product.querySelector(".pro-img").src;
  });
});



const products2 = document.querySelectorAll(".bose,.cellphone,.smart-tv,.samsung,.galaxy,.sony,.washing,.sony-cam,.dell,.tozo,.jbl,.wyze");
products2.forEach((product2) => {
  product2.addEventListener("click", () => {
    modal.showModal();
    productname.textContent = product2.querySelector(".pro-name").textContent;
    modalprice.textContent = product2.querySelector(".pro-price").textContent;
    modalimg.src = product2.querySelector(".pro-img").src;
  });
});

//increasing count in modal

const counterElement=document.querySelector(".quant-value");
const increaseButton=document.querySelector(".plus");
const decreaseButton=document.querySelector(".minus");

let count=0;
function updateCounter(){
  counterElement.textContent = count;
}
increaseButton.addEventListener('click', () => {
  count++;
  updateCounter();
  
});
decreaseButton.addEventListener('click', () => {

  if(count>0)
    count--;

  updateCounter();
});

updateCounter();


//Adding item to cart

const addToCart = document.querySelector(".cart-btn");

addToCart.addEventListener("click", () => {
  const quant= document.querySelector('.quant-value').textContent;
  const proName = document.querySelector(".productname").textContent;
  const proPrice = document.querySelector(".modalprice").textContent;
  const proImage = document.querySelector(".modal-img").src;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProductIndex = cart.findIndex(
    (item) => item.name === proName
  );
  if (existingProductIndex > -1) {
    cart[existingProductIndex].quant += quant;
  } 
  else {
    cart.push({
      name: proName,
      price: proPrice,
      image: proImage,
      quantity: quant,
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${quant} ${proName} added to cart`);
  updateCartCount()
})
//updating cartcount
const updateCartCount = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const itemsCount = cart.reduce((total, item) => total + parseInt(item.quantity), 0);
  document.querySelector(".items-in-cart").textContent = itemsCount;
};
updateCartCount()


// Set a cookie named "username" with value "JohnDoe" that expires in 7 days
// function setCookie(name, value, days) {
//   let expires = "";
//   if (days) {
//       const date = new Date();
//       date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//       expires = "expires=" + date.toUTCString();
//   }
//   document.cookie = name + "=" + (value || "") + ";" + expires + ";path=/";
// }

// // Example usage
// setCookie("username", "JohnDoe", 7);

// function getCookie(name) {
//   const nameEQ = name + "=";
//   const ca = document.cookie.split(';');
//   for (let i = 0; i < ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) === ' ') c = c.substring(1);
//       if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
//   }
//   return null;
// }

// // Example usage
// const username = getCookie("username");
// console.log(username); // Outputs: JohnDoe

// function deleteCookie(name) {
//   document.cookie = name + '=; Max-Age=-99999999;';
// }

// // Example usage


// document.cookie = "name=blahh; SameSite=None; Secure";
// document.cookie = "favorite_food=tripe; SameSite=None; Secure";

// function showCookies() {
//   const output = document.getElementById("cookies");
//   output.textContent = `> ${document.cookie}`;
// }

// function clearOutputCookies() {
//   const output = document.getElementById("cookies");
//   output.textContent = "";
// }









// // SLIDESHOW
// const productContainers = document.querySelectorAll('.shopping-catgs');
// const nxtBtn = document.querySelectorAll('.nxt-btn');
// const preBtn = document.querySelectorAll('.pre-btn');

// productContainers.forEach((item, i) => {
//   let containerDimensions = item.getBoundingClientRect();
//   let containerWidth = containerDimensions.width;

//   nxtBtn[i].addEventListener('click', () => {
//     item.scrollLeft += containerWidth;
//     item.style.scrollBehavior = "smooth";
//   });

//   preBtn[i].addEventListener('click', () => {
//     item.scrollLeft -= containerWidth;
//     item.style.scrollBehavior = "smooth";
//   });
// });

// // MODAL
// const closeButton = document.querySelector(".data-close-modal");
// const modal = document.querySelector(".data-modal");

// function closebutton() {
//   modal.close();
//   count = 0;
//   document.querySelector('.quant-value').textContent = count;
// }

// const productname = document.querySelector('.productname');
// const modalprice = document.querySelector('.modalprice');
// const modalimg = document.querySelector('.modal-img');

// const products = document.querySelectorAll(".product-div1, .drone-div, .phone-div, .gaming-div, .monitor-div, .headphone-div, .camera-div");
// products.forEach((product) => {
//   product.addEventListener("click", () => {
//     modal.showModal();
//     productname.textContent = product.querySelector(".pro-name").textContent;
//     modalprice.textContent = product.querySelector(".pro-price").textContent;
//     modalimg.src = product.querySelector(".pro-img").src;
//   });
// });

// const products2 = document.querySelectorAll(".bose, .cellphone, .smart-tv, .samsung, .galaxy, .sony, .washing, .sony-cam, .dell, .tozo, .jbl, .wyze");
// products2.forEach((product2) => {
//   product2.addEventListener("click", () => {
//     modal.showModal();
//     productname.textContent = product2.querySelector(".pro-name").textContent;
//     modalprice.textContent = product2.querySelector(".pro-price").textContent;
//     modalimg.src = product2.querySelector(".pro-img").src;
//   });
// });

// // Increasing count in modal
// const counterElement = document.querySelector(".quant-value");
// const increaseButton = document.querySelector(".plus");
// const decreaseButton = document.querySelector(".minus");

// let count = 0;
// function updateCounter() {
//   counterElement.textContent = count;
// }

// increaseButton.addEventListener('click', () => {
//   count++;
//   updateCounter();
// });

// decreaseButton.addEventListener('click', () => {
//   if (count > 0) count--;
//   updateCounter();
// });

// updateCounter();

// // Set a cookie named "cart" with value in JSON format that expires in 7 days
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

// // Adding item to cart
// const addToCart = document.querySelector(".cart-btn");

// addToCart.addEventListener("click", () => {
//   const quant = document.querySelector('.quant-value').textContent;
//   const proName = document.querySelector(".productname").textContent;
//   const proPrice = document.querySelector(".modalprice").textContent;
//   const proImage = document.querySelector(".modal-img").src;

//   let cart = getCart();
//   const existingProductIndex = cart.findIndex(
//     (item) => item.name === proName
//   );
//   if (existingProductIndex > -1) {
//     cart[existingProductIndex].quantity = parseInt(cart[existingProductIndex].quantity) + parseInt(quant);
//   } else {
//     cart.push({
//       name: proName,
//       price: proPrice,
//       image: proImage,
//       quantity: quant,
//     });
//   }
//   setCart(cart);
//   alert(`${quant} ${proName} added to cart`);
//   updateCartCount();
// });

// // Updating cart count
// const updateCartCount = () => {
//   const cart = getCart();
//   const itemsCount = cart.reduce((total, item) => total + parseInt(item.quantity), 0);
//   document.querySelector(".items-in-cart").textContent = itemsCount;
// };

// updateCartCount();























