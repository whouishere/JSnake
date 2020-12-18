/*
*   Declarations of funtions and variables
*/

const mapWidth = 8;
const mapHeight = 8;

const up = 1;
const down = 2;
const left = 3;
const right = 4;

var score = 0;
var appleX = 5, appleY = 5; //apple positions variables
var snakeX = [2], snakeY = [2]; //snake position variables
var snakeDir;

function eatApple()
{
    //checks if current snake position is the same as the apple
    if (snakeX == appleX && snakeY == appleY){
        //then it picks a random position for the next apple
        appleX = Math.floor(Math.random() * 8);
        appleY = Math.floor(Math.random() * 8);
    }
}

//handles the snake movement, updating the snake position
function gameMovement()
{
    if (snakeX == -1 && snakeDir == left)
        snakeX = mapWidth;

    if (snakeX == mapWidth - 1 && snakeDir == right)
        snakeX = -1;

    if (snakeY == mapHeight - 1 && snakeDir == down)
        snakeY = -1;

    if (snakeY == -1 && snakeDir == up)
        snakeY = mapHeight;

    switch (snakeDir)
    {
        case up:
            snakeY--;
            break;

        case down:
            snakeY++;
            break;

        case left:
            snakeX--;
            break;

        case right:
            snakeX++;
            break;
    }
}

//handles keyboard input
function gameControls()
{
    window.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) {
          return;
        }
      
        switch (event.key)
        {
            case "ArrowUp":
                snakeDir = up;
                break;

            case "ArrowDown":
                snakeDir = down;
                break;

            case "ArrowLeft":
                snakeDir = left;
                break;

            case "ArrowRight":
                snakeDir = right;
                break;
        }

        event.preventDefault();
      }, true);
}

function gameLoop()
{
    for (var y = 0, blockDiv = 0; y < mapWidth; y++) //checks each mapGrid position and the block div which the mapGrid position is
    {
        for (var x = 0; x < mapHeight; x++, blockDiv++) //checks each mapGrid position and the block div which the mapGrid position is
        {
            //if the snake position is the same as the local x and y var, consider that block as the snake
            if (snakeX == x && snakeY == y)
                document.getElementsByClassName('row block')[blockDiv].className = 'row block snake';

            //if the apple position is the same as the local x ad y var, consider that block as an apple
            else if (appleX == x && appleY == y)
                document.getElementsByClassName('row block')[blockDiv].className = 'row block apple';

            //else consider the block as empty
            else
                document.getElementsByClassName('row block')[blockDiv].className = 'row block empty';
        }
    }

    eatApple();
    gameMovement();
    gameControls();

    setTimeout(gameLoop, 150); //calls the gameLoop function within 150 miliseconds
}