const colors = ["#F97316", "#0E9C88", "#9F4200", "#FFAB6F"]
const box = document.querySelector(".box")
let currentIndex = 0;

setInterval(() => {
    let newColor = colors[currentIndex]
    box.style.borderColor = newColor
    currentIndex += 1
    if (currentIndex >= colors.length) {
        currentIndex = 0
    }
}, 3000)