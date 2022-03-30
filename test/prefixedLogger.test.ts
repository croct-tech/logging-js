/* eslint-disable no-console -- Needed for testing */
import {Log, Logger, LogLevel} from '../src/logger';
import {PrefixedLogger} from '../src/prefixedLogger';

describe('A prefixed logger', () => {
    it('should prefix the log messages', () => {
        const dumbLogger: Logger = {
            log: jest.fn(),
        };

        const logger = new PrefixedLogger(dumbLogger, 'Test');

        const log: Log = {
            level: LogLevel.INFO,
            message: 'Example message',
            details: {
                additional: 'info',
            },
        };

        logger.log(log);

        expect(dumbLogger.log).toHaveBeenCalledWith({
            ...log,
            message: '[Test] Example message',
        });
    });
});
