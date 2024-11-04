import {Log, Logger} from './logger';
import {extractErrorMessage} from './utilities';

/**
 * A logger that stores all logs in memory.
 */
export class MultiLogger<T extends Log = Log> implements Logger<T> {
    private readonly loggers: Array<Logger<T>> = [];

    public constructor(loggers: Array<Logger<T>>) {
        this.loggers = loggers;
    }

    public log(log: T): void {
        const errors: Error[] = [];

        for (const logger of this.loggers) {
            try {
                logger.log(log);
            } catch (error) {
                errors.push(error);
            }
        }

        if (errors.length > 0) {
            throw new Error(`[${errors.map(error => extractErrorMessage(error))}]`);
        }
    }
}
