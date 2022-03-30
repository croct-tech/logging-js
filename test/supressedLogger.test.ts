/* eslint-disable no-console -- Needed for testing */
import {SuppressedLogger} from '../src/suppressedLogger';
import {Logger, LogLevel} from '../src/logger';

describe('A suppressed logger', () => {
    it('should not log anything', () => {
        const logger: Logger = new SuppressedLogger();

        jest.spyOn(console, 'debug');
        jest.spyOn(console, 'info');
        jest.spyOn(console, 'log');
        jest.spyOn(console, 'warn');
        jest.spyOn(console, 'error');

        logger.log({
            level: LogLevel.INFO,
            message: 'test',
        });

        expect(console.debug).not.toHaveBeenCalled();
        expect(console.info).not.toHaveBeenCalled();
        expect(console.log).not.toHaveBeenCalled();
        expect(console.warn).not.toHaveBeenCalled();
        expect(console.error).not.toHaveBeenCalled();
    });
});
