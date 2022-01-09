setInterval(change, 2000);

let i = 0
function change() {
    let images = ['images/kowalski.png', 'images/faq.png'];
    document.getElementById("image").src = images[i];
    i++
    if(i == 2) { i = 0 };    
}
