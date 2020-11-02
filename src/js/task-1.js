// Promise Задание 1
const delay = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);

    return resolve;
  });

  // Подумати над рішенням для return Promise.resolve
  // setTimeout(() => {return Promise.resolve(ms)}, ms);
};
const logger = time => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger);
