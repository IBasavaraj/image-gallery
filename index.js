let mainImg = document.getElementById("main__img");
let images = document.querySelectorAll(".image");

images.forEach(imgs =>{       
    imgs.addEventListener("click", (e) => {
        images.forEach(image => image.style.border = "none");      
        mainImg.src = e.target.src; 
        e.target.style.border = "3px solid red";                                    
    });        
});
