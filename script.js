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
const openButton=document.querySelector(".data-modal-open")
const closeButton=document.querySelector(".data-close-modal")
const modal=document.querySelector(".data-modal")

openButton.addEventListener('click',()=>{
    modal.showModal();
}
)
closeButton.addEventListener('click',()=>{
    modal.close();
}
)



productname=document.querySelector('.productname');
modalprice=document.querySelector('.modalprice');
modalimg=document.querySelector('.modal-img');



const products = document.querySelectorAll(".product-div1,.drone-div,.phone-div,.gaming-div,.monitor-div,.headphone-div,.camera-div");
products.forEach((product) => {
  product.addEventListener("click", () => {
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


