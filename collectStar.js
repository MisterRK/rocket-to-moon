export function collectStar(player, star, score, scoreText) {
   star.disableBody(true, true);

   //  Add and update the score
   score += 10;
   scoreText.setText("Score: " + score);

   if (score >= 20) {
      this.physics.pause();
      player.setTint(0x62e035);
      player.anims.play("turn");

      // gameOver = true;
   }
}