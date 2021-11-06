export function calcTileType(index, boardSize) {
  // TODO: write logic here
  const columnNumber = index % boardSize;
  const rowNumber = Math.floor(index / boardSize);
  const max = boardSize - 1;

  if (!columnNumber && !rowNumber) {
    return 'top-left';
  }

  if (columnNumber === max && !rowNumber) {
    return 'top-right';
  }

  if (!rowNumber) {
    return 'top';
  }

  if (!columnNumber && rowNumber === max) {
    return 'bottom-left';
  }

  if (columnNumber === max && rowNumber === max) {
    return 'bottom-right';
  }

  if (rowNumber === max) {
    return 'bottom';
  }

  if (columnNumber === max) {
    return 'right';
  }

  if (!columnNumber) {
    return 'left';
  }

  return 'center';
}

export function tooltipMessage({
  level, attack, defence, health,
}) {
  return `🎖${level} ⚔${attack} 🛡${defence} ❤${health}`;
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
