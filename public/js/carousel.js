var leftArrowElement = document.getElementsByClassName('carousel-left-arrow')[0];
var rightArrowElement = document.getElementsByClassName('carousel-right-arrow')[0];

var carousel = new Carousel({
    panels: document.getElementsByClassName('carousel-panel'),
    leftArrow: leftArrowElement,
    rightArrow: rightArrowElement,
    arrowDisabledClass: 'arrow-disabled'
});

// go to first panel which will add a css class on the left arrow to disable it
carousel.goTo(0);

// click right arrow to navigate to next panel
// which will remove the disabled css class from the left arrow
rightArrowElement.click();