import {Log, Logger} from './logger';

/**
 * A logger that send logs to multiple loggers.
 */
export class MultiLogger<T extends Log = Log> implements Logger<T> {
    private readonly loggers: Array<Logger<T>> = [];

    public constructor(loggers: Array<Logger<T>>) {
        this.loggers = loggers;
    }

    public log(log: T): void {
        for (const logger of this.loggers) {
            logger.log(log);
        }
    }
}
