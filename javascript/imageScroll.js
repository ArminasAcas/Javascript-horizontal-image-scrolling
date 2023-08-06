function setUpImageScroll() {
    let buttons = document.querySelectorAll(".button");
    images = document.querySelectorAll(".image-block__images");
    if (!buttons || !images) return;

    preloadImages();

    images.forEach(image => {
        image.style.left = 0 + "px";
    })

    let interval;
    buttons.forEach(button => {
        button.addEventListener("mousedown", function() {
           interval = setInterval(() => checkButtonClick(button), 5);
        })
        button.addEventListener("mouseup", function() {
            if (interval) clearInterval(interval);
        })
        button.addEventListener("mouseleave", function() {
            if (interval) clearInterval(interval);
        })
    })
}
    
function checkButtonClick(button) {

    if (button.innerHTML == "&lt;")
        {
        images.forEach(image => {
                if(parseInt(image.style.left) < 0)image.style.left = parseInt(image.style.left) + scrollSpeed + "px";
            })
        } 
    else if (button.innerHTML == "&gt;")
        {
            let imagesWidth = calculateImagesWidthSum();
            images.forEach(image => {
                if(parseInt(image.style.left) > imagesWidth * -1)image.style.left = parseInt(image.style.left) - scrollSpeed + "px";
            })
        } 
    }
    
function preloadImages(){
    images.forEach((image,index) => {
        image.setAttribute('src','images/' + imgSource[index]);
    })
}

function calculateImagesWidthSum() {
    let width = 0;
    images.forEach((image, index) => {
        if (imgSource.length - 1 !== index)width += parseInt(window.getComputedStyle(image).width);
    })
    width -= (imgSource.length - 1) * 20;
    return width;
}