// Index
import { argv } from "node:process";
import App from "../app.js";

const main = () => {
  const actions = argv.slice(2);

  const app = new App(actions);
  app.loading();
};

main();
