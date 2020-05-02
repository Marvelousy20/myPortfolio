// function display() {
//     // let myInfo = document.querySelector('ul') ;
//     // if(myInfo.style.display === 'none') {
//     //     myInfo.style.display = 'block' 
//     // }
//     // else{
//     //     myInfo.style.display = 'none'
//     // }

//     let myInfo = document.querySelector('ul') ;
//     if(myInfo.style.display === 'none')
//     myInfo.style.display = 'block'
//     else
//     myInfo.style.display = 'none'

// }

$(function() {
    $('#disp').on('click', function() {
        if($('.item').hasClass('active')) {
            $('.item').removeClass('active')
        }
        else{
            $('.item').addClass('active') 
        }
    })
})

$(function () {
    $('.read').on('click', function() {
        if($('.hide-at-first').hasClass('add')) {
            $('.hide-at-first').removeClass('add')
        }
        else{
            $('.hide-at-first').addClass('add')
            $('.control').addClass('add-also')
        }
    })
})

$(function(){
    $('.less').on('click', function() {
        if($('.hide-at-first').hasClass('add')) {
            $('.hide-at-first').removeClass('add')
            $('.control').removeClass('add-also')
        }
    })
})

