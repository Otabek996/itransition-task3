// Menu
import colors from "colors";
class Menu {
  constructor(actions) {
    this.actions = actions;
  }

  display() {
    console.log(colors.brightGreen("MOVES:"));

    for (let i = 0; i < this.actions.length; i++) {
      console.log(`${colors.brightGreen(i + 1)} - ${this.actions[i]}`);
    }

    console.log(`${this.actions.length + 1} - help\n0 - exit\n`);
  }
}

export default Menu;
