// Task 3
import Key from "./classes/key.js";
import Menu from "./classes/menu.js";

class App {
  constructor(actions) {
    this.actions = actions;
    this.key = new Key(actions);
    this.menu = new Menu(actions);
  }

  async loading() {
    const loaderTitle = "Loading game ... \n";
    console.log(loaderTitle);
    this.startGame();
  }

  async startGame() {
    const { key, compMove, hmac } = this.key.update();
    console.log(`HMAC: ${hmac} \n`);
    this.menu.display();
  }
}

export default App;
