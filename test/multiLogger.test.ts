import {InMemoryLogger, Log, LogLevel} from '../src';
import {MultiLogger} from '../src/multiLogger';

describe('A multi logger', () => {
    const logs: Log[] = [
        {
            level: LogLevel.DEBUG,
            message: 'A debug message',
            details: {
                id: 1,
            },
        },
        {
            level: LogLevel.INFO,
            message: 'An info message',
            details: {
                id: 2,
            },
        },
        {
            level: LogLevel.WARNING,
            message: 'A warning message',
            details: {
                id: 3,
            },
        },
        {
            level: LogLevel.ERROR,
            message: 'An error message',
            details: {
                id: 4,
            },
        },
    ];

    it('should log in the underlying loggers', () => {
        const firstLogger = new InMemoryLogger();
        const secondLogger = new InMemoryLogger();
        const multiLogger = new MultiLogger([firstLogger, secondLogger]);

        for (const log of logs) {
            multiLogger.log(log);
        }

        expect(firstLogger.getLogs()).toEqual(logs);
        expect(secondLogger.getLogs()).toEqual(logs);
    });
});
