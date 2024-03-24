Direct Games
============

* Direct games are games that take place on the users controler (ie: phone, tablet, comupter) instead of the screen
* Direct games do not use YOUi's controler, but instead use the native inputs provided by the players devise 
* Direct games is a great way to use engines built for standard html games
* You can also setup your direct game to work with the main screen were the player uses there device as a custom controller. In this way you can make an even more emersive experince then a standard YOUi game.

Starting Script
---------------
* To start your game you must include a seprate index.html and index.js that does not inclued you game and looks something like this.

index.html

.. code-block::
  :linenos:

  <!DOCTYPE html>
  <html>
    <head>
      <title>Direct Connect</title>
      <script src="/socket.io/socket.io.js"></script>
    </head>
    <body>

      <h1>Direct Connect</h1>
      <p>To your player one controler</p>
      <h2>Your game will start in seconds</h2>
      <script src="index.js"></script>
    </body>
  </html>

index.js

.. code-block:: javascript
  :linenos:

  const socket = io();
  socket.emit('direct', '/path/to/game/index.html');
  setTimeout(function() {
    window.location.href = '/photo.html?title=game.jpg&sec=card';
    // The above code will display a photo you provide on the primary screen while the players play your game on their own devices
    // The title varable gives the file path to your games photo.
    // You can also add text on your photo by adding a txt file with the same filename as your photo
    // The photo can be a .png, .jpg, .jpeg, .gif
   }, 100);

* It is a good idea to add a QR code in the picture to be displayd on the primary screen so other players can play your game too
* Only the first player will be automatically directed to you game on their controller
* If the redirect fails it is a good idea to have a QR code to allow them to try again. 

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
* There are a few difrent ways to integrate your direct game with the rest of the YOUi system
* You can provide a link to allow the player to easily get back to their YOUi controller ``/control.html``
* Using socket.io and the tin function ``socket.emit('tin', [filename, 'card']);`` you can change what the player sees on the main screen while they are playing your game. This can greatly anhance your game and the players experience
* ``Filename`` would be changed to the filename on you ame card that you would wish to be displayed on the screen.
* In order to use the tin function, you must inclued all the scripts required in a standard game as seen in the "Standard Games" section
* These files whould inclued ``<script src="/socket.io/socket.io.js"></script><script src="NoSleep.js"></sript><script src="emulsion.js"></script>``
* You also should include this script in your main js file:
 
.. code-block:: javascript
  :linenos:

  function em_tinv(msg){}
  // This code is use to capture magic spells from the players controller and will cause errors if it is not inclueded in your file.
  // It also can be used to recieve inputs from the bar code scanner built into the YOUi system
