/* eslint-disable no-console -- This is indeed a console logger */
import {Log, LogDetails, Logger, LogLevel} from './logger';

/**
 * A logger that writes to the console.
 */
export class ConsoleLogger<T extends LogDetails = LogDetails> implements Logger<T> {
    public log(log: Log<T>): void {
        const args = log.details === undefined
            ? [log.message]
            : [log.message, log.details];

        switch (log.level) {
            case LogLevel.DEBUG:
                console.debug(...args);
                break;

            case LogLevel.INFO:
                console.info(...args);
                break;

            case LogLevel.WARNING:
                console.warn(...args);
                break;

            case LogLevel.ERROR:
                console.error(...args);
                break;
        }
    }
}
