import Pingerchips from './pingerchips';
import { stringify } from './utils/collections';

class Logger {
  debug(...args: any[]) {
    this.log(this.globalLog, args);
  }

  warn(...args: any[]) {
    this.log(this.globalLogWarn, args);
  }

  error(...args: any[]) {
    this.log(this.globalLogError, args);
  }

  private globalLog = (message: string) => {
    if (global.console && global.console.log) {
      global.console.log(message);
    }
  };

  private globalLogWarn(message: string) {
    if (global.console && global.console.warn) {
      global.console.warn(message);
    } else {
      this.globalLog(message);
    }
  }

  private globalLogError(message: string) {
    if (global.console && global.console.error) {
      global.console.error(message);
    } else {
      this.globalLogWarn(message);
    }
  }

  private log(
    defaultLoggingFunction: (message: string) => void,
    ...args: any[]
  ) {
    var message = stringify.apply(this, arguments);
    if (Pingerchips.log) {
      Pingerchips.log(message);
    } else if (Pingerchips.logToConsole) {
      const log = defaultLoggingFunction.bind(this);
      log(message);
    }
  }
}

export default new Logger();
