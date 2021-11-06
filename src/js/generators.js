import PositionedCharacter from './PositionedCharacter';

/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  const team = Math.floor(Math.random() * allowedTypes.length);
  const level = Math.floor(Math.random() * maxLevel) + 1;
  yield new allowedTypes[team](level);
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const playerPosition = [0, 1, 8, 9, 16, 17, 24, 25, 32, 33, 40, 41, 48, 49, 56, 57];
  const pcPosition = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 62, 63];
  let position;
  let i;
  const teams = [];
  for (let value = 0; value < characterCount; value += 1) {
    const characterTeams = characterGenerator(allowedTypes, maxLevel);
    const char = characterTeams.next();
    switch (char.value.type) {
      case 'bowman':
      case 'swordsman':
      case 'magician':
        i = Math.floor(Math.random() * playerPosition.length);
        position = playerPosition[i];
        playerPosition.splice(i, 1);
        break;
      case 'undead':
      case 'vampire':
      case 'daemon':
        i = Math.floor(Math.random() * pcPosition.length);
        position = pcPosition[i];
        pcPosition.splice(i, 1);
        break;
      default:
        break;
    }
    teams.push(new PositionedCharacter(char.value, position));
  }
  return teams;
}
