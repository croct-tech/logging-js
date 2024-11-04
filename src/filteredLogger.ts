import {Log, Logger, LogLevel} from './logger';

/**
 * A logger that filters specified log levels.
 */
export class FilteredLogger<T extends Log = Log> implements Logger<T> {
    private readonly logger: Logger<T>;

    private readonly levelIndex: number;

    public constructor(logger: Logger<T>, level: LogLevel) {
        this.logger = logger;
        this.levelIndex = Object.values(LogLevel).findIndex(value => value === level);
    }

    public log(log: T): void {
        const index = Object.values(LogLevel).findIndex(value => value === log.level);

        if (index >= this.levelIndex) {
            this.logger.log(log);
        }
    }
}
