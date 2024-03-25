/*function screen(){
        alert('test');
		socket.emit('dtype', 'screen');
		window.location.href = '/screen.html'
}
function control(){
        alert('test');
		socket.emit('dtype', 'control');
		window.location.href = '/control.html'
}*/
/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({
	
});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {
	"Developers": {
		"Programer": "Adam W. Telford",
		"Artist": "Alex"
	}
});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	"normal": "playing-in-color-120336.mp3"
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	"door": "door-opening-and-closing-18398.mp3",
	"throat": "clearing-throat-94613.mp3",
	"sing": "disanfins-33882.mp3",
});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	"out": "log-cabin-7912444_1280.jpg",
	"in": "cozy-7666575_1280.jpg",
});


// Define the Characters
monogatari.characters ({
	's': {
		name: 'Sir Barnabas Howells',
		color: '#5bcaff',
		sprites: {
			normal: 'soldier.png',
			}
	},
	'y': {
		name: 'You',
		color: 'blue'
	},
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'y Where am I?',
		"play sound sing",
		'show scene out with fadeIn',
		's Lalalalala!',
        'stop sound sing',
		'y Umm Hello!',
        'show character s normal at left with fadeIn',
        'play sound throat',
		's Sorry I did not notice you there. How unprofessional of me. My apologies.',
		{
			'Choice': {
				'Dialog': 's How may I help you?',
				'play': {
					'Text': 'I want to play the game of the day.',
					'Do': 'jump screen'
				},
				'movie': {
					'Text': 'Would you watch a movie with me.',
					'Do': 'jump controller'
				},
				'about': {
					'Text': 'I am so confused!',
					'Do': 'jump about'
				},
			}
		}
	],

	'play': [
		's <a href="/games/pp/index.html" class="btn"">Of course! Your wish is my comand. Click here to go.</a><!--<button class="btn btn-lg btn-dark" onclick="screen()">Screen</button>-->',
	],

	'movie': [

		's <a href="https://ia804708.us.archive.org/35/items/CaminandesLlamigos/Caminandes_%20Llamigos-1080p.mp4" class="btn"">I am here to serve. Click here to go.</a><!--<button class="btn btn-lg btn-dark" onclick="control()">Controller</button>-->'
	],
	
	'about': [
        'play music normal with loop',
        's Confused?',
		{
			'Choice': {
				'Dialog': 's What are you confused about?',
				'screen': {
					'Text': 'Tell me about YOUi. What is it?',
					'Do': 'jump youi'
				},
				'controller': {
					'Text': 'How did I get here? What is this place?',
					'Do': 'jump land'
				},
				'about': {
					'Text': 'I want to know more about you.',
					'Do': 'jump Howells'
				}
			}
		},
		
	],
    'youi': [
        's Sure, but if we are going to have a longer conversation come inside and relax.'
    ],
    'land': [

    ],
    'Howells': [

    ]
});
