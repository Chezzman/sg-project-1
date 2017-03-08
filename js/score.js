$(document).ready(function() {
  var winners = {
    player: 0,
    computer: 0,
    tie: 0
  };

  function updateScores(result) {
    $('#decision').html(result);
    $('.playerScore').html(winners.player);
    $('.computerScore').html(winners.computer);
  }

  function computerChoice() {
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
  }

  function compare(playerGuess, computerGuess) {
    if(playerGuess === 'rock') {
      if(computerGuess  === 'rock') {
        winners.tie++;
        return 'Tie';
      } else if (computerGuess === 'paper') {
        winners.computer++;
        return 'YOU LOSE - Paper covers rock' ;
      } else if (computerGuess === 'scissors') {
        winners.player++;
        return 'YOU WIN - Dwayne Johnson crushes scissors';
      } else if (computerGuess === 'lizard') {
        winners.player++;
        return 'YOU WIN - Rock bludgeons the lizard, The rock will be cooking lizard tonight!';
      } else if (computerGuess === 'spock'){
        winners.computer++;
        return 'YOU LOSE - Spock vaporizes player rock ';
      }
  //Player with paper ____________________
    } else if (playerGuess === 'paper') {
      if(computerGuess === 'paper') {
        winners.player++;
        return 'Tie';
      } else if (computerGuess === 'rock') {
        winners.player++;
        return 'YOU WIN - Paper covers rock!';
      } else if (computerGuess === 'scissors') {
        winners.computer++;
        return 'YOU LOSE - Scissors cut paper';
      } else if (computerGuess === 'lizard') {
        winners.computer++;
        return 'YOU LOSE - Lizard eats paper';
      } else if (computerGuess === 'spock') {
        winners.player++;
        return 'YOU WIN - Paper covers rock!';
      }
  //Player with scissors______________________
    } else if (playerGuess === 'scissors') {
      if(computerGuess === 'scissors') {
        return 'Tie';
      } else if (computerGuess === 'rock') {
        winners.computer++;
        return 'YOU LOSE - rock crushes scissors';
      } else if (computerGuess === 'paper') {
        winners.player++;
        return 'YOU WIN - Scissors cut paper';
      } else if (computerGuess === 'lizard') {
        winners.player++;
        return 'YOU WIN - scissors decapitates lizard';
      } else if (computerGuess === 'spock') {
        winners.computer++;
        return 'YOU LOSE - Spock smashes scissors';
      }

  //Player with Lizard ________________________
    } else if (playerGuess === 'lizard') {

      if(computerGuess === 'lizard') {
        winners.tie++;
        return 'Tie';
      } else if (computerGuess === 'rock') {
        winners.computer++;
        return 'YOU LOSE - Rock bludgeons lizard';
      } else if (computerGuess === 'scissors') {
        winners.computer++;
        return 'YOU LOSE - Scissors dicapitates lizard.';
      } else if (computerGuess === 'paper') {
        winners.player++;
        return 'YOU WIN - Lizard eats paper!';
      } else if (computerGuess === 'spock') {
        winners.player++;
        return 'YOU WIN - Lizard poisons Spock!';
      }
  //Player with Spock ________________________
    } else if (playerGuess === 'spock') {
      if(computerGuess === 'spock') {
        return 'Tie';
      } else if (computerGuess === 'rock') {
        winners.player++;
        return 'YOU WIN - Spock vaporizes rock';
      } else if (computerGuess === 'scissors') {
        winners.player++;
        return 'YOU WIN - Spock Smashes Scissors';
      } else if (computerGuess === 'lizard') {
        winners.computer++;
        return 'YOU LOSE - Lizard poisons spock';
      }else if (computerGuess === 'paper') {
        winners.computer++;
        return 'YOU LOSE - Paper disparoves spock';
      }

  //Unknown safty ________________________
    }else {
      return 'That doesn\'t make any sense!';
    }
  }

  $(document).keydown(function(e){
    var keyMap = {
      '81': 'scissors',
      '87': 'rock',
      '69': 'paper',
      '82': 'lizard',
      '84': 'spock'
    };
    var playerChoice = keyMap[e.which];
    var result = compare(playerChoice, computerChoice());

    updateScores(result);
  });



});
