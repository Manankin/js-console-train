console.time('Timer'); // finish at the page end
console.count('counter'); // finish at the page end
// Завдання 1
/** Функція `filterStudentsByGrade` фільтрує студентів за рівнем оцінки та виводить інформацію про них.
 *  grade - Рівень оцінки для фільтрації. */
function filterStudentsByGrade(students, grade) {
  // Виведемо в консоль критичну помилку з текстом "Якщо ви бачите це повідомлення, то завдання 1 виконано не правильно"
  console.error("Якщо ви бачите це повідомлення, то завдання 1 виконано не правильно");
  // Очищення консолі перед виведенням
  console.clear();
  // Виведемо в консоль повідомлення для відстеження роботи програми з текстом: "Завдання: 1 =============================="
  console.log("Завдання: 1 ==============================");
  // Відфільтруємо тільки тих студентів оцінка яких співпадає з grade
  let result = [];
  if (Array.isArray(students)) {
    result = students.filter((item) => item.grade === grade ? true : false)
  }
  // За допомогою перебору масиву виведемо повідомлення для відстеження роботи програми з іменем кожного студента, який має необхідну оцінку
  result.forEach((item) => console.log(item.name, item.grade));
}

// Виклик функції для фільтрації студентів з рівнем "A"
console.count('counter');
filterStudentsByGrade(
  [
    { name: "John", grade: "A" },
    { name: "Kate", grade: "B" },
    { name: "Mike", grade: "A" },
    { name: "Anna", grade: "C" },
    { name: "Tom", grade: "B" },
  ],
  "A"
);


// Завдання 2
/** Функція `logArrayElements` приймає масив та виводить кожен його елемент в консоль.
 *  arr - Масив для обробки. */
function logArrayElements(arr) {
  // Перевіряємо, чи arr є масивом.
  if (!Array.isArray(arr)) {
    // Якщо arr не є масивом, виведеме в консоль критичну помилоку з текстом "Аргумент має бути масивом!"
    console.error("Аргумент має бути масивом!");
    // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
    return null
  }
  // Перебираємо кожен елемент масиву.
  arr.forEach((value, index) => console.log(`${index}: ${value}`));
  // Виводимо в консоль поточний елемент масиву та його індекс в форматі Елемент <індекс>: <значення>
}
// Перевірка
console.log("Завдання: 2 ==============================");
console.count('counter');
logArrayElements([1, 2, 3, "a", "b", "c"]);
// Виведе в консоль:
// Елемент 0: 1
// Елемент 1: 2
// Елемент 2: 3
// Елемент 3: a
// Елемент 4: b
// Елемент 5: c


// Завдання 3
/** Функція `warnAboutMaxArrayLength` перевіряє, чи перевищує довжина масиву вказане максимальне значення.
 *  arr - Масив для перевірки.
 *  maxLength - Максимальна довжина масиву. */
function warnAboutMaxArrayLength(arr, maxLength) {
  // Перевіряємо, чи arr є масивом, а maxLength є числом.
  if (!Array.isArray(arr) || typeof maxLength !== 'number') {
    // Якщо arr не є масивом або maxLength не є числом, виведеме в консоль критичну помилоку з текстом: "Перший аргумент має  бути масивом, другий аргумент має бути числом!".
    console.error("Перший аргумент має  бути масивом, другий аргумент має бути числом!");
    // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
    return null
  }
  // Перевіряємо, чи довжина масиву перевищує максимальну допустиму довжину.
  if (arr.length > maxLength) {
    // Якщо довжина масиву перевищує максимальну, виводимо попередження про потенційну проблеми з текстом: "Увага! Довжина масиву перевищує максимально допустиму!".
    console.warn("Увага! Довжина масиву перевищує максимально допустиму!");
  } else {
    // Якщо довжина масиву не перевищує максимальну, виведеме в консоль корисне повідомлення з текстом: "Довжина масиву не перевищує максимально допустиму.".
    console.info("Довжина масиву не перевищує максимально допустиму.")
  }
}
// Перевірка
console.log("Завдання: 3 ==============================");
console.count('counter');
warnAboutMaxArrayLength([1, 2, 3, 4, 5], 3);
// Виведе в консоль попередження: "Увага! Довжина масиву перевищує максимально допустиму!".


// Завдання 4
/** Функція `compareArrays` приймає два масиви чисел як аргументи і порівнює їх.
 * Вона використовує `console.assert()` для перевірки того, чи обидва масиви є однаковими.
 *  arr1 - Перший масив чисел.
 *  arr2 - Другий масив чисел. */
