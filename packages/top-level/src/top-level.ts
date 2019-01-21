import { MyModel } from '@nick/shared';

export const handler = () => {
  const x = new MyModel();
  debugger;
  console.log(x.doSomething());
};

const maxNumberOfIterations = 100;
let iterationCount = 0;

const timerId = setInterval(() => {
  if (++iterationCount >= maxNumberOfIterations) {
    clearInterval(timerId);
  }
  handler();
}, 1000);
