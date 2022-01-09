let x = document.getElementById("banner");
let banner = x.value;
let letter = banner.split("");
console.log(letter);

setInterval(move, 1000);

function move() {

    let firstL = letter.shift();
    letter.push(firstL);
    console.log(letter);
    banner = (letter.join('')).toString();
    x.value = banner;
    console.log(banner);

}
