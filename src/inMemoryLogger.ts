import {Log, LogDetails, Logger} from './logger';

/**
 * A logger that saves all logs in memory.
 */
export class InMemoryLogger<T extends LogDetails = LogDetails> implements Logger<T> {
    private readonly logs: Array<Log<T>> = [];

    public log(log: Log<T>): void {
        this.logs.push(log);
    }

    /**
     * Returns all received logs.
     */
    public getLogs(): ReadonlyArray<Log<T>> {
        return this.logs;
    }
}
