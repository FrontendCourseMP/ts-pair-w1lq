"use strict";
/**
 * Задача Время прибытия
 * @param scheduledHour - час прибытия по расписанию (0-23)
 * @param delayHours - количество часов опоздания
 * @returns новый час прибытия в 24-часовом формате
 */
function calculateArrivalTime(scheduledHour, delayHours) {
    return (scheduledHour + delayHours) % 24;
}
// Тестирование функции
console.log('=== Тестирование времени прибытия ===');
console.log(`22 + 2 = ${calculateArrivalTime(22, 2)}`); // Ожидаем: 0
console.log(`10 + 5 = ${calculateArrivalTime(10, 5)}`); // Ожидаем: 15
console.log(`23 + 3 = ${calculateArrivalTime(23, 3)}`); // Ожидаем: 2
console.log(`0 + 24 = ${calculateArrivalTime(0, 24)}`); // Ожидаем: 0
