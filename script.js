import { todayDeal } from "./today-deals.js";

/*-------Image Slider------*/
let slideBtnLeft = document.getElementById("slide-btn-left");
let slideBtnRight = document.getElementById("slide-btn-right");
let imageItem = document.querySelectorAll(".image-item");

let startSlider = 0;
let endSlider = (imageItem.length - 1) * 100; //700
slideBtnLeft.addEventListener("click", () => {
    if (startSlider < 0) {
        startSlider += 100;
    }
    console.log(startSlider);
    imageItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })
})
slideBtnRight.addEventListener("click", () => {
    if (startSlider >= -endSlider + 100) {
        startSlider -= 100;
    }
    console.log(startSlider);
    imageItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })
})
// Infinity Slider*//

// const Slider = document.getElementById('slider')
// function moveSlider(){
//  const firstSlide = slider.children[0];
//  Slider.style.transition='none';
//  Slider.style.transform='translateX(+100%)';
//  setTimeout(()=>{
//      Slider.style.transition='';
//      Slider.appendChild(firstSlide);
//      Slider.style.transform='translateX(0)';
//  },0);
// }
// setInterval(moveSlider,5000);




// /*sider bar nav*/
// const slidebarNavigationEl = document.getElementById('slidebar-container-navigation-id');
// console.log(slidebarNavigationEl);
// const slidebarOpenNavigationEl = document.getElementById("open-nav-slidebar");
// slidebarOpenNavigationEl.addEventListener("click",()=>{
//    slidebarNavigationEl.classList.toggle("slidebar-show");
// })



// today deals
console.log(todayDeal);
let todayDealProductList = document.querySelector(".today-deals-product-list");
console.log(todayDealProductList);


let todayDealProductHTML = ""
let todatDelLength = todayDeal.length
for (let i = 0; i < todatDelLength; i++) {
    // console.log(todayDeal[i])
    todayDealProductHTML += `
    <div class="today-deals-product-item">
       <img src=${todayDeal[i].img}>
         <div class="discount-container">
            <a href="#">Upto ${todayDeal[i].discount}% off</a>
            <a href="#">${todayDeal[i].DealofDay}</a>
        </div>
        <p>${todayDeal[i].description}</p>
    </div>
    `
}
todayDealProductList.innerHTML =  todayDealProductHTML
// console.log(todayDealProductHTML);

// let today_deals_btn_prevEL = document.getElementById(".today-deals-btn-1");
// let today_deals_btn_nextEL = document.getElementsById(".today-deals-btn-2");
// today_deals_btn_prevEL.addEventListener("click",()=>{
//     alert("hi");
// })

// today_deals_btn_nextEL.addEventListener("click",()=>{
//  alert("fight");
// })