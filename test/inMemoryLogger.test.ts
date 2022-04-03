import {InMemoryLogger, Log, LogLevel} from '../src';

describe('An in-memory logger', () => {
    it('should log messages', () => {
        const logger = new InMemoryLogger();

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

        for (const log of logs) {
            logger.log(log);
        }

        expect(logger.getLogs()).toEqual(logs);
    });
});
