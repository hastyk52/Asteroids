import Phaser from 'phaser';
import Entity from './Entity';
import PlayerLaser from './PlayerLaser';

class Player extends Entity {
  constructor(scene, x, y, key) {
    super(scene, x, y, key, 'Player');
    this.setData('acceleration', 150);
    this.play('sprPlayer');
    this.body.setMaxVelocity(100, 100);
    this.setData('isShooting', false);
    this.setData('shotDelayTimer', 20);
    this.setData('shotTickTimer', this.getData('shotDelayTimer') - 1);
  }

  spinCounterClockwise() {
    this.angle -= 2;
  }

  spinClockwise() {
    this.angle += 2;
  }

  fowardThrust() {
    this.body.acceleration.y = -this.getData('acceleration') * Math.sin((this.angle + 90) * (Math.PI / 180));
    this.body.acceleration.x = -this.getData('acceleration') * Math.cos((this.angle + 90) * (Math.PI / 180));
  }

  update() {
    // this.body.setVelocity(0, 0);
    this.x = Phaser.Math.Clamp(this.x, 8, this.scene.game.config.width - 8);
    this.y = Phaser.Math.Clamp(this.y, 8, this.scene.game.config.height - 8);
    if (this.getData('isShooting')) {
      if (this.getData('shotTickTimer') < this.getData('shotDelayTimer')) {
        this.setData('shotTickTimer', this.getData('shotTickTimer') + 1);
      } else {
        //add laser to display
        const laser = new PlayerLaser(
          this.scene,
          this.x,
          this.y,
          this.angle,
          300,
        );
        // add laser to group
        this.scene.playerLasers.add(laser);
        this.setData('shotTickTimer', 0);
      }
    }
  }
}

export default Player;
