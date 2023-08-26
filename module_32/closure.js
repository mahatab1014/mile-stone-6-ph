function stopWatch() {
  let time = 0;
  return function () {
    time++;
    return time;
  };
}
const ctime = stopWatch();
console.log(ctime())
console.log(ctime())
console.log(ctime())