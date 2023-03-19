import Phaser from 'phaser';
import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App.jsx";
import playGame from "./phaser/scene";

export const config = {
  type: Phaser.AUTO,
  parent: "phaser",
  width: 800,
  height: 600,
  scene: playGame
};

const game = new Phaser.Game(config);

const container = document.getElementById('root') || document.createElement("div");
const root = createRoot(container);
root.render(
  <App />
);