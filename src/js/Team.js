import Bowman from './Characters/Bowman';
import Daemon from './Characters/Daemon';
import Swordsman from './Characters/Swordsman';
import Magician from './Characters/Magician';
import Undead from './Characters/Undead';
import Vampire from './Characters/Vampire';

export default class Team {
  constructor() {
    this.playerTeam = [Bowman, Swordsman, Magician];
    this.pcTeam = [Daemon, Vampire, Undead];
  }

  * [Symbol.iterator]() {
    const { playerTeam } = this;
    for (let value = 0; value < playerTeam.length; value += 1) {
      yield playerTeam[value];
    }
  }

  * [Symbol.iterator]() {
    const { pcTeam } = this;
    for (let value = 0; value < pcTeam.length; value += 1) {
      yield pcTeam[value];
    }
  }
}
