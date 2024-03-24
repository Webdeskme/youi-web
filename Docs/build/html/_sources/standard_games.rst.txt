Standard Games
==============

* Standard Games take advantage of the YOUi game system more so then any other game type.
* These games are played on the primary screen and use the YOUi controller for player input.
* These games can be made with custom or improvised code or with a game engine like phaser.io
* File Based Games are a simplified version of standard games that also use the YOUi controller
* You can also buld Standard YOUi games with some of our dev tools surch as "The board game builder", "The Platform Buider", "The side scroll Shooter Builder", "And the Top Down Adventure builder"

The controls
-------------
* To use the controller in your game you will need to listen for certain variable changes.
* When a button is pressed it variable will change from being equal to zero to being equal to one.
* The controller can take multiple inputs at the same time as long as the players device allows for that.
* Here is a list of the veriable set to there not pressed state. 

.. code-block:: javascript
  :linenos:

  //p1
  em_av = 0; // play button
  em_bv = 0; // forward button
  em_xv = 0; // rewind button
  em_yv = 0; // pause button
  em_rightv = 0; // right arrow button
  em_leftv = 0; // left arrow button
  em_upv = 0;  // up arrow button
  em_downv = 0;  // down arrow button
  //p2
  em_av2 = 0;
  em_bv2 = 0;
  em_xv2 = 0;
  em_yv2 = 0;
  em_rightv2 = 0;
  em_leftv2 = 0;
  em_upv2 = 0;
  em_downv2 = 0;
  //p3
  em_av3 = 0;
  em_bv3 = 0;
  em_xv3 = 0;
  em_yv3 = 0;
  em_rightv3 = 0;
  em_leftv3 = 0;
  em_upv3 = 0;
  em_downv3 = 0;
  //p4
  em_av4 = 0;
  em_bv4 = 0;
  em_xv4 = 0;
  em_yv4 = 0;
  em_rightv4 = 0;
  em_leftv4 = 0;
  em_upv4 = 0;
  em_downv4 = 0;
  //p5
  em_av5 = 0;
  em_bv5 = 0;
  em_xv5 = 0;
  em_yv5 = 0;
  em_rightv5 = 0;
  em_leftv5 = 0;
  em_upv5 = 0;
  em_downv5 = 0;
  //p6
  em_av6 = 0;
  em_bv6 = 0;
  em_xv6 = 0;
  em_yv6 = 0;
  em_rightv6 = 0;
  em_leftv6 = 0;
  em_upv6 = 0;
  em_downv6 = 0;
  //the rest
  em_selectv = 0;  // select button (usually used as a back to the previus page button)
  em_startv = 0;  // start button
  em_homev = 0;  // home button (used to get the player back to the home screen)
  em_lbv = 0;  // In the top right. To the right of the puzzle button. The left arrow usually used for volume down
  em_rbv = 0;  // right arrow in the top right usually used for volume up
  em_powerv = 0;  // power button (usually used to resset the screen or the game)

* If you click the YOUi logo on the top of the contrller it will open chat.
* If you click the dice at the top middle they will roll
* the dice to the right of the word player will indicate what controller number the player has
* If you click the word "Player" in the top right it will open up the help menu and documentation
* If you click the words "Magic Spell" in the buttom middle it will open a text box for players to type. This works in the same way as the bar code scanner but with words

Magic Spells
------------
* You can refer to a file name you want the player to have the option to go to
* Players can type the file name in the "Magic Spell" sectionof there controller and it will take them to that file

Chat
----
* Chat can be reached by pressing the YOUi logo
* There are two inputs given in the chat. The first is the group. Because the chat will be used in games you wil not want everyone in the same chat. Come up with a group secret code and type it in. Participents can see every chat posted after they have logged in.
* The second input is were you type you mesage

Socket.io
----------
* Socket.io is installed on the YOUi system and can be used for local online multiplayer as well as for giving sertain comainds to your game
* If you include the javascript files listed below in "YOUi Integration" You can use the 18 sockets opened up for you for your game by the YOUi system
* These sockets are general purpose and can be used at your own discretion or not at all.
* There are 6 sockets for each player to talk to the primary screen. These are: loc_screen1, loc_screen2, loc_screen3, loc_screen4, loc_screen5, loc_screen6
* There are 6 sockets to call to all players, but not the screen. These are loc1, loc2, loc3, loc4, loc5, loc6
* There are 6 socket to call each player indiviually. loc_p1 calls player1, loc_p2, calls player 2, loc_p3 calls player 3, loc_p4 calls player 4, loc_p5 calls player 5, loc_p6 calls player 6
* Each player is assined their own socket group when they connect there controller if they have connected there controller properly before fallowing the url to your game
* Calling a local socket looks like this: ``socket.emit('loc1', 'Something_happend!');``
* Session or local storage can be used for your game or game saves if you want to save to the users device.
* Saving will not work on the main file system however because the it is set to read only and no changes are perminet

YOUi Integration
-----------------
* Using socket.io and the tin function ``socket.emit('tin', [filename, 'card']);`` you can change what the player sees on the main screen while they are playing your game. This can greatly anhance >
* ``Filename`` would be changed to the filename on you ame card that you would wish to be displayed on the screen.
* These files need to be inclueded in all your html documents and in this order: ``<script src="/socket.io/socket.io.js"></script><script src="NoSleep.js"></sript><script src="emulsion.js"></script>``
* You also should include this script in your main js file:

.. code-block:: javascript
  :linenos:

  function em_tinv(msg){}
  // This code is use to capture magic spells from the players controller and will cause errors if it is not inclueded in your file.
  // It also can be used to recieve inputs from the bar code scanner built into the YOUi system

* Take advantage of the "File Based Games" files as small components of your custom project if they fit in. That can save you some development time and effort. 
