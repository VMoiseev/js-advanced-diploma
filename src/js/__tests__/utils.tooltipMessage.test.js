import { tooltipMessage } from '../utils';

test('Информация о персонаже должна отображаться корректно, вариант 1', () => {
  const expected = '🎖10 ⚔10 🛡10 ❤10';
  const received = tooltipMessage({
    level: 10, attack: 10, defence: 10, health: 10,
  });
  expect(received).toBe(expected);
});

test('Информация о персонаже должна отображаться корректно, вариант 2', () => {
  const expected = '🎖3 ⚔45 🛡67 ❤98';
  const received = tooltipMessage({
    level: 3, attack: 45, defence: 67, health: 98,
  });
  expect(received).toBe(expected);
});
