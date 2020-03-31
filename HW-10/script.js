
class Box{
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
}
//blue
let box1 = new Box(400, 500, 200, 200, "rgb(20, 74, 88)");
//green
let box2 = new Box(100, 100, 300, 300, "rgb(155, 159, 92)");
//orange
let box3 = new Box(700, 200, 50, 50, "rgb(158, 65, 34)");


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ctx2 = canvas.getContext("2d");
var ctx3 = canvas.getContext("2d");


setInterval(update, 1000/60);
drawSquare();

function update()
{
    box2.x -= 5;
    if (box2.x <= 0 || box2.x >= 750) {
        box2.x *= -5;
    }

    box2.y -= 20;
    if (box2.y <= 0 || box2.y >= 750) {
        box2.y *= -20;
    }

    drawSquare();
}

function update()
{
  box3.x -= 15;
  if (box3.x <= 0 || box3.x >= 750) {
      box3.x *= -15;
  }

  box3.y += 15;
  if (box3.y <= 0 || box3.y >= 750) {
      box3.y *= +15;
  }
  drawSquare();
}
function drawSquare()
{
    ctx.clearRect(0,0,1000,1000);
    ctx.fillStyle = box1.color;
    ctx.fillRect(box1.x, box1.y, box1.width, box1.height);
    ctx2.fillStyle = box2.color;
    ctx2.fillRect(box2.x, box2.y, box2.width, box2.height);
    ctx3.fillStyle = box3.color;
    ctx3.fillRect(box3.x, box3.y, box3.width, box3.height);
}

$(document).ready(function(){
    $(this).keypress(function(event){
        getKey(event);
    });
});

function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualThing = String.fromCharCode(char);
    if(actualThing == "w")
        {
            moveUp();
        }
    else if(actualThing == "a")
        {
            moveLeft();
        }
    else if(actualThing == "d")
        {
            moveRight();
        }
    else if(actualThing == "s")
        {
            moveDown();
        }
  drawSquare();
    }

    function moveUp()
        {
            box1.y -= 25;
        }
    function moveLeft()
        {
            box1.x -= 25;
        }
    function moveRight()
        {
            box1.x += 25;
        }
    function moveDown()
        {
            box1.y += 25;
        }

        function hasCollided(box1, box2)
        {
    return !(
        ((box1.y + box1.height) < (box2.y)) ||
        (box1.y > (box2.y + box2.height)) ||
        ((box1.x + box1.width) < box2.x) ||
        (box1.x > (box2.x + box2.width))
    );
}
