// Task 3
import Key from "./classes/key.js";

class App {
  constructor(move) {
    this.move = move;
    this.key = new Key(move);
  }

  async loading() {
    const loaderTitle = "Loading game ...";
    console.log(loaderTitle);
  }

  async startGame() {
    const { hmac, compMove, key } = this.key.update();
  }
}

export default App;
