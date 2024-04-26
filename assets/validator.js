// Validator

export const isUnique = (array) => {
  const uniqueArray = new Set(array).size == array.length;
  return uniqueArray;
};

export const validateArgs = (args) => {
  const example = "Example: 'play rock Spock paper lizard scissors'";

  if (args.length < 3) {
    const error = Error(`Please provide at least 3 arguments.\n${example}`);
    console.log(error.message);
  } else if (!isUnique(args)) {
    const error = Error(
      `Please don't provide duplicate arguments.\n${example}`
    );
    console.log(error.message);
  } else if (args.length % 2 === 0) {
    const error = Error(
      "Please enter the odd number of arguments.\nExample: 'rock paper scissors'"
    );
    console.log(error.message);
  } else return true;

  return false;
};
