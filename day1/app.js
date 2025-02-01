console.log("Hello world")
let count = 0
document.getElementById("decrement").addEventListener("click", 
    () => {
        count--
        console.log(count)
        updateCounter()
    }
)
document.getElementById("reset").addEventListener("click", 
    () => {
        count = 0
        updateCounter()
    }
)
document.getElementById("increment").addEventListener("click", 
    () => {
        count++
        console.log(count)
        updateCounter()
    }
)
function updateCounter(){
    document.getElementById("paragraph").textContent = count
}
