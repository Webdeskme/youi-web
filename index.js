var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scale: {
            // Fit to window
            mode: Phaser.Scale.FIT,
            // Center vertically and horizontally
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var stars;
var bombs;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;
var left = 0;
var right = 0;
var mu = "yes";
var high = 0;
var game = new Phaser.Game(config);

if (localStorage.high) {
  high = Number(localStorage.high);
} else {
  localStorage.high = 0;
}

//new PluginManager(game)
function preload ()
{
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    this.load.audio("music", "assets/tropical-summer-music-112842.mp3");
	this.load.audio("mstar", "assets/collectcoin.mp3");
	this.load.image('ra', 'assets/ra.png');
	this.load.image('la', 'assets/la.png');
	this.load.image('ab', 'assets/ab.png');
	this.load.image('play', 'assets/play.png');
	this.load.image('about', 'assets/about.png');
	this.load.image('support', 'assets/support.png');
	this.load.image('games', 'assets/games.png');
	this.load.image('privacy', 'assets/privacy.png');
	this.load.image('terms', 'assets/terms.png');
	this.load.image('disclaimer', 'assets/disclaimer.png');
	this.load.image('play', 'assets/play.png');
	this.load.image('games', 'assets/games.png');
	this.load.image('terminal', 'assets/terminal.jpg');
	this.load.image('events', 'assets/events.png');
	this.load.image('store', 'assets/store.png');
    //this.load.plugin('DialogModalPlugin', './dialog_plugin.js', true);
    //this.plugins.install('DialogModalPlugin', './dialog_plugin.js');
}

function create ()
{
	game.input.addPointer();
    game.input.addPointer();
    //  A simple background for our game
    this.add.image(400, 300, 'sky');
    music = this.sound.add("music", { loop: true });
	//music.on('volume', listener);
	
	mstar = this.sound.add("mstar", { loop: false });

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = this.physics.add.staticGroup();

    //  Here we create the ground.
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    //  Now let's create some ledges
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    // The player and its settings
    player = this.physics.add.sprite(100, 450, 'dude');

    //  Player physics properties. Give the little guy a slight bounce.
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    //  Our player animations, turning, walking left and walking right.
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();

    //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
    stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    stars.children.iterate(function (child) {

        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    bombs = this.physics.add.group();

    //  The score
    scoreText = this.add.text(16, 16, 'Score:0', { fontSize: '32px', fill: '#000' });
    highText = this.add.text(225, 16, 'High:' + high, { fontSize: '32px', fill: '#000' });
	this.add.text(450, 16, 'Welcome to WebDesk', { fontSize: '32px', fill: '#000' });
    //  Collide the player and the stars with the platforms
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(stars, platforms);
    this.physics.add.collider(bombs, platforms);

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    this.physics.add.overlap(player, stars, collectStar, null, this);

    this.physics.add.collider(player, bombs, hitBomb, null, this);
    
    //this.sys.install('DialogModalPlugin');
	//console.log(this.sys.dialogModal);
	//let plugin = this.plugins.get('DialogModalPlugin');
	//console.log(plugin);
	ra = this.add.image(50, 570, 'ra').setScale(0.2);
    la = this.add.image(150, 570, 'la').setScale(0.2);
    ab = this.add.image(750, 570, 'ab').setScale(0.15);
    terminal = this.add.image(660, 570, 'terminal').setScale(0.1);
    terminal.on('pointerdown', () => {
		window.location.href = "terminal.html";
	});
    terminal.setInteractive({ useHandCursor: true  } );
    //privacy = this.add.image(300, 570, 'privacy').setScale(0.5);
    //terms = this.add.image(410, 570, 'terms').setScale(0.5);
    //disclaimer = this.add.image(550, 570, 'disclaimer').setScale(0.5);
    privacy = this.add.image(300, 585, 'privacy').setScale(0.5);
    terms = this.add.image(410, 585, 'terms').setScale(0.5);
    disclaimer = this.add.image(550, 585, 'disclaimer').setScale(0.5);
    events = this.add.image(350, 550, 'events').setScale(0.5);
    terms = this.add.image(500, 550, 'store').setScale(0.5);
    ra.setInteractive({ useHandCursor: true  } );
	la.setInteractive({ useHandCursor: true  } );
	ab.setInteractive({ useHandCursor: true  } );
	privacy.setInteractive({ useHandCursor: true  } );
	terms.setInteractive({ useHandCursor: true  } );
	disclaimer.setInteractive({ useHandCursor: true  } );
	events.setInteractive({ useHandCursor: true  } );
	store.setInteractive({ useHandCursor: true  } );
	privacy.on('pointerdown', () => {
		window.location.href = "privacy.html";
	});
	terms.on('pointerdown', () => {
		window.location.href = "terms.html";
	});
	disclaimer.on('pointerdown', () => {
		window.location.href = "disclamer.html";
	});
	about = this.physics.add.image(120, 300, 'about').setScale(1);
	about.body.allowGravity = false;
	about.setInteractive({ useHandCursor: true  } );
	this.physics.add.overlap(player, about, cabout, null, this);
	about.on('pointerdown', () => {
		window.location.href = "about.html";
	});
	play = this.physics.add.image(700, 275, 'play').setScale(1);
	play.body.allowGravity = false;
	play.setInteractive({ useHandCursor: true  } );
	this.physics.add.overlap(player, play, cplay, null, this);
	play.on('pointerdown', () => {
		window.location.href = "control/index.html";
	});
    games = this.physics.add.image(600, 450, 'games').setScale(1);
    games.body.allowGravity = false;
    games.setInteractive({ useHandCursor: true  } );
    this.physics.add.overlap(player, games, cgames, null, this);
    games.on('pointerdown', () => {
		window.location.href = "blog/output/index.html";
	});
	ra.on('pointerdown', () => {
		left = 1;
		console.log('left');
	});
	ra.on('pointerup', () => {
		left = 0;
	});
	la.on('pointerdown', () => {
		right = 1;
	});
	la.on('pointerup', () => {
		right = 0;
	});
}

function update ()
{
    if (gameOver)
    {
        return;
    }

	if(left == 1){
		console.log('left: ' + left);
		player.setVelocityX(-160);

        player.anims.play('left', true);
        if(mu == "yes"){
			mu = "no";
			music.play();
		}
	}
	else if(right == 1){
		player.setVelocityX(160);

        player.anims.play('right', true);
        if(mu == "yes"){
			mu = "no";
			music.play();
		}
	}
    else if (cursors.left.isDown)
    {
        player.setVelocityX(-160);

        player.anims.play('left', true);
        if(mu == "yes"){
			mu = "no";
			music.play();
		}
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('right', true);
        if(mu == "yes"){
			mu = "no";
			music.play();
		}
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
        if(mu == "yes"){
			mu = "no";
			music.play();
		}
    }
    ab.on('pointerdown', () => {
		if (player.body.touching.down){
			player.setVelocityY(-330);
			if(mu == "yes"){
			mu = "no";
			music.play();
		}
		}
	});
}

function collectStar (player, star)
{
	mstar.play();
    star.disableBody(true, true);

    //  Add and update the score
    score += 10;
    scoreText.setText('Score: ' + score);
	if(score > high){
		high = score;
		localStorage.setItem("high", high);
		highText.setText('High: ' + high);
	}
    if (stars.countActive(true) === 0)
    {
        //  A new batch of stars to collect
        stars.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;

    }
}

function hitBomb (player, bomb)
{
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    gameOver = true;
    
    window.location.reload();
}

function cabout (player, about)
{	
	about.disableBody(true, true);
    window.location.href = "about.html";
}
function cplay (player, play)
{	
	play.disableBody(true, true);
    window.location.href = "control/index.html";
}
function cgames (player, games)
{	
	games.disableBody(true, true);
    window.location.href = "blog/output/index.html";
}
