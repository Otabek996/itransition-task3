// Index
import { argv } from "node:process";
import App from "../app.js";
import { validateArgs } from "../assets/validator.js";

const main = () => {
  const actions = argv.slice(2);
  console.log(actions);

  if (validateArgs(actions)) {
    const app = new App(actions);
    app.loading();
  }
};

main();