function compareArrays(arr1, arr2) {
  // Сортуємо масиви за зростанням.
  arr1.sort();
  arr2.sort();
  // Оскільки напряму порівняти масиви за допомогою оператора === не можно, перетворимо ії в json і порівняємо
  let newArr1 = JSON.stringify(arr1);
  let newArr2 = JSON.stringify(arr2);
  // Використовуємо `console.assert()`, щоб вивести помилку, якщо масиви не однакові.
  console.count('counter');
  console.assert(newArr1 === newArr2, 'Arrays are not equial')
}
console.log("Завдання: 4 ==============================");
compareArrays([1, 2, 3, 4, 5], [1, 2, 3, 4]);
// Виведе "Assertion failed: Масиви не однакові!"


// Завдання 5
/** Функція `buildMatrix` створює двовимірний масив (матрицю) розміром size x size,
 * заповнює її випадковими числами від 0 до 9, а потім виводить матрицю в консоль
 *  size - розмір матриці.
 *  Повернеться згенерована матриця. */
function buildMatrix(size) {
  // Перевіряємо, чи size є числом.
  if (typeof size !== 'number' || size <= 0) {
    // Якщо size не є числом, виведеме в консоль критичну помилку з текстом "Аргумент має бути числом!".
    console.error("Аргумент має бути додатнім числом!");
    // Повертаємо null, що свідчить про неможливість обробки вхідних даних.
    return null
  }
  // Створюємо порожній масив який буде нашою матрицею.
  let resultArray = [];
  // Цикл для заповнення рядків матриці, лічильник і має бути від 0 до розміру матриці.
  for (let i = 0; i < size; i++) {
    // Створюємо порожній масив, який буде рядком матриці.
    let resultItem = [];
    // Цикл всередені циклу для заповнення колонок матриці,лічильник j має бути від 0 до розміру матриці.
    for (let j = 0; j < size; j++) {
      // Генеруємо випадкове число від 0 до 9 округляємо його до меншого цілого, і додаємо його до рядка.
      let item = Math.floor(Math.random() * 10);
      resultItem.push(item);
    }
    // Додаємо рядок до матриці.
    resultArray.push(resultItem);
  }
  // Виводимо матрицю в консоль за допомогою як таблицю.
  console.table(resultArray);
  // Повертаємо створену матрицю.
  return resultArray;
}
console.log("Завдання: 5 ==============================");
buildMatrix(5);
// Виведе в консоль матрицю розміром 5x5, заповнену випадковими числами від 0 до 9.


// Завдання 6
/** Функція `traceBackward` виводить числа від заданого до 1 у зворотному порядку,
 * використовуючи рекурсію.
 *  n - стартове число. */
function traceBackward(n) {
  // Виводимо поточне число n.
  console.log(n);
  // Якщо n є більше 1, викликаємо функцію traceBackward знову з аргументом n - 1.
  if (n > 1) {
    traceBackward(n-1)
  }
  // Виведемо стек викликів, коли досягнемо 1.
  console.trace();
}
console.log("Завдання: 6 ==============================");
traceBackward(5);
// Виведе в консоль числа від 5 до 1, а потім виведе стек викликів.


// Завдання 7
/** Функція `displayGroupedInfo` виводить інформацію про групу студентів в консоль, організовуючи дані у групи.
 * students - масив об'єктів-студентів. */
function displayGroupedInfo(students) {
  // Переберомо об'єкт за допомого for of
  for (let student of students) {
    // Створимо групу з повідомленням `Студент: ${student.name}`
    console.group(`Студент: ${student.name}`);
    // Виведемо корисне повідомлення з текстом `Вік: ${student.age}`
    console.info(`Вік: ${student.age}`);
    // Виведемо корисне повідомлення з текстом `Предмет: ${student.subject}`
    console.info(`Предмет: ${student.subject}`)
    // Закриємо групу
    console.groupEnd(`Студент: ${student.name}`)
  }
}
console.log("Завдання: 7 ==============================");
displayGroupedInfo([
  { name: "Alex", age: 22, subject: "Math" },
  { name: "Max", age: 23, subject: "Physics" },
  { name: "Anna", age: 21, subject: "Chemistry" },
]);
// Виведе в консоль:
// Студент: Alex
//   Вік: 22
//   Предмет: Math
// Студент: Max
//   Вік: 23
//   Предмет: Physics
// Студент: Anna
//   Вік: 21
//   Предмет: Chemistry


// Завдання 8
/*** Функція `validateUserInput` перевіряє коректність введених користувачем даних.
 * Для цього використовуємо `console.warn()` та `console.assert()`.
 *  userInput - об'єкт з введеними користувачем даними. */
function validateUserInput(userInput) {
  // Перевіремо умову наявності імені користувача, якщо воно відсутнє виводимо "Помилка: ім'я користувача відсутнє!"
  console.assert(userInput.username, "Помилка: ім'я користувача відсутнє!")
  // Перевіремо умову наявності паролю, якщо він відсутній виводимо "Помилка: пароль відсутній!"
  console.assert(userInput.password, "Помилка: пароль відсутній!");
  // Перевірка довжини паролю чи менше вона ніж 8,якщо ні виводимо повідомлення про потенційну проблему з текстом "Попередження: пароль має бути довшим за 8 символів!"
  if (userInput.password.length <= 8) console.warn("Попередження: пароль має бути довшим за 8 символів!")
}
console.log("Завдання: 8 ==============================");
validateUserInput({ username: "alex", password: "pass" });
// Виведе в консоль:
// Попередження: пароль має бути довшим за 8 символів!


