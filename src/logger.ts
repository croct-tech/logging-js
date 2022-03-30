import {JsonCompatibleObject} from '@croct/json';

/**
 * Additional information about the log message.
 */
export type LogDetails = JsonCompatibleObject;

/**
 * The severity of the log message.
 */
export enum LogLevel {
    /**
     * Fine-grained messages that provide context to understand the steps leading
     * to errors and warnings.
     */
    DEBUG = 'debug',

    /**
     * Informational messages that highlight the system state and progress.
     */
    INFO = 'info',

    /**
     * Potential issues that might be problems or might not.
     */
    WARNING = 'warning',

    /**
     * Errors that prevent the system from working as intended.
     */
    ERROR = 'error',
}

/**
 * A log message.
 *
 * Specifying a structured additional information type makes providing details required.
 *
 * @template D The structure of the log details.
 */
export type Log<D extends LogDetails = LogDetails> = {
    /**
     * The severity of the log message.
     */
    level: LogLevel,

    /**
     * The log message.
     */
    message: string,
} & (JsonCompatibleObject extends D ? {details?: D} : {details: D});

/**
 * A common interface for loggers.
 */
export interface Logger<D extends LogDetails = LogDetails> {
    /**
     * Logs a message.
     *
     * @param log The log message.
     */
    log(log: Log<D>): void;
}
