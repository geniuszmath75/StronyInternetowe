let x = document.getElementById("piksel").offsetHeight;
let y = document.getElementById("piksel").offsetWidth;

console.log(x)
console.log(y)
document.addEventListener('keydown', przesun)

function przesun() {
    let option = 37;
    Number(option);
    
    console.log(option);

    switch (option) {
        case 37:
            x.style.left += 1;
            console.log(option);
        case 38:
            y.style.top += 1;
            console.log(option);
        case 39:
            x.style.right += 1;
            console.log(option);
        case 40:
            y.style.bottom += 1;
            console.log(option);
        default:
            return 0;
    }
}