// Завдання 9
/** Функція `calculateTotalPrice` обчислює загальну вартість товарів та логує час виконання.
 * products - Масив об'єктів товарів з властивостями `price` та `title`. */
function calculateTotalPrice(products) {
  // Початок вимірювання часу
  console.time('Time to do function');
  // Створення змінної total яка буде нашою загальную ціною, початкове значення нуль
  let result = 0;
  // Перебираємо кожен об'єкт товару та додаємо ціну товару до загальної вартості
  for (let item of products) {
    result += item.price;
  }
  // Виведення загальної вартості товарів у форматі "Загальна вартість товарів:", total
  console.log("Загальна вартість товарів: ", result)
  // Зупинка вимірювання та виведення часу
  console.timeEnd('Time to do function');
}
console.log("Завдання: 9 ==============================");
const products = [
  { title: "Телефон", price: 1000 },
  { title: "Ноутбук", price: 2000 },
  { title: "Планшет", price: 500 },
];
calculateTotalPrice(products);
// Виведе
// Загальна вартість товарів: 3500
// calculateTotalPrice: 0.994ms (час може відрізнятись)


// Завдання 10
/** Функція `countVowelsAndConsonants` пораховує кількість голосних і приголосних літер у слові.
 *  word - слово, для якого потрібно порахувати кількість літер. */
function countVowelsAndConsonants(word) {
  // Створюємо рядок де будуть всі голосні "aeiou"
  const vowel = 'aeiouy';
  // Перебираємо кожну літеру у слові за допомогою for of
  // Перетворюємо літеру на малу літеру для порівняння
  let checkedWord = word.toLowerCase();
  const letterArray = word.split('');
  // let vowelCount = 0;
  // let consonantsCount = 0;
  for (let item of letterArray) {
    // Перевіряємо, чи є літера в нашому рядку з голосними, якщо так, то виводимио лічильник голосних, інакше приголосних  
    vowel.includes(item) ? console.count('vowel') : console.count('consonant');
  }
  //vowelCount += 1 : consonantsCount += 1
  // Скидаємо лічильники
  console.countReset('vowel')
  console.countReset('consonant')
}
console.log("Завдання: 10 ==============================");
countVowelsAndConsonants("HelloWorld!");



// CONSOLE object
// сам об'єкт консоль повертає undefined
// console.log(console.log('hello'));

// console.error('Помилка, змінна а має бути 5');
// console.exception('Помилка, змінна а має бути 5'); виводить непередбачуванні помилки
// console.info('message'); виводить звичайне повідомлення
// console.warn('Повідомлення про потенційні проблеми'); повідомлення про можливі помилки
// console.log('повідомлення для відстеження роботи програми');
// console.debug('повідомлення для виведення додаткових деталей налаштування програми')

// GROUP, групування можуть бути вкладеними
// console.group('group of messages');
// console.log('test message 1');
// console.log('test message 2');
// console.groupEnd();

// GROUPCOLLAPSED - відмінність від простого групування в тому що це при виводі в консоль браузера не розгортає групу автоматично, це потрібно робити потім вручну
// console.groupCollapsed('group of cars');
// console.log('test car 1');
// console.log('test car 2');
// console.groupEnd();

// Time(label) - метод для вимірвання часу Використовується з timeLog(label) & timeEnd(label)

// count(label) - метод для рахування кількості операцій/виводів. Використовується з countReset(label)
// console.count('counter');
// console.timeEnd('Timer'); // start at js:1
// console.countReset('counter');

// trace - відстежування стеку виконання або помилок
// const test1 = () => console.trace('Hello Dmytro');
// const test2 = () => test1();
// const test3 = () => test2();
// test3();

// table - виведення даних в табличній формі
// const data = [
//   { name: 'Dmytro', city: 'Kyiv', age: 46 },
//   { name: 'Oleksandr', city: 'Khmelnytskyi', age: 50 }
// ];
// console.table(data);
// console.table(data, ['city', 'age']);

// assert - порівняння умови та виведення повідомлення
// const a = 101;
// const b = 10;
// console.assert(a === b, 'they are not equal') // виведе повідомлення лише якщо умова не виконується

// clear - очищає консоль від всіх повідомлень
// стилізація виводу %c - всередині лапок перед текстом вставити %c і потмі текст повідомлення, стилі прописати одним рядком через ;
// console.log('%cDmytro Manankin', "color: orange; background-color: lightgreen");