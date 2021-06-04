
var tl = gsap.timeline();
var box = document.querySelector("body");

gsap.timeline()
tl.to("#preloader", {
    duration: 1.5,
    height: 0,
    ease: "expo.inOut"
}),

tl.from(".title", {
    duration: 1,
    y: 20,
    opacity: 0,
    ease: "expo.inOut" },
    "-=0.5"
),

tl.from(".subtitle, .works-list", {
    duration: 0.7,
    y: 20,
    opacity: 0,
    ease: "expo.inOut",
    stagger: 0.1 },
    "-=0.7"
);