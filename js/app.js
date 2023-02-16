import gsap from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"

const element = document.getElementById('.box');
gsap.to(element, { x: 500, duration: 2 });
gsap.to(element, { x: 500, duration: 2, ease: 'ease-out' });
gsap.to(element, { x: 500, duration: 2 })
    .to(element, { y: 200, duration: 1 });