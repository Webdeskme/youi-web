File Based Games
================
File games are made by layering text files with pictures, music, and video. Layering is acomplished by giving each file the same name in adition to its correct extention. For example a music file can share the same name as a picture file and a text file. Like this: test.mp3, test.png, test.txt, test.choice. You can stringing together these files with choise, answer, or puzzle files will allow you to make a complete game. All files should be saved to an empty sd card. The game can be played by loading the sd card into the system while it is off and turning the system on. Then all you should have to do is connect one sontroller and the game should begin. If it does not make sure your first file that you want to show is called index.

Text File
---------
This is the simplist type of file.

* To create this file make the file name all lowercase
* The file name will be used by other docs in your game to refrence it.
* Players will also be able to jump to this page by typing the file name without the extention in the "magic spell" section of their controller 
* Have it end with the file extention .txt
* Text file can either be writen in plain text or html
* Text files can be used on there own or with any other file except video
* Displays in a white font over a black background
* If Displayed with a picture it will display in fron with a transparent black background in front of the picture.

Picture File
------------
* Pictures can have the extension of either .png, .jpeg, .jpg, .png
* Pictures can be blended with every file type but video
* Pictures will display at 100% width
* Text and music decorations will display in front of the picture if used with the picture.

Music File
----------
* Music only displays with the extentions of .mp3
* Music will display decritive bars that go with the music
* Music can be played with all files except video
* In the media player, after the file is done playing it will begin playing a random file in the same folder

Video File
----------
* Videos size is based on the videos resolution
* .mp4 is the only file extention excepted by the video file. 
* Video file are compatable with all other file types except pictures, music, and texts
* In the media player, after the file is done playing it will begin playing a random file in the same folder

HTML File
---------
* More indepth information on using HTML files can be found primarily in "Standard Games" section as well as the "Direct Games" section
* HTML cannot be paired with any other file. HTML files work like usual so they can be paired with javascript and CSS files
* HTML file must inclued the required javascript files in this order: ``<script src="/socket.io/socket.io.js"></script><script src="NoSleep.js"></script><script src="emulsion.js></script>"``
* The HTML file should also be paired with a javascript file with this code.
 
.. code-block:: javascript
  :linenos: 

  function em_tinv(msg){}
  // This code is use to capture magic spells from the players controller and will cause errors if it is not inclueded in your file.
  // It also can be used to recieve inputs from the bar code scanner built into the YOUi system


Choice File
-----------
* This file lets players choose A - D. Each option has the name of a file that players can move too.
* Each option is seperated by |
* Example: ``flower|run|head|grass``
* Option "A" on the controler of flower, "B" is run, "C" is head, and "D" if grass

Answer File
-----------
* This file allows you to ask a question with a correct answere
* The file extention is .answer 
* The files objects are seperated by |
* First object is the letter of the correct answer
* Second is the time in seconds the player has to answer the question 
* The third object is response to the players after time is up
* The fourth is the score the player will get if they get a correct answer
* The fith is the file name that the player will go to 15 seconds after the timer goes off 
* Example: ``c|30|The correct answer is Providence|5|trailer``
* The correct answere is c. The player has 30 seconds to answere. After time is up it it the screen reads "The correct answer is Providence". The player scores 5 points if they get the correct answer. 15 seconds after the timer is over the player will be moved to the trialer file. 

Puzzle File
-----------
* The file offers a puzzle mini game to your game
* The file extention is .puzzle
* Players will get the amount of time you specify to solve a puzzle. If they succeed they will go to one page, if they do not they will go to a diffrent page.
* Example: ``harvest.jpg|3|4|120|5|trailer|happy``
* Int the example above The picture they will be sulving is "harvest.jpg", The picture will be split into 3 rows and 4 columns. The player will have 120 seconds to complete the puzzle. If they win they will recieve 5 points and go on to file trailer. If they loose they do not recieve any points and go on to file happy.
* Each object in the file is seperated by |

Rand File
----------
* This file allows for a random word, number, or phrase to be displayed on the screen
* The file extention is .rand
* The objects are seprated by |
* Example: ``test|hungrey|silly|Bob|Emmy|Maadie|Adam``
* At random it will chose an object like Bob

Next File
---------
* The next file indicates ware the player will go at the end of a video or audio piece 
* The file extention is .next
* This file can only be used inconjunction with a video or music file
* This file contains only a single file name
* Example: ``trailer``
* In the example above at the end of the video the player will be taken to the trailer file

Magic Spells
------------
* You can refer to a file name you want the player to have the option to go to
* Players can type the file name in the "Magic Spell" sectionof there controller and it will take them to that file

The Index Files
---------------
* The index filename tells the system that this is the entry point of your game. 


NOW GO AND MAKE YOR GAME!
Also check out some of the great dev tools provided.
