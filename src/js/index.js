import { resolve } from 'path';
import { reject } from 'q';
import '../scss/style.scss';

// Promise Задание 1
const delay = ms => {
  const DELAY = ms;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(DELAY);
      reject();
    }, DELAY);

    return resolve;
  });

  // Подумати над рішенням
  // setTimeout(() => {Promise.resolve(ms)}, ms);
};
const logger = time => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger);

// Promise Задание 2
