import { resolve } from 'path';
import { reject } from 'q';
import '../scss/style.scss';

// Promise Задание 1
// const delay = ms => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(ms);
//     }, ms);

//     return resolve;
//   });

//   // Подумати над рішенням для return Promise.resolve
//   // setTimeout(() => {return Promise.resolve(ms)}, ms);
// };
// const logger = time => console.log(`Resolved after ${time}ms`);

// delay(2000).then(logger);
// delay(1000).then(logger);
// delay(1500).then(logger);

// Promise Задание 2
// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: true },
//   { name: 'Lux', active: false },
// ];

// const toggleUserState = (allUsers, userName) => {
//   return Promise.resolve(
//     allUsers.map(user =>
//       user.name === userName ? { ...user, active: !user.active } : user,
//     ),
//   );
// };

// const logger = updatedUsers => console.table(updatedUsers);

// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux').then(logger);

// Promise Задание 3
