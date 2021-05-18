var canvas= new fabric.Canvas("myCanvas");

player_x= 10;
player_y= 10;

image_height= 30;
image_width= 30;

var player_object="";
var block_images="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object= Img;
        player_object.scaleToWidth(50);
        player_object.scaleToHeight(100);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_images= Img;
        block_images.scaleToWidth(image_width);
        block_images.scaleToHeight(image_height);
        block_images.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_images);
    });
}