import {Log, Logger, LogLevel} from './logger';

/**
 * A logger that writes to the console.
 */
export class ConsoleLogger<T extends Log = Log> implements Logger<T> {
    private readonly console: Console;

    public constructor(targetConsole: Console = console) {
        this.console = targetConsole;
    }

    public log(log: T): void {
        const args = log.details === undefined
            ? [log.message]
            : [log.message, log.details];

        switch (log.level) {
            case LogLevel.DEBUG:
                this.console.debug(...args);

                break;

            case LogLevel.INFO:
                this.console.info(...args);

                break;

            case LogLevel.WARNING:
                this.console.warn(...args);

                break;

            case LogLevel.ERROR:
                this.console.error(...args);

                break;
        }
    }
}
