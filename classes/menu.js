// Menu

class Menu {
  constructor(actions) {
    this.actions = actions;
  }

  display() {
    console.log("MOVES:");

    for (let i = 0; i < this.actions.length; i++) {
      console.log(`${i + 1} - ${this.actions[i]}`);
    }

    console.log(`${this.actions.length + 1} - help\n0 - exit\n`);
  }
}

export default Menu;
