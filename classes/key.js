// Key
import { randomBytes, createHmac } from "node:crypto";

class Key {
  constructor(actions) {
    this.actions = actions;
  }

  update() {
    const key = randomBytes(32).toString("hex");
    const compMove = Math.round(Math.random() * this.actions.length);
    const hmac = createHmac("sha3-256", key)
      .update(this.actions[compMove])
      .digest("hex");
    return { key, compMove, hmac };
  }
}

export default Key;
