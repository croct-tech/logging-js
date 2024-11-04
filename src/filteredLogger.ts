import {Log, Logger, LogLevel} from './logger';

/**
 * A logger that filters specified log levels.
 */
export class FilteredLogger<T extends Log = Log> implements Logger<T> {
    private readonly logger: Logger<T>;

    private readonly levelIndex: number;

    private static readonly logLevels: LogLevel[] = [LogLevel.DEBUG, LogLevel.INFO, LogLevel.WARNING, LogLevel.ERROR];

    public constructor(logger: Logger<T>, level: LogLevel) {
        this.logger = logger;
        this.levelIndex = FilteredLogger.logLevels.indexOf(level);
    }

    public log(log: T): void {
        const index = FilteredLogger.logLevels.indexOf(log.level);

        if (index >= this.levelIndex) {
            this.logger.log(log);
        }
    }
}
