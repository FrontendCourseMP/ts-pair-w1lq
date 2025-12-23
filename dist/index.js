import {
  calculateArrivalTime,
  getSignature,
  getLastWordLength,
  calculateLuminanceContrast,
  isValidParentheses
} from './functions.js';

console.log('=== Тестирование времени прибытия ===');
console.log(`22 + 2 = ${calculateArrivalTime(22, 2)} (ожидается: 0)`);
console.log(`10 + 5 = ${calculateArrivalTime(10, 5)} (ожидается: 15)`);
console.log(`23 + 3 = ${calculateArrivalTime(23, 3)} (ожидается: 2)`);
console.log(`0 + 24 = ${calculateArrivalTime(0, 24)} (ожидается: 0)`);
console.log(`5 + 20 = ${calculateArrivalTime(5, 20)} (ожидается: 1)`);
console.log('');

console.log('=== Тестирование подписи ===');
console.log(`Иванов Иван Иванович = "${getSignature('Иванов Иван Иванович')}" (ожидается: Иванов И.И.)`);
console.log(`Петров Петр Петрович = "${getSignature('Петров Петр Петрович')}" (ожидается: Петров П.П.)`);
console.log(`Сидоров Алексей Николаевич = "${getSignature('Сидоров Алексей Николаевич')}" (ожидается: Сидоров А.Н.)`);
console.log('');

console.log('=== Тестирование длины последнего слова ===');
console.log(`"Hello World" = ${getLastWordLength('Hello World')} (ожидается: 5)`);
console.log(`"   fly me   to   the moon  " = ${getLastWordLength('   fly me   to   the moon  ')} (ожидается: 4)`);
console.log(`"TypeScript is awesome" = ${getLastWordLength('TypeScript is awesome')} (ожидается: 7)`);
console.log(`"luffy is still joyboy" = ${getLastWordLength('luffy is still joyboy')} (ожидается: 6)`);
console.log('');

console.log('=== Тестирование контраста яркости ===');
console.log(`Контраст(0.8, 0.2) = ${calculateLuminanceContrast(0.8, 0.2).toFixed(2)} (ожидается: 0.60)`);
console.log(`Контраст(1.0, 0.0) = ${calculateLuminanceContrast(1.0, 0.0).toFixed(2)} (ожидается: 1.00)`);
console.log(`Контраст(0.5, 0.5) = ${calculateLuminanceContrast(0.5, 0.5).toFixed(2)} (ожидается: 0.00)`);
console.log(`Контраст(0.9, 0.1) = ${calculateLuminanceContrast(0.9, 0.1).toFixed(2)} (ожидается: 0.80)`);
console.log('');

console.log('=== Тестирование скобок ===');
console.log(`"()" = ${isValidParentheses('()')} (ожидается: true)`);
console.log(`"()[]{}" = ${isValidParentheses('()[]{}')} (ожидается: true)`);
console.log(`"(]" = ${isValidParentheses('(]')} (ожидается: false)`);
console.log(`"([)]" = ${isValidParentheses('([)]')} (ожидается: false)`);
console.log(`"{[]}" = ${isValidParentheses('{[]}')} (ожидается: true)`);
console.log(`"((()))" = ${isValidParentheses('((()))')} (ожидается: true)`);
console.log(`"[(])" = ${isValidParentheses('[(])')} (ожидается: false)`);