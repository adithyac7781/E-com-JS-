//retrieving
const cartProduct = document.querySelector(".item");
const itemlist=document.querySelector(".item-list")


const cart = JSON.parse(localStorage.getItem("cart")) || [];


let total = 0;
let subtotal = 0;
let eachItemtotal = 0;

cart.forEach((item) => {
  const newCartProduct = cartProduct.cloneNode(true);
  newCartProduct.style.display = "flex";
  newCartProduct.querySelector(".item-img").src = item.image;
  newCartProduct.querySelector(".item-name").textContent = item.name;
  newCartProduct.querySelector(".item-price").textContent = item.price;
  newCartProduct.querySelector(".quant-value").textContent = item.quantity;
  console.log(item.quantity)
  console.log(item.price)

  eachItemtotal = parseInt(item.quantity) * parseInt(item.price);
  newCartProduct.querySelector(".item-total").textContent=eachItemtotal;
  itemlist.append(newCartProduct);

});





//    
    
//     subtotal += eachItemtotal;
//     cartProducts.append(newCartProduct);
//   }):


//increasing count 

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