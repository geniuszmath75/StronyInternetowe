
function memory() {
    let score = document.getElementById("score");
    document.getElementById("start").style.display = "none";

    setTimeout(game, 10000);
    // setTimeout(timer, 10000);

    // function timer() {
    //     let eventTime = 600000;
    //     let s = eventTime / 1000;
    //     let min = s / 60;
    //     let sLeft = 0;
    //     let minLeft = 0;

    //     while(min > 0 && s > 0)
    //     {
    //         s = eventTime / 1000;
    //         min = s / 60;
            
    //         sLeft = Math.floor(s % 60);
    //         minLeft = Math.floor(min % 60);

    //         if(minLeft < 10);
    //             minLeft = "0" + minLeft;
    //         if(sLeft < 10)
    //             sLeft = "0" + sLeft;

    //         document.getElementById("time").innerHTML += minLeft + " : " + sLeft;
    //     }
    //         alert("Czas upłynął. Przegrałeś!");
    // }


    function game() {
        let images = ["img1", "img2", "img3", "img4", "img5", "img6", 
                      "img7", "img8", "img9", "img10", "img11", "img12",
                      "img13", "img14", "img15", "img16"];
        console.log(images);
        for(let i = 0; i < images.length; i++)
        {
            document.getElementById(images[i]).src = "images/czarny.png";
        }
        
        score.innerHTML += "0";

    }
}