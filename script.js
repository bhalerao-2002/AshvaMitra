const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

//navebar animation
gsap.from(".nlink", {
    stagger: .1,
    y: 10, 
    duration: 1,
    ease: Power2,
    opacity: 0
})


// Heading title animate

Shery.textAnimate(".headings h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 10,
    delay: 1,
    duration: 6,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

//Animating the images of heropage 

gsap.from(".anime2", {
    y:50,
    opacity: 0,
    stagger: .3,
    ease: Expo,
    duration: 2
})

//animating the middle image of hero page named part2center image
Shery.imageEffect(".imgntext img", {
    style: 3,
    config: {"uFrequencyX":{"value":18,"range":[0,100]},"uFrequencyY":{"value":18,"range":[0,100]},"uFrequencyZ":{"value":16,"range":[0,100]},"geoVertex":{"range":[1,64],"value":44.28},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6661248135610495},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
    
});

Shery.imageEffect(".anime3 img", {
    style: 5,
    config: {"a":{"value":0.23,"range":[0,30]},"b":{"value":-0.85,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7856727475065394},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
});

Shery.imageEffect(".bannerImg",{
  style: 5,
  config: {"a":{"value":0.1,"range":[0,30]},"b":{"value":-0.99,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.7323058760983163},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.71,"range":[1,15]},"durationOut":{"value":0.59,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.05,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":27}},"discard_threshold":{"value":0.69,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.49,"range":[0,2]},"noise_scale":{"value":24.43,"range":[0,100]}},
  gooey: true
})


//last video hover section

document.querySelector(".ftext button").addEventListener('mouseover', function() {
    gsap.to(".future video",{
        opacity: 1,
        duration: 1.5,
        ease: Power4
    })
})

document.querySelector(".ftext button").addEventListener('mouseleave', function() {
    gsap.to(".future video",{
        opacity: 0,
        duration: 1.5,
        ease: Power4
    })
})

document.getElementById('emailButton').addEventListener('click', function() {
    // Replace with your email address where you want to receive emails
    var toEmail = 'developer2002rb@example.com';
    // Replace with subject and body of the email
    var subject = 'New email from AshvaMitra website';
    var body = 'Hello, I am interested in joining the moment.';

    // Open the default email client with pre-filled subject and body
    var mailToLink = 'mailto:' + toEmail + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    
    // Open the email client
    window.open(mailToLink);
});


