// function displayImage() {
//     let display = document.getElementById("display")
//     if(display.style.display == 'none'){
//         display.style.display = 'block';
//     }
//     else {
//         display.style.display = 'none';
//     }
// }

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



tl.fromTo(slider, .5, {height: '100%'}, {height: '0%', ease: Power2.easeInOut})
.fromTo(logo, .2, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut})
.fromTo(nav, .2, {x: '-600%'}, {x: '0%', ease: Power2.easeInOut})
.fromTo(one, .2, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut})
.fromTo(two, .2, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut})
.fromTo(three, .2, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut})
.fromTo(four, .2, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut})
.fromTo(languages, .2, {opacity: 0}, {opacity:1}, '-=.2')
.fromTo(languages, .3, {x:100}, {x:0}, '-=.2')


// .to(languages, {duration: 3, rotation: 360}) 



// .to(five, {duration: 4, rotation:200}) 

// .fromTo(five, 1, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut})

//.fromTo(pad, 1, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut})



let myname = document.getElementById('name')
let myemail = document.getElementById('email')
let mymessage = document.getElementById('message')

$("form").on("submit", function() {
    $.ajax({
        url: "https://formspree.io/mnqbbldl",
        method: "POST",
        data: {
            name: name.value,
            message: message.value,
            email: email.value
        },
        dataType: "json",
        success: function(success) {
            alert("Form submitted successfully, thank you!")
        }
    });
    myname.value = '';
    myemail.value = '';
    mymessage.value = '';
    return false ;
})



  //https://formspree.io/mnqbbldl