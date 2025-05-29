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

//Script for prefernce centre button
    document.addEventListener('cookieyes_banner_load', () => {
        const element = document.querySelector('.cky-title');
        if (element) {
            const wrapper = document.createElement("div");
            wrapper.style.cssText = `
                display: flex;
                justify-content: flex-end;
                margin-bottom: 8px;
            `;

            const link = document.createElement("a");
            link.id = "continue-btn";
            link.innerText = "Continue without accepting";
            link.style.cssText = `
                text-decoration: underline;
                font-family: Arial, sans-serif;
                font-size: 12px;
                color: #E25E00;
                cursor: pointer;
            `;

            link.addEventListener("click", function () {
                performBannerAction("reject");
            });

            wrapper.appendChild(link);
            element.parentNode.insertBefore(wrapper, element);
        } else {
            console.log('Element not found');
        }
    });



//Script for adding continue button
document.addEventListener('cookieyes_banner_load', () => {
    const noticeContainer = document.querySelector('.cky-notice');
    if (noticeContainer) {
        const lang = document.documentElement.lang || 'fr'; // Default to French

        const preferenceLink = document.createElement('a');
        preferenceLink.id = 'RevButton';
        
        // Set button text based on language
        preferenceLink.innerText = lang === 'en' 
            ? 'Manage my preferences →' 
            : 'Configurer mes préférences →'; // French is default

        preferenceLink.style.display = 'block';
        preferenceLink.style.marginTop = '12px';
        preferenceLink.style.color = '#0073e6'; 
        preferenceLink.style.cursor = 'pointer';

        preferenceLink.addEventListener('click', function () {
            revisitCkyConsent();
        });

        noticeContainer.appendChild(preferenceLink);
    } else {
        console.log('Cookie notice container not found');
    }
});






















