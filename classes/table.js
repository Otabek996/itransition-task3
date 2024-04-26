// Table
import tableCreator from "cli-table3";

class Table {
  constructor(actions, result) {
    this.actions = actions;
    this.result = result;
  }

  render() {
    const table = new tableCreator({
      style: { head: [], border: [] },
      head: ["v PC \\ User >", ...this.actions],
    });

    for (let i = 0; i < this.actions.length; i++) {
      table.push({ [this.actions[i]]: this.result[i] });
    }

    console.log(table.toString());
  }
}

export default Table;
