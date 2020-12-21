/*
  I would remove the hardcoded divs from the html in the grid section
  and dynamically generate them in the initial state

   for example $('<div class="hole">)
   look up the data function in jQuery use the data function to store the current mole object
   and then draw the grid

  for renderState you would need to pick a random grid from the game state and set isUp to true or false 
  update the board and set the class based on if it's up 
*/

function buildInitialState() {
   //should happen 9 times

  
   
  $('.grid').append($('<div id=1 class="hole">'));
  $('.grid').append($('<div id=2 class="hole">'));
  $('.grid').append($('<div id=3 class="hole">'));
  $('.grid').append($('<div id=4 class="hole">'));
  $('.grid').append($('<div id=5 class="hole">'));
  $('.grid').append($('<div id=6 class="hole">'));
  $('.grid').append($('<div id=7 class="hole">'));
  $('.grid').append($('<div id=8 class="hole">'));
  $('.grid').append($('<div id=9 class="hole">'));
  
}

buildInitialState();

let gameState = {
  grid: [
     { 
      isCivilian: false,
      isUp: true,
     },
     { 
      isCivilian: true,
      isUp: true,
     },
     { 
      isCivilian: false,
      isUp: true,
     },
     { 
      isCivilian: true,
      isUp: true,
     },
     { 
      isCivilian: false,
      isUp: true,
     },
     { 
      isCivilian: false,
      isUp: true,
     },
     { 
      isCivilian: true,
      isUp: true,
     },
     { 
      isCivilian: false,
      isUp: true,
     },
     { 
      isCivilian: false,
      isUp: true,
     },
  ],
  
  points: 0,
}




function renderState() {
  // generate a random number and get the current state from the game state
  // use the same number to select the matching hole
  // i.e $(`#${number}`)
  let number = (Math.floor(Math.random() * gameState.grid.length)); //5
  const randomMole = gameState.grid[number]; //|| {}
  const hole = $(`#${number}`); //this assigns the mole to the hole

    
    if (randomMole.isUp === true) {
      hole.addClass('.mole');
    } else { 
      hole === null;
    }
  }

   //$(`#${number}`).data("moleObject");

renderState();


// function startGameClick() {
//   $('.controls button').click(function() {
//      return renderState;
//   }
// }



// startGameClick();
