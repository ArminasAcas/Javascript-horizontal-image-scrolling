document.addEventListener("DOMContentLoaded" , function () {

    let buttons = document.querySelectorAll(".buttons");
    let images = document.querySelectorAll(".image");
    if (!buttons || !images) return;

    images.forEach(image => {
        image.style.left = 0 + "px";
    })

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            if (button.innerHTML == "&lt;")
            {
                images.forEach(image => {
                    console.log(image.style.left);
                    console.log(parseInt(image.style.left)); 
                    image.style.left = parseInt(image.style.left) + 20 + "px";
                })
            } 
            else if (button.innerHTML == "&gt;")
            {
                images.forEach(image => {
                    image.style.left = parseInt(image.style.left) - 20 + "px"; 
                })
            }  
        })
    })
})