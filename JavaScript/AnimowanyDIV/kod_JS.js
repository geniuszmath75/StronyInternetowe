let x = document.getElementById("DIV");
let y = parseInt(window.innerWidth) - 197;

setInterval(move, 500);

function move() {
    x.style.transform = `translate(${y}px)`;
    x.style.transform = `translate(-${y}px)`;
    x.style.transition = "3s linear";
}
        

            


