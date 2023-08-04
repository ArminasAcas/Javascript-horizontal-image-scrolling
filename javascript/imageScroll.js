function setUpImageScroll() {
    let buttons = document.querySelectorAll(".buttons");
    let images = document.querySelectorAll(".image");
    if (!buttons || !images) return;

    preloadImages(images);

    images.forEach(image => {
        image.style.left = 0 + "px";
    })

    let interval;
    buttons.forEach(button => {
        button.addEventListener("mousedown", function() {
           interval = setInterval(() => checkButtonClick(button, images), 5);
        })
        button.addEventListener("mouseup", function() {
            clearInterval(interval);
        })
        button.addEventListener("mouseleave", function() {
            clearInterval(interval);
        })
    })
}
    
function checkButtonClick(button, images) {
    if (button.innerHTML == "&lt;")
        {
        images.forEach(image => {
                image.style.left = parseInt(image.style.left) + 3 + "px";
            })
        } 
    else if (button.innerHTML == "&gt;")
        {
            images.forEach(image => {
                image.style.left = parseInt(image.style.left) - 3 + "px"; 
            })
        } 
    }
    
function preloadImages(images){
    images.forEach((image,index) => {
        image.setAttribute('src','images/' + imgSource[index]);
    })
}