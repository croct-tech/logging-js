import {LogDetails, Logger} from './logger';

/**
 * A logger that suppresses all logging.
 */
export class SuppressedLogger<T extends LogDetails = LogDetails> implements Logger<T> {
    public log(): void {
        // suppress debug logs
    }
}
