class Logger {
  log(...args) {
    if (__DEV__) {
      console.log(...args);
    }
  }
  warn(...args) {
    if (__DEV__) {
      console.log(...args);
    }
  }
}

export default new Logger();
