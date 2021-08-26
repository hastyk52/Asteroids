import Phaser from 'phaser';
import sprBtnPlay from '../assets/sprBtnPlay.png';
import sprBtnPlayHover from '../assets/sprBtnPlayHover.png';
import sprBtnPlayDown from '../assets/sprBtnPlayDown.png';

class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'MainMenu' });
  }

  preload() {
    this.load.image('sprBtnPlay', sprBtnPlay);
    this.load.image('sprBtnPlayHover', sprBtnPlayHover);
    this.load.image('sprBtnPlayDown', sprBtnPlayDown);
  }

  create() {
    this.btnPlay = this.add.sprite(this.game.config.width * 0.5, this.game.config.height * 0.7, 'sprBtnPlay');
    this.btnPlay.setInteractive();

    this.btnPlay.on('pointerover', () => {
      this.btnPlay.setTexture('sprBtnPlayHover');
    }, this);

    this.btnPlay.on('pointerout', () => {
      this.btnPlay.setTexture('sprBtnPlay');
    }, this);

    this.btnPlay.on('pointerdown', () => {
      this.btnPlay.setTexture('sprBtnPlayDown');
    }, this);

    this.btnPlay.on('pointerup', () => {
      this.btnPlay.setTexture('sprBtnPlayHover');

      if (document.getElementById('username')) {
        if (document.getElementById('username').innerText) {
          this.scene.start('Main');
        } else {
          this.add.text(this.game.config.width * 0.5, this.game.config.height * 0.5, 'Please login', { fontSize: 20 });
        }
      } else {
        this.add.text(this.game.config.width * 0.5, this.game.config.height * 0.5, 'Please login', { fontSize: 20 }).setOrigin(0.5);
      }
    }, this);
  }
}

export default MainMenu;
