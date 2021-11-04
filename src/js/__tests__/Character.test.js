import Character from '../Character';
import Daemon from '../Characters/Daemon';

test('Создание объекта Character без наследования', () => {
  expect(() => new Character()).toThrow('Создание объектов Character запрещено');
});

test('Создание наследников должно работать без ошибок', () => {
  expect(() => new Daemon()).not.toThrow();
});
