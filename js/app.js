const element = "#box"
let tl = gsap.timeline()
tl.to(element, { x: 500, duration: 2, rotation: 360, ease: "bounce.out"});
tl.to(element, { y: 200, duration: 1 });
tl.to(element, { y: 400, duration: 3 });