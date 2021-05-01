var form,player,game;
var playercount;
var gamestate=0;
var database;

function setup(){
    createCanvas(1000,1000)
    database=firebase.database();
    game=new Game();
    game.getstate();
    game.start();
}
function draw(){
    background("Green")
}