$(document).ready(function() {
  console.log( 'ready!' );

//Instructions popup______________________
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus();
  });

//Buttons For each attack that need to be changed into .keypress()________

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

  var compare = function(me, opponent) {
//Player with rock________________
    if(me === 'rock') {

      if(opponent === 'rock') {
        return 'Tie';
      } else if (opponent === 'paper') {
        return 'YOU LOSE - Paper covers rock';
      } else if (opponent === 'scissors') {
        return 'YOU WIN - Dwayne Johnson crushes scissors';
      } else if (opponent === 'lizard') {
        return 'YOU WIN - Rock bludgeons the lizard, The rock will be cooking lizard tonight!';
      } else if (opponent === 'spock'){
        return 'YOU LOSE - Spock vaporizes your rock ';
      }
//Player with paper ____________________
    } else if (me === 'paper') {

      if(opponent === 'paper') {
        return 'Tie';
      } else if (opponent === 'rock') {
        return 'YOU WIN - Paper covers rock!';
      } else if (opponent === 'scissors') {
        return 'YOU LOSE - Scissors cut paper';
      } else if (opponent === 'lizard') {
        return 'YOU LOSE - Lizard eats paper';
      } else if (opponent === 'spock') {
        return 'YOU WIN - Paper covers rock!';
      }
//Player with scissors______________________
    } else if (me === 'scissors') {

      if(opponent === 'scissors') {
        return 'Tie';
      } else if (opponent === 'rock') {
        return 'YOU LOSE - rock crushes scissors';
      } else if (opponent === 'paper') {
        return 'YOU WIN - Scissors cut paper';
      } else if (opponent === 'lizard') {
        return 'YOU WIN - scissors decapitates lizard';
      } else if (opponent === 'spock') {
        return 'YOU WIN - Spock smashes scissors';
      }
//Player with Lizard ________________________
    } else if (me === 'lizard') {

      if(opponent === 'lizard') {
        return 'Tie';
      } else if (opponent === 'rock') {
        return 'YOU LOSE - Rock bludgeons lizard';
      } else if (opponent === 'scissors') {
        return 'YOU LOSE - Scissors dicapitates lizard.';
      } else if (opponent === 'paper') {
        return 'YOU WIN - Lizard eats paper!';
      } else if (opponent === 'spock') {
        return 'YOU WIN - Lizard poisons Spock!';
      }
//Player with Spock ________________________
    } else if (me === 'spock') {

      if(opponent === 'spock') {
        return 'Tie';
      } else if (opponent === 'rock') {
        return 'YOU WIN - Spock vaporizes rock';
      } else if (opponent === 'scissors') {
        return 'YOU WIN - Spock Smashes Scissors';
      } else if (opponent === 'lizard') {
        return 'YOU LOSE - Lizard poisons spock';
      }else if (opponent === 'paper') {
        return 'YOU LOSE - Paper disparoves spock';
//Unknown key press ________________________
      }else {
        return 'That doesn\'t make any sense!';
      }
    }
  };

// VS BOT RANDOM FUNCTION_____________________
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
});
