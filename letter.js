// $(document).ready(function () {
//     $('.container').mouseenter(function () {
//         $('.card').stop().animate({
//             top: '-90px'
//         }, 'slow');
//     }).mouseleave(function () {
//         $('.card').stop().animate({
//             top: 0
//         }, 'slow');
//     });
// });
let firstTouch = false

const openLetter = () => {
    $('.card').stop().animate({
        top: '-90px'
    }, 'slow');

    if (firstTouch) {
        goToFlowers();
    } else {
        firstTouch = true;
    }
};


const goToFlowers = () => {
    console.log('goToFLowers');
    location.href ="http://127.0.0.1:5500/flowers.html"
};
