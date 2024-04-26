// Rules

class Rules {
  constructor(actions) {
    this.actions = actions;
  }

  results() {
    const tableLength = this.actions.length;
    const tableArray = Array.from({ length: tableLength }, () => []);
    const tableIndex = Math.floor(tableLength / 2);
    let index;

    for (let i = 0; i < tableLength; i++) {
      for (let j = 0; j < tableLength; j++) {
        index = Math.sign(((j - i + tableIndex + tableLength) % tableLength) - tableIndex);

        if (index > 0) {
          tableArray[i].push("Win");
        } else if (index < 0) {
          tableArray[i].push("Lose");
        } else {
          tableArray[i].push("Draw");
        }
      }
    }

    return tableArray;
  }
}

export default Rules;
