// Key
import { randomBytes, createHmac } from "node:crypto";

class Key {
  constructor(move) {
    this.move = move;
  }

  update() {
    const key = randomBytes(32).toString("hex");
    const compMove = Math.round(Math.random() * this.move.length);
    const hmac = createHmac("sha3-256", key)
      .update(this.move[compMove])
      .digest("hex");
    return { key, compMove, hmac };
  }
}

export default Key;
