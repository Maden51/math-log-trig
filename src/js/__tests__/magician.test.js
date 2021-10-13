import Magician from '../magician';

test('Правильно понижает атаку у класса magician', () => {
  const player1 = new Magician('Gandalf');
  player1.attack = 100;
  player1.distance = 2;
  player1.stoned = true;
  expect(player1.attack).toBe(85);
});
