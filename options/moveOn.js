// Move on
import colors from "colors";

const moveOn = async (result, key) => {
  if (result === colors.brightGreen("Win")) {
    console.log(colors.brightGreen("You win!\n"));
  } else if (result === colors.brightRed("Lose")) {
    console.log(colors.brightRed("You lose!\n"));
  } else {
    console.log(colors.brightYellow("It is a draw!\n"));
  }

  console.log(colors.bgBrightGreen(` HMAC key: ${key} `));
  console.log(
    "You can use online tools to validate computer move. For instance: (https://www.freeformatter.com/hmac-generator.html)"
  );
};

export default moveOn;
