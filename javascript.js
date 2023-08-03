document.addEventListener("DOMContentLoaded" , function () {

    let buttons = document.querySelectorAll(".buttons");
    let images = document.querySelectorAll(".image");
    
    if (!buttons || !images) return;

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
    })
})

function checkButtonClick(button, images) {
    if (button.innerHTML == "&lt;")
        {
        images.forEach(image => {
                image.style.left = parseInt(image.style.left) + 2 + "px";
            })
        } 
    else if (button.innerHTML == "&gt;")
        {
            images.forEach(image => {
                image.style.left = parseInt(image.style.left) - 2 + "px"; 
            })
        } 
}