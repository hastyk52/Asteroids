import Phaser from 'phaser';
import axios from 'axios';

class GameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOver' });
  }

  init(data) {
    this.playerScore = data.score;
  }

  create() {
    const playerScoreText = this.add.text(
      this.game.config.width * 0.5,
      this.game.config.height * 0.3,
      `Score: ${this.playerScore}`,
      { fontSize: '60px', color: 'white', },
    ).setOrigin(0.5);

    this.restartBtn = this.add.text(this.game.config.width * 0.3,
      this.game.config.height * 0.7, 'RESTART',
      {
        fontSize: '40px',
        color: 'white',
        backgroundColor: 'gray',
      })
      .setOrigin(0.5)
      .setInteractive();

    this.submitScoreBtn = this.add.text(this.game.config.width * 0.7,
      this.game.config.height * 0.7, 'SUBMIT',
      {
        fontSize: '40px',
        color: 'white',
        backgroundColor: 'gray',
      })
      .setOrigin(0.5)
      .setInteractive();

    this.restartBtn.on('pointerup', () => {
      this.scene.start('Main');
    });

    this.submitScoreBtn.on('pointerup', () => {
      const username = document.getElementById('username').innerText;
      const score = this.playerScore;
      debugger;
      axios.post('/scoreboard', { score, username })
        .then(() => {
          this.scene.start('Main');
        })
        .catch(() => {
          this.submitScoreBtn.setText('ERROR');
          this.submitScoreBtn.disableInteractive(false);
        });
    });
  }
}

export default GameOver;
