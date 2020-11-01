import { resolve } from 'path';
import { reject } from 'q';
import '../scss/style.scss';

// Promise Задание 1
const delay = ms => {
  const DELAY = ms;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(DELAY);
      reject();
    }, DELAY);

    return resolve;
  });

  return promise;
};

const logger = time => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger);

// Promise Задание 2
