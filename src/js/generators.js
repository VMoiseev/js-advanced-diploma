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
  const team = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < characterCount; i++) {
    team.push(characterGenerator(allowedTypes, maxLevel).next.value);
  }
  return team;
}
