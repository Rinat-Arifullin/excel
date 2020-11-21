console.log('Module.js');

async function start() {
  return await Promise.resolve('async working');
}
start().then((res) => console.log(res));
