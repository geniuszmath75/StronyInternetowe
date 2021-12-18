let x = document.getElementById("DIV");
let y = window.innerWidth - 200;
let position = parseInt(x.style.left);
console.log(position);

if(position != 0)
{
    x.style.transform = `translateX(-${y}px)`;
    x.style.transition = "all 2s linear";
}else
{
    x.style.transform = `translateX(${y}px)`;
    x.style.transition = "all 1s linear";
}
