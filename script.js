// gsap.to("#box",{
//     x:500,
//     duration:2,
//     delay:2 // after how much seconds the element will start to animate
// })

// gsap.to("#box1",{
//     x:500,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"white",
//     borderRadius:"200px",
//     scale:0.2,
//     repeat:2, // repeats n+1 times , infinite if -1
//     yoyo:true,
// })

// gsap.to("#box2",{
//     x:550,
//     y:100,
//     duration:2,
//     delay:1
// })

// .to --> for initial(0) to final position 
// .from --> for final to initial(0)

// gsap.from("#box2",{
//     x:550,
//     y:100,
//     duration:2,
//     delay:1,
// })

// gsap.from("h1",{
//     opacity:0,
//     y:50,
//     duration:2,
//     delay:1,
//     // stagger:0.5 // used to animate objects one by one , delay time passed in it
//     stagger: -0.5, // in reverse
// })

// Implementing Timeline

var tl = gsap.timeline();

tl.to("#box1",{
    x:350,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"white",
    borderRadius:"200px",
    scale:0.2,
    repeat:2, // repeats n+1 times , infinite if -1
    yoyo:true,
})

tl.to("#box2",{
    x:360,
    y:100,
    duration:2,
    delay: 5
})

tl.from("h1",{
    opacity:0,
    y:50,
    duration:2,
    // stagger:0.5 // used to animate objects one by one , delay time passed in it
    stagger: -0.5, // in reverse
})