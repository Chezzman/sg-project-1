# Sparta Global first project, Making a Game.

Here is a classic game made modern by Sheldon Cooper from big bang theory.
Rock, paper, scissors, lizard and Spock, because there wasn't enough for multiple people. This game is only against a bot for now with math.random function but will be getting another game mode soon.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine to play and change the code to your liking.

### Prerequisites and built with

To use the code you will need npm(node package manager) then bower on your local machine you can install using the following on terminal

```
$ brew install node
//if you have npm check the version with the following

$ node -v
//version 6.10.0 will do fine, but if this is not the case upgrade npm with-

$ brew update node

```
Now its time to install bower globally on your local machine.

```
$ npm install -g bower
//you can search the bower libraries with

$ bower search <What you want>
//but for this you'll only need Bootstrap and jquery, and for this

$ bower install jquery
$ bower install bootstrap

```
The project is connected to both of these directories in the path of -
bower_components/bootstrap/dist/css/bootstrap.min.css
bower_components/bootstrap/dist/js/bootstrap.min.js
bower_components/jquery/dist/jquery.min.js

from this you can customise the html using Bootstrap's easy class system and built in functionality, id suggest using -
http://getbootstrap.com/components/ as a reference point.

Jquery allows you to simplify Javascript and has more usability.



## What I am planning on adding/Changing

* Arms animation to demonstrate a real game, that will be triggered when item was selected.

* 3 second countdown after player's choice. This is both setTimeOut to delay the computers response, but this is made obsolete if there is animation. mainly though a visual countdown on the top after a item has been selected.

* Player vs  player mode

* Changeable score system. Best to 5 or best to 10, all the same, input how much you and your friends think is necessary!

* Sheldon voice response, this is the only sound that will match the game and would be a perfect match.


## Acknowledgments

* Sheldon Cooper for inventing such a game

* Matt and Niall for giving me the tools to cut down on useless code and have taught me simplified versions of Jquery to cut time and potential errors
