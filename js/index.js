const talle = document.querySelector(".talle"),
select = talle.querySelector(".select"),
option = talle.querySelectorAll(".option"),
selecttxt = talle.querySelector(".select-txt")

select.addEventListener("click", ()=> talle.classList.toggle("click"))

option.forEach(option =>{
    option.addEventListener("click", ()=>{
        let optiontxt = option.querySelector(".option-txt").innerHTML
        selecttxt.innerHTML = optiontxt

        talle.classList.remove("click")
    })
})

const cart = document.querySelector(".cart"),
favorite = cart.querySelector(".like")
favorite.addEventListener("click", ()=> cart.classList.toggle("liked"))