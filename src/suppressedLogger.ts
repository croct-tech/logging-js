import {Log, Logger} from './logger';

/**
 * A logger that suppresses all logging.
 */
export class SuppressedLogger<T extends Log = Log> implements Logger<T> {
    public log(): void {
        // suppress debug logs
    }
}
