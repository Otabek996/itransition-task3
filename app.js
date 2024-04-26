// Task 3
import inquirer from "inquirer";
import Key from "./classes/key.js";
import Menu from "./classes/menu.js";
import Table from "./classes/table.js";

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

  async makePrompt(compMove, key) {
    const answers = await inquirer.prompt({
      name: "player_move",
      type: "input",
      message: "Enter your move: ",
    });

    const answer = Number(answers.player_move);
  }
}

export default App;
