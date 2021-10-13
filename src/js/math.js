/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

import Character from './character';

export default class Math extends Character {
  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    let finalAttack;
    if (this.stoned) {
      finalAttack = Math.round((this._attack * (1.1 - this.distance / 10))
      - (Math.log2(this.distance) * 5));
    } else {
      finalAttack = Math.round(this._attack * (1.1 - this.distance / 10));
    }
    if (finalAttack < 0) {
      return 0;
    }
    return finalAttack;
  }
}
