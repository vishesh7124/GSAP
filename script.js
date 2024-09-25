// gsap.to("#box",{
//     x:500,
//     duration:2,
//     delay:2 // after how much seconds the element will start to animate
// })

gsap.to("#box1",{
    x:500,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"white",
    borderRadius:"200px",
    scale:0.2
})

// gsap.to("#box2",{
//     x:550,
//     y:100,
//     duration:2,
//     delay:1
// })

// .to --> for initial(0) to final position 
// .from --> for final to initial(0)

gsap.from("#box2",{
    x:550,
    y:100,
    duration:2,
    delay:1,
})