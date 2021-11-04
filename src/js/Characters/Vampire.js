import Character from '../Character';

export default class Zombie extends Character {
  constructor(level) {
    super(level, 'Zombie');
    this.attack = 25;
    this.defence = 25;
    this.movementRange = 2;
    this.attackRange = 2;
  }
}
