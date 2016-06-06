	var States = {};

// Loads all the necesasary assets before starting the game.
States.Boot = {
	// Loads the assets.
	preload: function(){
		this.game.load.image('dukeCollider', 'assets/images/characters/collider.png');
		this.game.load.image('blockH', 'assets/images/backgrounds/blockH.png');
		this.game.load.image('block', 'assets/images/backgrounds/block.png');
		this.game.load.spritesheet('duke', 'assets/images/characters/duke.png', 23, 43);
		this.game.load.spritesheet('underwaterDuke', 'assets/images/characters/underwaterDuke.png', 19, 43);
		this.game.load.spritesheet('boat', 'assets/images/characters/boat.png', 16, 19);
		this.game.load.spritesheet('deepWater', 'assets/images/tilesets/deepWater.png', 32, 32);
		this.game.load.image('invaderCollider','assets/images/characters/collider.png');
		this.game.load.image('invader', 'assets/images/characters/invader.png');
		this.game.load.image('bullet', 'assets/images/bullets/purple_ball.png');
		this.game.load.spritesheet('enemy', 'assets/images/characters/enemy1.png',32,32);
		this.game.load.spritesheet('energyEnemy', 'assets/images/characters/enemy2.png',64,80);
		this.game.load.spritesheet('energyBall', 'assets/images/attacks/energyBall.png',32,32);
		
		this.game.load.spritesheet('mina1', 'assets/images/characters/mina1.png',24,24);
		this.game.load.spritesheet('explotion', 'assets/images/attacks/explosion.png',64,64);

		this.game.load.image('map', 'assets/images/backgrounds/yourmommasmap.png');
		this.game.load.image('healthBar', 'assets/images/HUD/healthbar.png');
		this.game.load.image('lifeBar', 'assets/images/HUD/life.png');
		this.game.load.image('minimap','assets/images/backgrounds/minimap.png');

		//House Stage background
		this.game.load.image('houseStage', 'assets/images/backgrounds/homeStage.png');
		this.game.load.image('basement', 'assets/images/backgrounds/basement.png');

		
		this.game.load.audio('bossanova','assets/audio/bossanova.mp3');
		this.game.load.image('rain','assets/images/effects/rain.png');
		this.game.load.image('leaf','assets/images/effects/leaf.png');
		
		//this.game.load.spritesheet('coin','assets/images/items/coin.png');
		this.game.load.image('coin','assets/images/inventory/coin.png');
		this.game.load.image('key','assets/images/inventory/key.png');
		this.game.load.image('firstAid','assets/images/inventory/firstaid.png');
		this.game.load.image('inventory','assets/images/inventory/grid.png');
		this.game.load.image('npcs', 'assets/images/characters/npcs1.png');
		this.game.load.image('poster', 'assets/images/textBox/sign.png');
		//this.game.load.spritesheet('coin','assets/images/items/coin.png');
		this.game.load.spritesheet('textBox','assets/images/textBox/textBox.png', 600, 200);

		this.game.load.spritesheet('portal', 'assets/images/misc/portal.png', 123, 123);

		this.game.load.tilemap('boatMap','assets/tilemaps/boatMap.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.image('boatMapTS', 'assets/images/tilesets/boatMap.png');

		this.game.load.tilemap('underwater1','assets/tilemaps/underwater1.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.tilemap('underwater2','assets/tilemaps/underwater2.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.tilemap('underwater3','assets/tilemaps/underwater3.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.image('underwaterTS', 'assets/images/tilesets/underwater.png');

		this.game.load.tilemap('dock','assets/tilemaps/dock.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.image('dockTS', 'assets/images/tilesets/dock.png');

		for (var i=0; i<2; i++){
			var iStr = i.toString();
			//this.game.load.image('bullet'.concat(iStr),'assets/images/weapons/bullet/bullet'.concat(iStr.concat(".png")));
			this.game.load.image('weapon'.concat(iStr),'assets/images/weapons/weapon'.concat(iStr.concat(".png")));	
		}

		for (var i = 1; i <= 5; i++)
		{
		    this.game.load.image('bullet' + i, 'assets/images/weapons/bullet/bullet' + i + '.png');
		    //this.game.load.image('weapon' + i, 'assets/images/weapons/weapon' + i + ".png");	
		}


		this.game.load.image('bomb', 'assets/images/weapons/bomb.png');

		this.game.load.image('cloudsback', 'assets/images/backgrounds/cloudsbg1_corto.jpg');
		this.game.load.image('spearow', 'assets/images/characters/minspearow.png');		

	},
	// Starts the next state.
	create: function(){
		this.state.start('Play');
	}
};
