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
		body: 'To WebDesk.me',
		icon: 'favicon.ico'
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
	"normal": "playing-in-color-120336.mp3",
	"in": "sinnesloschen-beam.mp3"
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	"door": "door-opening-and-closing-18398.mp3",
	"throat": "clearing-throat-94613.mp3",
	"sing": "disanfins-33882.mp3",
	"rain": "rain-and-thunder.mp3",
	"hmm": "hmmmm.mp3",
	"ohemm": "onehmm.mp3"
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
			right: 'soldier2.png',
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
		'jump start2'
	],
	"start2": [
		{
			'Choice': {
				'Dialog': 's How may I help you?',
				'play': {
					'Text': 'I want to play the game of the day.',
					'Do': 'jump play'
				},
				'movie': {
					'Text': 'Would you watch a something with me.',
					'Do': 'jump stream'
				},
				'about': {
					'Text': 'I am so confused!',
					'Do': 'jump about'
				},
			}
		}
	],

	'play': [
		's <a href="/game.html" class="btn"">Of course! Your wish is my comand. Click here to go.</a><!--<button class="btn btn-lg btn-dark" onclick="screen()">Screen</button>-->',
	],

	'stream': [

		's <a href="/stream.html" class="btn"">I am here to serve. Click here to go.</a><!--<button class="btn btn-lg btn-dark" onclick="control()">Controller</button>-->'
	],
	
	'about': [
        'play music normal with loop',
        's Confused?',
		{
			'Choice': {
				'Dialog': 's What are you confused about?',
				'youi': {
					'Text': 'Tell me about YOUi. What is it?',
					'Do': 'jump youi'
				},
				'land': {
					'Text': 'How did I get here? What is this place?',
					'Do': 'jump land'
				},
				'howells': {
					'Text': 'I want to know more about you.',
					'Do': 'jump Howells'
				}
			}
		},
		
	],
    'youi': [
		//'stop music normal',
		'play sound rain',
        's Sure, but lets get inside. It is starting to rain.',
        'show scene in with fadeIn',
        'show character s right at right with fadeIn',
        //'play music in with loop',
        's Have a seat. It is so nice to have someone sit down and take an intrest.',
        's Here dry off by the fire.',
        'y Thank you!',
        'jump youi2'
        ],
      'youi2': [
        's So you want to know what YOUi is hmm?',
        'play sound hmm',
        's Well YOUi is the magical portal you went through to get here.',
        's I am its gate keeper',
        's You seem like a really nice person, so anytime you want to visit you just come through the portal and I will direct you were you want to go.',
        'y That is very kind.',
        {
			'Choice': {
				'Dialog': 's I think in time you will call this land your home.',
				'explore1': {
					'Text': 'I am ready to explore.',
					'Do': 'jump start2'
				},
				'land1': {
					'Text': 'What is this place?',
					'Do': 'jump land2'
				},
				'howells1': {
					'Text': 'I want to know more about you.',
					'Do': 'jump Howells2'
				}
			}
		},
    ],
    'land': [
		//'stop music normal',
		'play sound rain',
		's Sure, but lets get inside. It is starting to rain.',
		'show scene in with fadeIn',
		'show character s right at right with fadeIn',
		//'play music in with loop',
		's Have a seat. It is so nice to have someone sit down and take an intrest.',
		's Here dry off by the fire.',
        'y Thank you!',
        'jump land2'
    ],
    "land2": [
		's You are now at the boarder of Wonderland and Maybeland.',
		'y Which side of the boarder am I on?',
		's This is Maybeland and you have just entered the kingdom of the Inkaboohs overlooking the great root beer ocean.',
		'y Inkaboohs? Who are they?',
		's It is said that the first Inkabooh was one of the Queen of Hearts card soldiers.',
		'play sound hmm',
		's He was diffrent fron the rest.',
		'y How was he diffrent?',
		's He had know suit or value, just an inksplotch on his belly.',
		's The queen hated him and sentenced him to be beheaded, but Inkabooh ran away to the great Dice Tower', 
		's The Queen tryied to get to him but the citeizens of Dice Town defended him.',
		's Inkabooh descoverd that he was actually not a real card guard at all, but came from a diffrent race of cards call the Senary',
		'y Did Inkabooh go back to live with his own people?',
		"s He tried, but could never feel at home so the king of the Great Dice Tower gave him this land to be a place to build a kingdom for cards that just don't fit in. They call themselves blaughters.",
		'y And this land was named after Inkabooh?',
		's Exactly! Inkabooh became king Blatoter the first.',
		{
			'Choice': {
				'Dialog': 'y Thank you for inviting me in.',
				'explore2': {
					'Text': 'I am ready to explore.',
					'Do': 'jump start2'
				},
				'land2': {
					'Text': 'Tell me, what is YOUi?',
					'Do': 'jump youi2'
				},
				'howells2': {
					'Text': 'I want to know more about you.',
					'Do': 'jump Howells2'
				}
			}
		},
		
    ],
    'Howells': [
		//'stop music nrmal',
		'play sound rain',
		's Sure, but lets get inside. It is starting to rain.',
		'show scene in with fadeIn',
		'show character s right at right with fadeIn',
		//'play music in with loop',
		's Have a seat. It is so nice to have someone sit down and take an intrest.',
		's Here dry off by the fire.',
        'y Thank you!',
        'jump Howells2'
    ],
    "Howells2": [
		's So you want to know who I am?',
		'y Yes!',
		'play sound hmm',
		's I am the gate keeper.',
		's I decide who is allowed into this great land.',
		'y Decide?',
		"s Well yes. There are enough unsavory creatures in this land. We don't want to let in just anyone. We only want people and creatures who will add value to our comunities.",
		'y How did you get this job?',
		's King Blater the second asked me too. He thinks I am a good judge of carecter and I did not argue with his so he did not think he was a bad judge of charecter.',
		{
			'Choice': {
				'Dialog': 'y Thank you for telling me a little about you.',
				'explore3': {
					'Text': 'I am ready to explore.',
					'Do': 'jump start2'
				},
				'land3': {
					'Text': 'What is this place?',
					'Do': 'jump land2'
				},
				'howells3': {
					'Text': 'I want to know more about you.',
					'Do': 'jump Howells2'
				}
			}
		},
	]
});
