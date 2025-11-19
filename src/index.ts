/**
 * Задача Время прибытия
 * @param scheduledHour - час прибытия по расписанию (0-23)
 * @param delayHours - количество часов опоздания
 * @returns новый час прибытия в 24-часовом формате
 */
function calculateArrivalTime(scheduledHour: number, delayHours: number): number {
  return (scheduledHour + delayHours) % 24;
}

// тесты
console.log('=== Тестирование времени прибытия ===');
console.log(`22 + 2 = ${calculateArrivalTime(22, 2)}`);
console.log(`10 + 5 = ${calculateArrivalTime(10, 5)}`);
console.log(`23 + 3 = ${calculateArrivalTime(23, 3)}`);
console.log(`0 + 24 = ${calculateArrivalTime(0, 24)}`);