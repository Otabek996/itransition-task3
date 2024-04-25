// Index
import { argv } from "node:process";
import App from "../app.js";

const main = () => {
  const move = argv.slice(2);

  const app = new App(move);
  app.loading();
};

main();
