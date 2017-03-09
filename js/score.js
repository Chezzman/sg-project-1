$(document).ready(function() {
  var winners = {
    player: 0,
    computer: 0
  };

//adding text and score repsonse in to html
  function updateScores(result) {
    $('#decision').html(result);
    $('.playerScore').html(winners.player);
    $('.computerScore').html(winners.computer);

  }

  // returns name and not keyCode
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


//comparing rules for the game
  function compare(playerGuess, computerGuess) {
    //player with rock
    if(playerGuess === 'rock') {
      if(computerGuess  === 'rock') {
        return 'Tie';
      } else if (computerGuess === 'paper') {
        winners.computer++;
        return 'YOU LOSE - Paper covers the rock' ;
      } else if (computerGuess === 'scissors') {
        winners.player++;
        return 'YOU WIN - Dwayne Johnson crushes scissors';
      } else if (computerGuess === 'lizard') {
        winners.player++;
        return 'YOU WIN - Rock bludgeons the lizard, The rock will be cooking lizard tonight!';
      } else if (computerGuess === 'spock'){
        winners.computer++;
        return 'YOU LOSE - Spock vaporizes the rock ';
      }
  //Player with paper ____________________
    } else if (playerGuess === 'paper') {
      if(computerGuess === 'paper') {
        return 'Tie';
      } else if (computerGuess === 'rock') {
        winners.player++;
        return 'YOU WIN - Paper covers their rock!';
      } else if (computerGuess === 'scissors') {
        winners.computer++;
        return 'YOU LOSE - Scissors cut your paper';
      } else if (computerGuess === 'lizard') {
        winners.computer++;
        return 'YOU LOSE - Lizard eats ya paper';
      } else if (computerGuess === 'spock') {
        winners.player++;
        return 'YOU WIN - Paper disproves spock!';
      }
  //Player with scissors______________________
    } else if (playerGuess === 'scissors') {
      if(computerGuess === 'scissors') {
        return 'Tie';
      } else if (computerGuess === 'rock') {
        winners.computer++;
        return 'YOU LOSE - Dwayne sat on your scissors';
      } else if (computerGuess === 'paper') {
        winners.player++;
        return 'YOU WIN - Scissors cut their paper';
      } else if (computerGuess === 'lizard') {
        winners.player++;
        return 'YOU WIN - Scissors decapitates their lizard';
      } else if (computerGuess === 'spock') {
        winners.computer++;
        return 'YOU LOSE - Spock analyses and destroys your scissors';
      }

  //Player with Lizard ________________________
    } else if (playerGuess === 'lizard') {

      if(computerGuess === 'lizard') {
        return 'Tie';
      } else if (computerGuess === 'rock') {
        winners.computer++;
        return 'YOU LOSE - Rock bludgeons your poor lizard';
      } else if (computerGuess === 'scissors') {
        winners.computer++;
        return 'YOU LOSE - Your Lizard is allergic to the blade of their scissors.';
      } else if (computerGuess === 'paper') {
        winners.player++;
        return 'YOU WIN - Lizard nibbles their paper!';
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
        return 'YOU LOSE - Lizard poisons Spock';
      }else if (computerGuess === 'paper') {
        winners.computer++;
        return 'YOU LOSE - Their paper disparoves spock';
      }

  //Unknown safty ________________________
    }else {
      return 'That key doesn\'t make any sense!';
    }

  }
  //button Press object for player
  var keyMap = {
    '81': 'scissors',
    '87': 'rock',
    '69': 'paper',
    '82': 'lizard',
    '84': 'spock'
  };
  //image object for choices made
  var images = {
    'scissors': 'http://www.thetherapystore.com.au/wp-content/uploads/2015/10/AL428W.jpg',
    'rock': 'http://shop.wwe.com/on/demandware.static/-/Sites/default/dw29757933/images/slot/landing/superstar-landing/Superstar-Category_Superstar_562x408_theRock.png',
    'paper': 'http://www.weatherwriter.co.uk/media/ecom/prodlg2/loose-line-paper.jpg',
    'lizard': 'http://www.factzoo.com/sites/all/img/reptiles/lizards/frilled-lizard-yellow-brown.jpg',
    'spock': 'http://www.flopturnriver.com/blogs/wp-content/uploads/Full-Metal-Havok-More-Sexy-N-Intelligent-Than-Spock-And-All-The-Superheroes-Combined-With-Frostnova.jpg'
  };

  //Divs on page for image change
  var $playerImg = $('#playerAttack');
  var $computerImg = $('#computerAttack');

  $(document).keydown(function(e){
    var playedChar;
    var playerChoice = keyMap[e.which];
    playedChar = images[playerChoice];
    setImage($playerImg, playedChar);
    // set player image



    var botChoice = computerChoice();
    playedChar = images[botChoice];
    setImage($computerImg, playedChar);
    // set computer image


    var result = compare(playerChoice, botChoice);

    updateScores(result);


  });

  //function to call image choice and place in img tag
  function setImage($target, choice){
    $target[0].src = choice;
  }





});
