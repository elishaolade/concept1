let header = document.querySelector("header");
let largeHeader = document.querySelector(".lg-header");
let menuBtn = document.querySelector(".menu-btn");
let mobileMenu = document.querySelector(".mobile-menu");
let body = document.querySelector("body");
let banner = document.querySelector("#banner");
let downArrow = document.querySelector(".down");


let windowBool = window.innerWidth > 600 ? ".lg-header" : ".sm-header";

let deduct = Math.floor(banner.offsetHeight/3);

var controller = new ScrollMagic.Controller();
var timeline = new TimelineMax();
var box1Tween = gsap.to("#banner", .3, { opacity: 0, duration: .4, ease: "power2.in" });
var box2Tween = gsap.to(windowBool, .3, { paddingTop: banner.offsetHeight, paddingBottom: banner.offsetHeight,  duration: .6, ease: "power2.in"});
var stretch = gsap.from(".collections-area", { height: 0 });
var produtDetailStretch = gsap.from(".product-details", { height: 0 });
let totalDuration = 3;

timeline.add(box1Tween, "-=3");
timeline.add(box2Tween, "-=3");

var scene = new ScrollMagic.Scene({
  triggerHook: .1,
  offset:40
})
.setTween(timeline)
.addIndicators()
.addTo(controller);


menuBtn.addEventListener("click",()=>{
  clickHandler();
});
let tl = new TimelineMax({ paused: true });

function clickHandler(){
  body.style.overflow = body.style.overflow ? "hidden" : null;
  tl.to(".mobile-menu", { left : 0, ease: "expo.in", duration: .5 });
  tl.reversed() ? tl.play():tl.reverse();
}

var desktopMenu = document.querySelector(".desktop_menu");
var sandy = document.querySelector(".sandy");
var link = document.querySelector(".extra_link");

link.addEventListener('mouseenter', function(){
  sandy.style.transform = `translateY(0)`;
  console.log(largeHeader.offsetHeight);
});
desktopMenu.addEventListener('mouseleave', e => {
  sandy.style.transform = "translateY(-100vh)";
});

var productPanels = document.querySelectorAll('.product-details');
productPanels.forEach(panel => {
  panel.style.transition = "all .3s ease-in-out"; 
  panel.style.transform = `translateY(${panel.offsetHeight}px);`
  panel.addEventListener('mouseenter', function(){
    console.log(this);
    this.style.backgroundColor = "rgb(255,201,139)";
    this.style.color = "rgb(0,0,0)";
  });
  panel.addEventListener('mouseleave', function(){
    this.style.backgroundColor = "rgb(247,248,243)";
    this.style.color = "rgb(0,0,0)";
  });
});

var products = document.querySelectorAll('.product');

products.forEach( e => {
  let img = e.querySelector('.product-photo img');
  let frame  = e.querySelector('.product-photo');
  let detail = e.querySelector('.product-details');
  e.addEventListener('mouseout', function(){
    frame.style.height = `100%`;
    detail.style.height = null;
  });
  img.addEventListener( 'mouseover', function(){
    detail.style.height = `70px`;
    frame.style.height = `calc( 100% - ${detail.style.height})`;
  });
  img.addEventListener('mouseout', function() {
    frame.style.height = `100%`;
    detail.style.height = null;
  });
  detail.addEventListener('mouseover', function(){
    detail.style.height = `70px`;
    frame.style.height = `calc( 100% - ${detail.style.height})`;
  });
});

var gap = document.querySelector('.gap');
gap.style.height = `${header.offsetHeight}px`;


