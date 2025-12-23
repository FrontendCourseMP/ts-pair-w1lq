/**
 * 1. время прибытия
 * scheduledHour - час прибытия по расписанию (0-23)
 * delayHours - количество часов опоздания
 * возвращает новый час прибытия в 24-часовом формате
 */
export function calculateArrivalTime(scheduledHour: number, delayHours: number): number {
  return (scheduledHour + delayHours) % 24;
}

/**
 * 2. подпись
 * fullName - строка с фамилией именем и отчеством
 * возвращает инициалы с фамилией в формате "Фамилия И.О."
 */
export function getSignature(fullName: string): string {
  const parts = fullName.trim().split(/\s+/);
  
  if (parts.length < 3) {
    throw new Error('ФИО должно содержать фамилию, имя и отчество');
  }
  
  const lastName = parts[0];
  const firstName = parts[1];
  const middleName = parts[2];
  
  const firstInitial = firstName.charAt(0).toUpperCase() + '.';
  const middleInitial = middleName.charAt(0).toUpperCase() + '.';
  
  return `${lastName} ${firstInitial}${middleInitial}`;
}

/**
 * 3. длина слова
 * text - строка состоящая из слов и пробелов
 * возвращает длина последнего слова в строке
 */
export function getLastWordLength(text: string): number {
  const trimmedText = text.trim();
  
  if (trimmedText.length === 0) {
    return 0;
  }
  
  const words = trimmedText.split(/\s+/);
  const lastWord = words[words.length - 1];
  
  return lastWord.length;
}

/**
 * 4. контраст яркости
 * l1 - первое значение яркости (большее или равное второму)
 * l2 - второе значение яркости
 * возвращает положительный контраст яркости
 */
export function calculateLuminanceContrast(l1: number, l2: number): number {
  if (l1 < 0 || l2 < 0) {
    throw new Error('Яркость должна быть неотрицательной');
  }
  
  if (l1 < l2) {
    throw new Error('Первое значение яркости должно быть больше или равно второму');
  }
  
  if (l1 + l2 === 0) {
    return 0;
  }
  
  return (l1 - l2) / (l1 + l2);
}

/**
 * 5. скобки
 * 
 * s - только символы '(', ')', '{', '}', '[' и ']'
 * возвращает true если строка валидна, иначе false
 */
export function isValidParentheses(s: string): boolean {
  const stack: string[] = [];
  const bracketPairs: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  
  for (const char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
        return false;
      }
    } else {
      throw new Error('Строка должна содержать только скобки');
    }
  }
  
  return stack.length === 0;
}