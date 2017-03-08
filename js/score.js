
var winners = {
  player: 0,
  computer: 0,
  tie: 0
};

$(document).keydown(function(e){
  if(e.which == 81){
    var result = compare('scissors', computerChoice());
    $('#decision').html(result);
  }
});

$(document).keydown(function(e){
  if(e.which == 87){
    var result = compare('rock', computerChoice());
    $('#decision').html(result);
  }
});

$(document).keydown(function(e){
  if(e.which == 69){
    var result = compare('paper', computerChoice());
    $('#decision').html(result);
  }
});

$(document).keydown(function(e){
  if(e.which == 82){
    var result = compare('lizard', computerChoice());
    $('#decision').html(result);
  }
});

$(document).keydown(function(e){
  if(e.which == 84){
    var result = compare('spock', computerChoice());
    $('#decision').html(result);
  }
});

var computerChoice = function() {
  var random = Math.random();
  if (random < 0.20) {
    return'rock';
  } else if(random < 0.40) {
    return 'paper';
  } else if(random < 0.60){
    return 'scissors';
  } else if(random < 0.80){
    return 'lizard';
  } else {
    return 'spock';
  }
};



var compare = function(playerGuess, computerGuess ) {
    // Get elements to update

//Player with rock________________
  if(playerGuess === 'rock') {

    if(computerGuess  === 'rock') {
      winners.tie++;
      console.log(winners.tie);
      return 'Tie';

    } else if (computerGuess  === 'paper') {
      winners.computer++;
      return 'YOU LOSE - Paper covers rock' ;

    } else if (computerGuess  === 'scissors') {
      winners.player++;
      return 'YOU WIN - Dwayne Johnson crushes scissors';


    } else if (computerGuess  === 'lizard') {
      winners.player++;
      return 'YOU WIN - Rock bludgeons the lizard, The rock will be cooking lizard tonight!';

    } else if (computerGuess  === 'spock'){
      winners.computer++;
      return 'YOU LOSE - Spock vaporizes player rock ';
    }
//Player with paper ____________________
  } else if (playerGuess=== 'paper') {

    if(computerGuess  === 'paper') {
      winners.player++;
      return 'Tie';
    } else if (computerGuess  === 'rock') {
      winners.player++;
      return 'YOU WIN - Paper covers rock!';
    } else if (computerGuess  === 'scissors') {
      winners.computer++;
      return 'YOU LOSE - Scissors cut paper';
    } else if (computerGuess  === 'lizard') {
      winners.computer++;
      return 'YOU LOSE - Lizard eats paper';
    } else if (computerGuess  === 'spock') {
      winners.player++;
      return 'YOU WIN - Paper covers rock!';
    }
//Player with scissors______________________
  } else if (playerGuess === 'scissors') {

    if(computerGuess  === 'scissors') {
      return 'Tie';
    } else if (computerGuess  === 'rock') {
      winners.computer++;
      return 'YOU LOSE - rock crushes scissors';
    } else if (computerGuess  === 'paper') {
      winners.player++;
      return 'YOU WIN - Scissors cut paper';
    } else if (computerGuess  === 'lizard') {
      winners.player++;
      return 'YOU WIN - scissors decapitates lizard';
    } else if (computerGuess  === 'spock') {
      winners.computer++;
      return 'YOU LOSE - Spock smashes scissors';
    }

//Player with Lizard ________________________
  } else if (playerGuess === 'lizard') {

    if(computerGuess  === 'lizard') {
      winners.tie++;
      return 'Tie';
    } else if (computerGuess  === 'rock') {
      winners.computer++;
      return 'YOU LOSE - Rock bludgeons lizard';
    } else if (computerGuess  === 'scissors') {
      winners.computer++;
      return 'YOU LOSE - Scissors dicapitates lizard.';
    } else if (computerGuess  === 'paper') {
      winners.player++;
      return 'YOU WIN - Lizard eats paper!';
    } else if (computerGuess  === 'spock') {
      winners.player++;
      return 'YOU WIN - Lizard poisons Spock!';
    }
//Player with Spock ________________________
  } else if (playerGuess=== 'spock') {

    if(computerGuess  === 'spock') {
      return 'Tie';
    } else if (computerGuess  === 'rock') {
      winners.player++;
      return 'YOU WIN - Spock vaporizes rock';

    } else if (computerGuess  === 'scissors') {
      winners.player++;
      return 'YOU WIN - Spock Smashes Scissors';

    } else if (computerGuess  === 'lizard') {
      winners.computer++;
      return 'YOU LOSE - Lizard poisons spock';

    }else if (computerGuess  === 'paper') {
      winners.computer++;
      return 'YOU LOSE - Paper disparoves spock';

    }

//Unknown key press ________________________
  }else {
    return 'That doesn\'t make any sense!';
  }
};

 // create score variable
function upDateScore(){

  $('#playerScore').value = winners.player.text;
  $('#computerScore').value = winners.computer.text;
}


console.log('score');

// function updateScores(result, points) {
//   if(result === 1) {
//     playerScore += points;
//   }
//   if(result === 'YOU LOSE') {
//     computerScore += points;
//   }
//   if(result === 0) {
//     computerScore += 0;
//     playerScore += 0;
//   }
// }

// function clearScores() {
//   playerScore = 0;
//   computerScore = 0;
// }


// playGame(3);
