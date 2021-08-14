let controller = new ScrollMagic.Controller()
let timeline = new TimelineMax()
let scene = new ScrollMagic.Scene()

timeline
    .to(".community__one", 2, {y: -200})
    .to(".community__two", 2, {y: -200}, "-=2")
    .to(".community__three", 2, {y: -200}, "-=2")


let scene = new ScrollMagic.Scene({
    triggerElement: ".community",
    duration: "100%",
    triggerHook: 0
})
    .setTween(timeline)
    .addTo(controller);