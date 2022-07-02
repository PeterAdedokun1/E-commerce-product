//click of the images
const BigImage = document.querySelector(".img-1")
const smallImage = document.querySelectorAll(".small-img");
const divSmallImage = document.querySelectorAll(".small-img-col");
const Container = document.querySelector(".single-image")
const ModalContainer = document.querySelector(".modal-component")
const CloseBtn = document.querySelector(".close-btn")
const SmallModalImage = document.querySelectorAll(".small-modal-img")
const ModalBigImage = document.querySelector(".main-image");
const Peter = document.querySelector(".peter")
const nextBtn = document.querySelector(".next-btn")
const prevBtn = document.querySelector(".prev-btn")
const menu = document.querySelector(".menu");
const navClosebtn = document.querySelector(".btn-close");
const navMiddle = document.querySelector(".nav-links")
const minus = document.querySelector(".minus")
const number = document.querySelector(".number")
const plus = document.querySelector(".plus")
const itemCount = document.querySelector(".cart-item-count")
const cartModal = document.querySelector(".cart-modal");
const toggleCart = document.querySelector(".toggle-cart")
const cartBtn = document.querySelector(".cart-btn");
const itemNumber = document.querySelector(".item-num")
const totalPrice = document.querySelector(".total-price");
const cartImage = document.querySelector(".cart-image");
const pModal = document.querySelector(".p-modal");
const prevScreenbtn = document.querySelector(".prev-small-screen");
const nextScreenbtn = document.querySelector(".next-small-screen");
const smallScreenMain = document.querySelector(".small-screen-main");
console.log(smallScreenMain)
const image = [
    {
        img4: "http://127.0.0.1:5500/images/image-product-1-thumbnail.jpg"
    }
    ,
    {
        img1: "http://127.0.0.1:5500/images/image-product-2-thumbnail.jpg"      
    },
    {
    img2: "http://127.0.0.1:5500/images/image-product-3-thumbnail.jpg"
    },
    {
        img3: "http://127.0.0.1:5500/images/image-product-4-thumbnail.jpg"
    }
]
const smallscreenimage = [
    "http://127.0.0.1:5500/images/image-product-1-thumbnail.jpg",
    "http://127.0.0.1:5500/images/image-product-2-thumbnail.jpg",
    "http://127.0.0.1:5500/images/image-product-3-thumbnail.jpg",
    "http://127.0.0.1:5500/images/image-product-4-thumbnail.jpg"
]
let currentItem = 0
window.addEventListener("DOMContentLoaded", function () {
    smallScreenMain.src = smallscreenimage[0]
});
nextScreenbtn.addEventListener("click", () => {
    currentItem++

    if (currentItem > smallscreenimage.length - 1) {
    currentItem = 0;
    }
    smallScreenMain.src = smallscreenimage[currentItem]
})
prevScreenbtn.addEventListener("click", () => {
    currentItem--
     if (currentItem <0) {
    currentItem = smallscreenimage.length-1
    }
    smallScreenMain.src = smallscreenimage[currentItem]
})
let figure = 0
toggleCart.addEventListener("click", () => {
    itemCount.innerHTML = figure
    cartModal.classList.toggle("open-cart-modal");
    itemNumber.innerHTML = figure;
    totalPrice.innerHTML = Number(125 * figure).toFixed(2);
    cartImage.src = BigImage.src;
})
//to increase add to cart
minus.addEventListener('click', () => {
    figure--
    if (figure < 0) {
        figure = 0;
    }
    number.innerHTML = figure
})
plus.addEventListener('click', () => {
    figure++;
    number.innerHTML = figure
})  
cartBtn.addEventListener("click", () => { 
    itemCount.innerHTML = figure
    cartModal.classList.toggle("open-cart-modal");
    itemNumber.innerHTML = figure;
    totalPrice.innerHTML = Number(125 * figure).toFixed(2);
    cartImage.src = BigImage.src;
 
})

//sidebar
menu.addEventListener("click", () => {
    navMiddle.classList.toggle("show")
})
navClosebtn.addEventListener("click", () => {
    navMiddle.classList.remove("show")
})

//modal     
let count = 0;
nextBtn.addEventListener("click", () => {
     count++;
  if (count > image.length - 1) {
    count = 0;
    }
        ModalBigImage.src = SmallModalImage[count].src
})
prevBtn.addEventListener("click", () => {
    count--
    if (count < 0) {
        count = image.length - 1;
    }
    ModalBigImage.src = SmallModalImage[count].src
})
smallImage.forEach((item) => {
    item.addEventListener("click", (e) => {
        const style = e.currentTarget
        BigImage.src = style.src

    })
})
SmallModalImage.forEach((item) => {
    item.addEventListener("click", (e) => {
        const style = e.currentTarget;
        ModalBigImage.src = style.src
    })
})

//body background

BigImage.addEventListener("click", () => {
    ModalContainer.classList.add("open")
        Peter.classList.add("body")
})

CloseBtn.addEventListener("click", () => {
    ModalContainer.classList.remove("open")
    Peter.classList.remove("body")
})