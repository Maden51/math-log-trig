import MathChar from './mathChar';

export default class Daemon extends MathChar {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
