// Task 3
import inquirer from "inquirer";

// Import classes
import Key from "./classes/key.js";
import Menu from "./classes/menu.js";
import Rules from "./classes/rules.js";
import Table from "./classes/table.js";

// Import options
import exit from "./options/exit.js";
import help from "./options/help.js";
import playAgain from "./options/playAgain.js";
import moveOn from "./options/moveOn.js";

class App {
  constructor(actions) {
    this.actions = actions;
    this.key = new Key(actions);
    this.menu = new Menu(actions);
    this.result = new Rules(actions).results();
    this.table = new Table(actions, this.result);
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

    if (answer === 0) {
      console.log("LOL");
    } else if (answer === this.actions.length + 1) {
      await help(this.table);
      (await playAgain()) ? this.startGame() : exit();
    } else if (answer <= this.actions.length && answer > 0) {
      console.log(`\nYour move: ${this.actions[answer - 1]}`);
      console.log(`Computer move: ${this.actions[compMove]}\n`);
      await moveOn(this.result[compMove][answer - 1], key);
      (await playAgain(true)) ? this.startGame() : exit();
    } else {
      console.log(
        `! Please enter a number in the range between 0 and ${
          this.moves.length + 1
        } !`
      );
      return this.makePrompt(compMove, key);
    }
  }
}

export default App;
