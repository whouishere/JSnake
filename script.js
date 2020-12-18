/*
* Main File
* (the game's rows creation + the main loop calling)
*/

var gameDiv = document.createElement('div');
gameDiv.id = 'game';
gameDiv.style.width = '50%';
gameDiv.style.margin = '0 auto';

for (var i = 0; i < mapWidth; i++) //row div creation loop
{
    var motherDiv = document.createElement('div');
    motherDiv.className = 'row';

    for (var j = 0; j < mapHeight; j++) //block div creation loop
    {
        var innerDiv = document.createElement('div');
        innerDiv.className = 'row block';

        motherDiv.appendChild(innerDiv);
    }

    gameDiv.appendChild(motherDiv);
}

document.body.appendChild(gameDiv);

var row = document.getElementsByClassName('row')[0];
var block = document.getElementsByClassName('block')[0];

gameLoop(); //the game loop calls itself