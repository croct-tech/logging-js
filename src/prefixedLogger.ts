import {Log, LogDetails, Logger} from './logger';

/**
 * A logger that prepends a prefix to all log messages.
 */
export class PrefixedLogger<T extends LogDetails = LogDetails> implements Logger<T> {
    /**
     * The logger to which messages are forwarded.
     */
    private readonly logger: Logger;

    /**
     * The prefix to prepend to all log messages.
     */
    private readonly prefix: string;

    /**
     * Constructs a new instance.
     *
     * @param logger The logger to which messages are forwarded.
     * @param prefix The prefix to prepend to all log messages.
     */
    public constructor(logger: Logger, prefix: string) {
        this.logger = logger;
        this.prefix = prefix;
    }

    public log({message, ...log}: Log<T>): void {
        this.logger.log({
            message: `[${this.prefix}] ${message}`,
            ...log,
        });
    }
}
