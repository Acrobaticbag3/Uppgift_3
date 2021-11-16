var pressed = false;

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
    document.querySelector('.sneak-one').style.visibility = 'visible' // change the visibility of an element with the apropriate tag
    document.querySelector('.sneak-two').style.visibility = 'visible'
    document.querySelector('.sneak-three').style.visibility = 'visible'
    document.querySelector('.sneak-four').style.visibility = 'visible'
    document.querySelector('.sneak-five').style.visibility = 'visible'
    document.querySelector('.sneak-six').style.visibility = 'visible'
    document.querySelector('.sneak-seven').style.visibility = 'visible'
    document.querySelector('.sneak-eight').style.visibility = 'visible'

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

function revealone() { //This is to reveal and hide the Code on the final page.
    if(!pressed){
        document.getElementById("revealorhide").innerHTML = "Hide code"; // gets an elements id, than changes the html text to hide code
    }
    else{
       document.getElementById("revealorhide").innerHTML = "Show code";} // gets an elements id, than changes the html text to show code
    pressed = !pressed;
}

function revealtwo() { //This is to reveal and hide the Code on the final page.
    if(!pressed){
        document.getElementById("revealorhidetwo").innerHTML = "Hide code";
    }
    else{
       document.getElementById("revealorhidetwo").innerHTML = "Show code";}
    pressed = !pressed;
}

function revealthree() { //This is to reveal and hide the Code on the final page.
    if(!pressed){
        document.getElementById("revealorhidethree").innerHTML = "Hide code";
    }
    else{
       document.getElementById("revealorhidethree").innerHTML = "Show code";}
    pressed = !pressed;
}
/*document.querySelector("img").setAttribute("src", "images/first-project.png");*/
/*experimental stuff*/ 
let imgone = document.getElementById("imgone");
let revealorhide = document.getElementById("revealorhide");

function Change() {

    if (imgone.getAttribute('src') === "images./first-project.png") {
        imgone.setAttribute('src', "images./Taskcodeone.png");
    }
    else {
        imgone.setAttribute('src', "images./first-project.png");
    }
}

revealorhide.addEventListener("click", Change);

let imgtwo = document.getElementById("imgtwo");
let revealorhidetwo = document.getElementById("revealorhidetwo");

function Changetwo() {

    if (imgtwo.getAttribute('src') === "images./Uppgift2a.png") {
        imgtwo.setAttribute('src', "images./Taskcodetwo.png");
    }
    else {
        imgtwo.setAttribute('src', "images./Uppgift2a.png");
    }
}

revealorhidetwo.addEventListener("click", Changetwo);

let imgthree = document.getElementById("imgthree");
let revealorhidethree = document.getElementById("revealorhidethree");

function Changethree() {

    if (imgthree.getAttribute('src') === "images./Uppgift2b.png") {
        imgthree.setAttribute('src', "images./TaskcodetwoB.png");
    }
    else {
        imgthree.setAttribute('src', "images./Uppgift2b.png");
    }
}

revealorhidethree.addEventListener("click", Changethree);
/*experimental stuff*/ 