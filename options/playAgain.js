// Play again
import inquirer from "inquirer";

const playAgain = async (again = false) => {
  const answer = await inquirer.prompt({
    name: "play",
    type: "confirm",
    message: `Do you want to play ${again ? "again" : ""}?`,
  });

  return answer.play;
};

export default playAgain;
