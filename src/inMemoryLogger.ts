import {Log, Logger} from './logger';

/**
 * A logger that saves all logs in memory.
 */
export class InMemoryLogger<T extends Log = Log> implements Logger<T> {
    private readonly logs: T[] = [];

    public log(log: T): void {
        this.logs.push(log);
    }

    /**
     * Returns all received logs.
     */
    public getLogs(): readonly T[] {
        return this.logs;
    }
}
