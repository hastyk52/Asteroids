import Phaser from 'phaser';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MainMenu from './phaser/SceneMainMenu';
import Main from './phaser/SceneMain';
import GameOver from './phaser/SceneGameOver';

const config = {
  type: Phaser.AUTO,
  parent: 'phaser',
  width: 800,
  height: 600,
  scene: [MainMenu, Main, GameOver],
};

const game = new Phaser.Game(config);

ReactDOM.render(<App />, document.getElementById('app'));
