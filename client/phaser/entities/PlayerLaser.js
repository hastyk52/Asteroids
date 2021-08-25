import Phaser from 'phaser';
import Entity from './Entity';

class PlayerLaser extends Entity {
  constructor(scene, x, y, trajectoryAngle, speed) {
    super(scene, x, y, 'sprLaserPlayer', 'PlayerLaser');
    this.angle = trajectoryAngle;
    this.body.velocity.x = speed * Math.sin(trajectoryAngle * (Math.PI / 180));
    this.body.velocity.y = -speed * Math.cos(trajectoryAngle * (Math.PI / 180));
  }
}

export default PlayerLaser;
