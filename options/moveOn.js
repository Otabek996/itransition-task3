// Move on

const moveOn = async (result, key) => {
  if (result === "Win") {
    console.log("You win!\n");
  } else if (result === "Lose") {
    console.log("You lose!\n");
  } else {
    console.log("It is a draw!\n");
  }

  console.log(`HMAC key: ${key}`);
  console.log("You can use online tools to validate computer move.");
};

export default moveOn;
