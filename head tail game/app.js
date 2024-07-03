var player1 = prompt("Enter Heads Name");
var player2 = prompt("Enter Tail Name");
var toss = Math.random()*2
var ch = Math.floor(toss)

//for adding color
var color = prompt("Enter the background color name")
document.body.style.background= color

if(ch==0){
    document.write(player1 + " " + "Heads Wins! Yahoooooo 🥰✨🎇😊")
}
else{
    document.write(player2  + "  " + "Tails Wins! Yahoooooo 🥰✨🎇😊")
}
