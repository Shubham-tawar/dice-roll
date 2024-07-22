// changing image 1
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var newImage1 = "dice"+randomNumber1+".png"; // dice1.png , dice2.png etc
var newImage1Src = "images/"+newImage1;
document.querySelectorAll("img")[0].setAttribute("src",newImage1Src);
// changing image two
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var newImage2 = "dice"+randomNumber2+".png";
var newImage2Src = "images/"+newImage2;
document.querySelectorAll("img")[1].setAttribute("src",newImage2Src);

// winnig conditioins
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins🎊";
}
else if(randomNumber1< randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins🎊";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}