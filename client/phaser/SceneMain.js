import Phaser from 'phaser';

import logoImg from '../assets/logo.png';
import sprBg0 from '../assets/sprBg0.png';
import sprBg1 from '../assets/sprBg1.png';
import sprExplosion from '../assets/sprExplosion.png';
import sprLaserPlayer from '../assets/sprLaserPlayer.png';
import sprPlayer from '../assets/sprPlayer.png';

import Player from './entities/Player';
// import sndExplode0 from '../assets/sndExplode0.wav';
// import sndExplode1 from '../assets/sndExplode1.wav';
// import sndLaser from '../assets/sndLaser.wav';

class Main extends Phaser.Scene {
  constructor() {
    super({ key: 'Main' });
  }

  preload() {
    // load all assets needed for scene
    this.load.image('sprBg0', sprBg0);
    this.load.image('sprBg1', sprBg1);
    this.load.spritesheet('sprExplosion', sprExplosion, {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.image('sprLaserPlayer', sprLaserPlayer.png);
    this.load.spritesheet('sprPlayer', sprPlayer, {
      frameWidth: 16,
      frameHeight: 16,
    });
    // this.load.audio('sndExplode0', sndExplode0);
    // this.load.audio('sndExplode1', sndExplode1);
    // this.load.audio('sndLaser', sndLaser);
  }

  create() {
    // Create animations
    this.anims.create({
      key: 'sprExplosion',
      frames: this.anims.generateFrameNumbers('sprExplosion'),
      frameRate: 20,
      repeat: 0,
    });

    this.anims.create({
      key: 'sprPlayer',
      frames: this.anims.generateFrameNumbers('sprPlayer'),
      frameRate: 20,
      repeat: -1,
    });

    // add sounds to an object so they're available for reference later
    // this.sfx = {
    //   explosions: [
    //     this.sound.add('sndExplode0', { volume: 0.5, loop: false }),
    //     this.sound.add('sndExplode1', { volume: 0.5, loop: false }),
    //   ],
    //   laser: this.sound.add('sndLaser', { volume: 0.5, loop: false }),
    // };

    // add player
    // eslint-disable-next-line max-len
    this.player = new Player(this, this.game.config.width * 0.5, this.game.config.height * 0.5, sprPlayer);

    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  update() {
    this.player.update();

    if (this.keyW.isDown) {
      this.player.moveUp();
    }

    if (this.keyS.isDown) {
      this.player.moveDown();
    }

    if (this.keyA.isDown) {
      this.player.moveLeft();
    }

    if (this.keyD.isDown) {
      this.player.moveRight();
    }
  }
}

export default Main;
