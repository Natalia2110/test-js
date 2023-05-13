// const value = 27.5;

// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));

// ========================================

// Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// ==================================================

// Отрефактори код так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null. В іншому випадку має присвоюватися значення defaultValue. Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false. Використовуй оператор ?? (nullish coalescing operator).

// const incomingValue = null;
// const defaultValue = 3;
// const value = incomingValue ?? defaultValue;
// console.log(value);

//! =====================================================

// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?". Якщо користувач вводить ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

// const nameJavaScript = prompt ("Яка офіційна назва JavaScript?");

// if( nameJavaScript === "ECMAScript") {
//     alert ("Правильно!");
// } else {
//     alert ("Не знаєте? ECMAScript!")
// }
// * ===================================================

// const hours = 14;
// const minutes = 26;
// let timestring;

// console.log(timestring = minutes > 0 ? `${hours} г. ${minutes} хв.` : `${hours} г.`);

// * ===================================================

// Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо у prompt користувач ввів число більше нуля. Якщо було введено нуль, виводь в консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі повинен бути рядок "Це негативне число".

// const userInput = prompt('Введіть число');

// if (userInput > 0 ) {
//     alert("Це позитивне число");
// } else if (userInput == 0 ) {
//     alert ("Це нуль");
// } else { alert ("Це негативне число");}

// * ===================================================
// Напиши скрипт, який порівнює числа у змінних a та b. Якщо обидва значення більше 100, то виведи в консоль максимальне з них. В протилежному випадку у консолі повинна бути сума значення b та числа 512.

// const a = 20;
// const b = 170;

// if (a + b > 100) {
//     console.log(Math.max(a, b));
// } else {
//     console.log(b + 512);
// }

// (a + b > 100) ? console.log(Math.max(a, b)) : console.log(b + 512);

// * ===================================================

// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ. Використовуй конструкцію if...else.

// let link = 'https://my-site.com/about';
// // Пиши код нижче за цей рядок

// if (link.endsWith("/")) {
//     link = link;
// } else {
//     link = `${link+"/"}`;
// }
// // Пиши код вище за цей рядок
// console.log(link);

// * ===================================================
// Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй конструкцію if...else.

// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 день - виведи рядок "Завтра"
// Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата у майбутньому"
// const daysUntilDeadline = 5;

// switch (daysUntilDeadline) {
//     case 0:
//         console.log("Сьогодні");
//         break;
    
//     case 1:
//         console.log("Завтра");
//         break;

//     case 2:
//         console.log("Післязавтра");
//         break;

//     default:
//         console.log("Дата у майбутньому");
       
// }

// * ===================================================

// Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5.

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i +=1) {
//     if(i % 3 === 0) console.log(i);
    
// }

// for (let i = min; i <= max; i += 1) {
//       if (i % 5 === 0) console.log(i);
//     }
    
// const title = "How to become a JUNIOR developer for TWO WEEKS";

// console.log(title.toLowerCase());
// const newTitle = [title.toLowerCase().split(" ")];
//  console.log(newTitle);

// const slugTitle = newTitle.join("-");
// console.log(slugTitle)

// * ============================================

// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.
// const genres = ["Jazz", "Blues"];

// genres.push("Рок-н-рол");

// console.log(genres);
// const lastElement = genres.length - 1;

// console.log(genres[lastElement]);

// console.log(genres.shift());

// genres.unshift("Country", "Reggae");

// console.log(genres);

// * ============================================

// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

// const values = '8 11';
// const valuesArray = values.split(" ");

// const a = Number(valuesArray[0]);
// const b = Number(valuesArray[1]);

// const square = a * b;

// console.log(square);
    
// * ============================================

// Напиши скрипт для перебору масиву fruits циклом for. 
// Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: 
// значення_елемента. Нумерація елементів повинна починатися з 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//     const fruitsElement = fruits[i];

//     console.log(fruitsElement);
// }

// * ============================================
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.

// const string = 'Welcome to the future';

// const newString = string.split(" ");

// console.log(newString);

// newString.shift();
// newString.pop();

// console.log(newString);
// * ============================================

// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.

// const string = 'Welcome to the future';

// const newString = string.split("");
// console.log(newString);

// let newStringWelcome = [];

// for (let i = 0; i < newString.length; i += 1) {

//     newStringWelcome.unshift(newString[i]);
// }

// console.log(newStringWelcome);

// newStringWelcome = newStringWelcome.join("");

// console.log(newStringWelcome);

// * ============================================

// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// for (let i = 0; i < langs.length - 1; i += 1) {

//    for (let j = i + 1; j < langs.length; j += 1) {

//     if (langs[i] > langs[j]) {

//         let temp = langs[i];
//         langs[i] = langs[j];
//         langs[j] = temp;
       
//         }
//     }
    
// }
   
// console.log(langs);

// * ============================================

// Напиши скрипт пошуку найменшого числа у масиві. 
// Код повинен працювати для будь-якого масиву чисел. 
// Використовуй цикл для розв'язання задачі.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];

// for ( let i = 0; i < numbers.length; i +=1) {

//     if (numbers[i] < min) {

//         min = numbers[i];
//     }
// }

// console.log(min); // 1

// * ============================================

// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. 
// Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;


// function calcBMI(weight, height) {

//     weight = Number(weight.replace(",", "."));
//     height = Number(height.replace(",", "."));

//     const result = weight / (height * height);
//     return result.toFixed(1);

    
// }

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8

// * ============================================

// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

// function min(a,b) {

//     if (a < b) {
//         return a;
//     } 
//     return b;
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// * ============================================

// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, 
// значення яких будуть передані до параметра dimensions у вигляді рядка. 
// Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {

//     const dimensionsArea = dimensions.split(" ");
//     console.log(dimensionsArea);

//     const result = Number(dimensionsArea[0] * dimensionsArea[1]);

//     return result;
// }

// console.log(getRectArea('8 11'));

// * ============================================

// Напиши скрипт, який для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
// Код
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// for (const key in user) {

//     console.log(`${key}: ${user[key]}`);
// }

// for (const key of Object.keys(user)) {
//       console.log(`${key}: ${user[key]}`);
//     }
    
// * ==============================================

// У нас є об'єкт, де зберігаються зарплати нашої команди. 
// Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum. 
// Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.

// Код
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 110,
// };

// let sum = 0;

// for (const key in salaries) {

//     sum += salaries[key];
// }
// console.log(sum)

// * ==============================================

// Напишіть функцію calcTotalPrice(stones, stoneName), 
// яка приймає масив об'єктів та рядок з назвою каменю. 
// Функція рахує і повертає загальну вартість каміння з таким ім'ям, 
// ціною та кількістю з об'єкта

// Код
// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {

//     for (const stone of stones) {
//         if (stone.name === stoneName) {
//             return stone.price * stone.quantity;
//         }  
//     }
//     return `Камінь ${stoneName} не знайдено`;

// }
// const total = calcTotalPrice(stones, "Сапфір");

// console.log(total);


// * ==============================================

// * ==============================================


// Напиши скрипт управління особистим кабінетом інтернет банку. 
// Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

//  Типів транзакцій всього два.
//   Можна покласти чи зняти гроші з рахунку.

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

// const TRANSACTIONS = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
//   createTransaction(amount, type) {
//     return {amount, 
//             type,
//             id: this.transactions.length,
//     }
//   },

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
//   deposit(amount) {
    
//     const transaction = this.createTransaction(amount, TRANSACTIONS.DEPOSIT);
//     this.transactions.push(transaction);
//     this.balance +=amount;
//   },

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */

//   withdraw(amount) {
   
   
//     if (amount > this.balance) {
//         console.error(`зняття ${amount} грн. не можливе, недостатньо коштів`);
//         return;
//     }
//     const transaction = this.createTransaction(amount, TRANSACTIONS.WITHDRAW);
//     this.transactions.push(transaction);
//     this.balance -= amount;
//   },

  /*
   * Метод повертає поточний баланс
   */
//   getBalance() {
//     return this.balance;
//   },

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//         if (id === transaction.id) {
//             return transaction;
//         }
//     }

//   },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
//   getTransactionTotal(type) {
//     let sum = 0
//     for (const transaction of this.transactions) {
        
//         if (type === transaction.type) {
//             sum += transaction.amount;
//         } 
//     }
//     return sum;
//   },
// };

// console.log(account.createTransaction(300, TRANSACTION.DEPOSIT));
// console.log(account.balance);

// account.deposit(500);
// account.deposit(100);
// account.withdraw(100);
// account.withdraw(100);
// account.withdraw(600);
// console.log(account.transactions);
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(2));
// console.log(account.getTransactionTotal(TRANSACTIONS.WITHDRAW));
// console.log(account.getTransactionTotal(TRANSACTIONS.DEPOSIT));


// !=============================================================================