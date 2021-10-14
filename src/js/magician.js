import MathChar from './mathChar';

export default class Magician extends MathChar {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
