let controller = new ScrollMagic.Controller()
let timeline = new TimelineMax()
let our_menu_timeline = new TimelineMax()

timeline
    .to(".community__one", 1, {y: -500})
    .to(".community__two", {y: -500}, "-=1")
    .to(".community__three", {y: -500}, "-=1")

our_menu_timeline
            .to(".starters", 1,{y: -500})
            .to(".main__course", {y: 500}, '-=1')
            .to(".sides", {y: -500}, '-=1')
            .to(".desert", {y: 500}, '-=1')

let scene = new ScrollMagic.Scene({
    triggerElement: ".community",
})
    .setTween(timeline)
    .addTo(controller);

let new_scene = new ScrollMagic.Scene({
    triggerElement: ".our__menu"
})
    .setTween(our_menu_timeline)
    .addTo(controller)