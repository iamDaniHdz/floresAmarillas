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
    location.href ="https://iamdanihdz.github.io/floresAmarillas/flowers"
};
