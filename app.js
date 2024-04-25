// Task 3
import Key from "./classes/key.js";

class App {
  constructor(move) {
    this.move = move;
    this.key = new Key(move);
  }

  async loading() {
    const loaderTitle = "Loading game ... \n";
    console.log(loaderTitle);
    this.startGame();
  }

  async startGame() {
    const { key, compMove, hmac } = this.key.update();
    console.log(`HMAC: ${hmac} \n`);
  }
}

export default App;
