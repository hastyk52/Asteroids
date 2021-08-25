import Phaser from 'phaser';
import Entity from './Entity';

class Meteor extends Entity {
  constructor(scene, x, y, velocityX, velocityY) {
    super(scene, x, y, 'sprEnemy1', 'Meteor');
    this.body.velocity.x = velocityX;
    this.body.velocity.y = velocityY;
    this.play('sprEnemy1');
  }

  update() {
  }
}

export default Meteor;
