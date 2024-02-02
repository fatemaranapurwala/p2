var splashscreen_img;
var player_img, player;
var play_btn , abt_btn;
var bg_img;
var gameState = "wait";
function preload() {
    splashscreen_img = loadImage("assets/splashscreen.gif");
    player_img = loadImage("assets/player.png");
    bg_img = loadImage("assets/bg.jpg");

}

function setup() {
    createCanvas(800,800);
    play_btn = createImg("assets/play.png");
    play_btn.position(300,450);
    play_btn.size(80,80);
    play_btn.hide();

    abt_btn = createImg("assets/about.png");
    abt_btn.position(400,450);
    abt_btn.size(80,80);
    abt_btn.hide();

    player = createSprite(100,100);
    player.addImage(player_img);
    player.scale=0.3;
    player.visible = false;
}

function draw(){
    if(gameState == "wait"){
        background(splashscreen_img);
        play_btn.show();
        abt_btn.show();
    }
    play_btn.mousePressed( () => {
        abt_btn.hide();
        play_btn.hide();
        gameState = "level1";
    })
    abt_btn.mousePressed(()=> {
        abt_btn.hide();
        play_btn.hide();
        gameState="about";
    })

    if(gameState == "level1"){
        background(bg_img);
        player.visible = true;
        movement();
    }

    if(gameState == "about"){
        aboutGame();
    }

    drawSprites();
}

function aboutGame(){
    swal({
        title: "About this Game",
        text: "Survive in the airField by escaping from enemyAircrafts and ufo's",
        textAlign:"CENTER",
        imageUrl: "assets/splashScreen.gif",
        imageSize:"200x200",
        confirmButtonText:"Survive and win the Game",
        confirmButtonColor: "Red"
    },
    function(){
        gameState ="wait";
    }
    )
}

function movement(){

    if(player.y < 30){
        player.y = 30;
    }
    if(player.y > 700){
        player.y = 700;
    }
    if (keyDown("UP_ARROW")){
        player.y -=25;
    }
    if(keyDown("DOWN_ARROW")){
        player.y +=25;
    }
}