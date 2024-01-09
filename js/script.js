let a = document.querySelector(".inputField")
let btn = document.querySelector(".btn")
let result = document.querySelector(".result")
const age = 21


btn.addEventListener("click", function(){
    if (a.value >= age) {
        result.innerHTML = "ok"
    }else{
        result.innerHTML = "not ok"
    }
})