/* experimental stuff = = = NOT IN USE = = =*/
function clickMe() { // kinda boring event, might add something more fun later.
    console.log("Hello!");
    alert("Hello!");
}

function importantMassage() {
    for (var i = 0; i < 20; i++) { // currently not asigned to anything
        alert("We've been trying to reach you about your cars extended warenty!");
        console.log("Let's crahs this guys computer!");
    } 
}

function randomMath() {
    var randomMat = Math.floor(Math.random() * 201);
    alert(randomMat);
}

function movingDivs() {
    document.querySelector('.A').style.visibility = 'visible' // change the visibility an element with the apropriate tag
    document.querySelector('.B').style.visibility = 'visible'
    document.querySelector('.C').style.visibility = 'visible'
    document.querySelector('.D').style.visibility = 'visible'
    document.querySelector('.E').style.visibility = 'visible'
    document.querySelector('.F').style.visibility = 'visible'
    document.querySelector('.G').style.visibility = 'visible'
    document.querySelector('.H').style.visibility = 'visible'

    $(document).ready(function () { // Animation for dives A-H
        animateDiv(".A");
        animateDiv(".B");
        animateDiv(".C");
        animateDiv(".D");
        animateDiv(".E");
        animateDiv(".F");
        animateDiv(".G");
        animateDiv(".H");
    });

    function makeNewPosition() {// Get viewport dimensions (remove the dimension of the div)
        var h = $(window).height() - 50;
        var w = $(window).width() - 50;

        var nh = Math.floor(Math.random() * h);
        var nw = Math.floor(Math.random() * w);

        return [nh, nw];
    }

    function animateDiv(myclass) {
        var newq = makeNewPosition();
        $(myclass).animate({ top: newq[0], left: newq[1] }, 1000, function () {
            animateDiv(myclass);
        });
    }
}  

Math.floor(Math.random() * 500) + 1;
function moveDive() {
    document.querySelector('.sneakOne').style.visibility = 'visible' // change the visibility an element with the apropriate tag
    document.querySelector('.sneakTwo').style.visibility = 'visible'
    document.querySelector('.sneakThree').style.visibility = 'visible'
    document.querySelector('.sneakFour').style.visibility = 'visible'
    document.querySelector('.sneakFive').style.visibility = 'visible'
    document.querySelector('.sneakSix').style.visibility = 'visible'
    document.querySelector('.sneakSeven').style.visibility = 'visible'
    document.querySelector('.sneakEight').style.visibility = 'visible'

    var divs = document.getElementsByTagName('div'); // collects all divs
    var winWidth = window.innerWidth;    // get window width 
    var winHeight = window.innerHeight;  //  get window height

    for ( var i = 0; i < divs.length; i++ ) {  // i stands for "index". you could also call this banana or haircut. it's a variable
        var thisDiv = divs[i];     // shortcut! the current div in the list
        
        randomTop = getRandomNumber(0, winHeight);    // get random numbers for each element
        randomLeft = getRandomNumber(0, winWidth);    // get random numbers for each element
        
        thisDiv.style.top = randomTop +"px";   // update top position
        thisDiv.style.left = randomLeft +"px"; // update left position
    }

    function getRandomNumber(min, max) {  // function that returns a random number between a min and max
    return Math.random() * (max - min) + min;
    }

}

var pressed = false;
function musicTime(){ //this changes a button to do two different things
    if(!pressed){
        document.getElementById("music").innerHTML = "Nevermind";
    }
    else{
       document.getElementById("music").innerHTML = "Music?";}
    pressed = !pressed;
}
// Experimental stuff //
var musicdby = new Audio('I am bad song writer.mp3')
function badSong() {
    musicdby.play();
}
var musicdby = new Audio('I am bad song writer.mp3')
function badSong() {
    musicdby.play();
}
var musicdby = new Audio('I am bad song writer.mp3')
function badSong() {
    musicdby.play();
}
/* experimental stuff */