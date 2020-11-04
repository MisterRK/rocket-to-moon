import Phaser from "phaser";
import {LevelTest} from './levelTest'
import {LevelTwo} from './levelTwo'

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 200 },
		},
	},
	scene: [LevelTest, LevelTwo]
};

const game = new Phaser.Game(config);
