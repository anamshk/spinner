let spinner = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ','\r|  ', '\r/  ', '\r-  ', '\r|  ', '\n'];
let i = 0;
const interval = setInterval(() => {
  process.stdout.write(spinner[i]);
  i++;
  if (i === spinner.length) {
    clearInterval(interval);
  }
}, 500);
