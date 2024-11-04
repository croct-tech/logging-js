import {Log, Logger, LogLevel} from './logger';

/**
 * A logger that filters specified log levels.
 */
export class FilteredLogger<T extends Log = Log> implements Logger<T> {
    private readonly logger: Logger<T>;

    private readonly levels: LogLevel[];

    public constructor(logger: Logger<T>, levels: LogLevel[]) {
        this.logger = logger;
        this.levels = levels;
    }

    public log(log: T): void {
        if (this.levels.includes(log.level)) {
            this.logger.log(log);
        }
    }
}
