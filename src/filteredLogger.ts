import {Log, Logger, LogLevel} from './logger';

/**
 * A logger that filters specified log levels.
 */
export class FilteredLogger<T extends Log = Log> implements Logger<T> {
    private readonly logger: Logger<T>;

    private readonly level: LogLevel;

    private static readonly logLevelMap: Record<LogLevel, number> = {
        [LogLevel.DEBUG]: 0,
        [LogLevel.INFO]: 1,
        [LogLevel.WARNING]: 2,
        [LogLevel.ERROR]: 3,
    };

    public constructor(logger: Logger<T>, level: LogLevel) {
        this.logger = logger;
        this.level = level;
    }

    public log(log: T): void {
        if (FilteredLogger.logLevelMap[log.level] >= FilteredLogger.logLevelMap[this.level]) {
            this.logger.log(log);
        }
    }
}
