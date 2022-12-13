
let mainImg = document.getElementById("main_img");

let allSmallImg = document.querySelectorAll(".icons img");

let container = document.querySelector(".container");

let mainBtn = document.querySelector("#mainBtn");

let text = document.querySelector(".text");
console.log(mainBtn)

allSmallImg.forEach(function(img) {
    
    img.addEventListener("click", function() {

        mainImg.src = img.getAttribute("src");
        container.style.backgroundColor = this.getAttribute("data-bg-color");
        mainBtn.style.color = this.getAttribute("data-bg-color");

        allSmallImg.forEach(function(i) {
            i.classList.remove("active");
        })
        this.classList.add('active');
    })
})
