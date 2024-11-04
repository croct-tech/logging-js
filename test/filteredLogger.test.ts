import {FilteredLogger, InMemoryLogger, Log, LogLevel} from '../src';

describe('A filtered logger', () => {
    const debugLog: Log = {
        level: LogLevel.DEBUG,
        message: 'A debug message',
        details: {
            id: 1,
        },
    };

    const infoLog: Log = {
        level: LogLevel.INFO,
        message: 'An info message',
        details: {
            id: 2,
        },
    };

    const warningLog: Log = {
        level: LogLevel.WARNING,
        message: 'A warning message',
        details: {
            id: 3,
        },
    };

    const errorLog: Log = {
        level: LogLevel.ERROR,
        message: 'An error message',
        details: {
            id: 4,
        },
    };

    const logs: Log[] = [debugLog, infoLog, warningLog, errorLog];

    it('should filter the specified levels', () => {
        const logger = new InMemoryLogger();
        const filteredLogger = new FilteredLogger(logger, LogLevel.WARNING);

        for (const log of logs) {
            filteredLogger.log(log);
        }

        expect(logger.getLogs()).toStrictEqual([warningLog, errorLog]);
    });
});
