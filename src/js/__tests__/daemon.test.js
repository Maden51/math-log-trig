import Daemon from '../daemon';

test('Правильно понижает атаку от дурмана у класса magician', () => {
  const player1 = new Daemon('Luci');
  player1.attack = 100;
  player1.distance = 2;
  player1.stoned = true;
  expect(player1.attack).toBe(85);
});

test('Правильно понижает атаку без дурмана у класса magician', () => {
  const player1 = new Daemon('Luci');
  player1.attack = 100;
  player1.distance = 2;
  player1.stoned = false;
  expect(player1.attack).toBe(90);
});

test('атака равняется 0 при большом расстоянии', () => {
  const player1 = new Daemon('Luci');
  player1.attack = 100;
  player1.distance = 200;
  player1.stoned = false;
  expect(player1.attack).toBe(0);
});
