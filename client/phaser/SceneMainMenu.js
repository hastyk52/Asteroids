import Phaser from 'phaser';
import logoImg from '../assets/logo.png';

class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'MainMenu' });
  }

  preload() {
    // this.load.image('logo', logoImg);
  }

  create() {
    this.scene.start('Main');
    // const logo = this.add.image(400, 150, 'logo');

    // this.tweens.add({
    //   targets: logo,
    //   y: 450,
    //   duration: 2000,
    //   ease: 'Power2',
    //   yoyo: true,
    //   loop: -1,
    // });
  }
}

export default MainMenu;
