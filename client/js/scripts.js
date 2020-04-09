function displayImage() {
    let display = document.getElementById("display")
    if(display.style.display == 'none'){
        display.style.display = 'block';
    }
    else {
        display.style.display = 'none';
    }
}

let body = document.querySelector('html');
let nav = document.querySelector('.navul');
let pad = document.querySelector('.pad') ;
let one = document.querySelector('.one') ;
let two = document.querySelector('.two') ;
let three = document.querySelector('.three') ;
let four = document.querySelector('.four') ;
let five = document.querySelector('.five')
let logo = document.querySelector('.lgo')
let slider = document.querySelector('.slider')

let languages = document.querySelector('.languages')


let tl = new TimelineMax() ;



tl.fromTo(slider, 1, {height: '100%'}, {height: '0%', ease: Power2.easeInOut})
.fromTo(logo, 1, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut})
.fromTo(nav, 1, {x: '-600%'}, {x: '0%', ease: Power2.easeInOut})
.fromTo(one, 1, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut})
.fromTo(two, 1.5, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut})
.fromTo(three, 1, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut})
.fromTo(four, 1, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut})
.fromTo(languages, 1, {opacity: 0}, {opacity:1}, '-=1')
.fromTo(languages, 1, {x:100}, {x:0}, '-=1')
.to(languages, 2, {rotate: "+=360"})


// .to(languages, {duration: 3, rotation: 360}) 



// .to(five, {duration: 4, rotation:200}) 

// .fromTo(five, 1, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut})

//.fromTo(pad, 1, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut})