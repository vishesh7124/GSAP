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

// var tl = gsap.timeline();

// tl.to("#box1",{
//     x:350,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"white",
//     borderRadius:"200px",
//     scale:0.2,
//     repeat:2, // repeats n+1 times , infinite if -1
//     yoyo:true,
// })

// tl.to("#box2",{
//     x:360,
//     y:100,
//     duration:2,
//     delay: 5
// })

// tl.from("h1",{
//     opacity:0,
//     y:50,
//     duration:2,
//     // stagger:0.5 // used to animate objects one by one , delay time passed in it
//     stagger: -0.5, // in reverse
// })

// gsap.from("#page2 .box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
//     scrollTrigger:"#page2 .box" // animation will trigger on scrolling to that element
// })
// gsap.from("#page2 .box",{
//     scale:0,
//     duration:2,
//     rotate:360,
//     scrollTrigger:{
//         trigger: "#page2 .box",
//         scroller:"body",
//         markers:true, // tell where the animation starts and ends    
//         start: "top 60%", //shifts the start 
//     } // animation will trigger on scrolling to that element
// })

// gsap.from("#page2 h1",{
//     opacity:0,
//     duration:1,
//     x:500,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         // markers:true,
//         start:"top 50%"
//     }

// })
// gsap.from("#page2 h2",{
//     opacity:0,
//     duration:2,
//     x:-500,
//     scrollTrigger:{
//         trigger:"#page2 h2",
//         scroller:"body",
//         // markers:true,
//         start:"top 50%",
//     }

// })
// gsap.from("#page2 .box",{
//     scale:0,
//     opacity:0,
//     duration:1,
//     rotate:720,
//     scrollTrigger:{
//         trigger:"#page2 .box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top 30%",
//         // scrub:true // for animation flow according to scroll
//         scrub : 2, // value for smooth animation
//         pin:true,
//     }
// })


gsap.to("#page2 h1",{
    transform: "translateX(-150%)",
    duration:2,
    scrollTrigger:{
        trigger:"#page2", // whenever we use pin , we trigger the parent element
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:true

    }
})