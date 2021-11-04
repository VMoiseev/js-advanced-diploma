import Character from '../Character';

export default class Daemon extends Character {
  constructor(level) {
    super(level, 'Daemon');
    this.attack = 10;
    this.defence = 40;
    this.movementRange = 1;
    this.attackRange = 4;
  }
}
