/* eslint-disable no-console -- Needed for testing */
import {ConsoleLogger, LogLevel} from '../src';

describe('A console logger', () => {
    const mockedConsole: jest.MockedObject<Console> = {
        warn: jest.fn().mockName('warn'),
        error: jest.fn().mockName('error'),
        info: jest.fn().mockName('info'),
        debug: jest.fn().mockName('debug'),
    } as jest.MockedObject<Console>;

    it('should log to the console', () => {
        const logger = new ConsoleLogger(mockedConsole);

        logger.log({
            level: LogLevel.DEBUG,
            message: 'This is a debug message',
            details: {
                cause: 'This is a cause',
            },
        });

        logger.log({
            level: LogLevel.INFO,
            message: 'This is an info message',
            details: {
                cause: 'This is a cause',
            },
        });

        logger.log({
            level: LogLevel.WARNING,
            message: 'This is a warning message',
            details: {
                cause: 'This is a cause',
            },
        });

        logger.log({
            level: LogLevel.ERROR,
            message: 'This is an error message',
            details: {
                cause: 'This is a cause',
            },
        });

        expect(mockedConsole.debug).toHaveBeenCalledTimes(1);
        expect(mockedConsole.debug).toHaveBeenCalledWith(
            'This is a debug message',
            {
                cause: 'This is a cause',
            },
        );

        expect(mockedConsole.info).toHaveBeenCalledTimes(1);
        expect(mockedConsole.info).toHaveBeenCalledWith(
            'This is an info message',
            {
                cause: 'This is a cause',
            },
        );

        expect(mockedConsole.warn).toHaveBeenCalledTimes(1);
        expect(mockedConsole.warn).toHaveBeenCalledWith(
            'This is a warning message',
            {
                cause: 'This is a cause',
            },
        );

        expect(mockedConsole.error).toHaveBeenCalledTimes(1);
        expect(mockedConsole.error).toHaveBeenCalledWith(
            'This is an error message',
            {
                cause: 'This is a cause',
            },
        );
    });

    it('should omit the details if not specified', () => {
        const logger = new ConsoleLogger(mockedConsole);

        logger.log({
            level: LogLevel.DEBUG,
            message: 'This is a debug message',
        });

        logger.log({
            level: LogLevel.INFO,
            message: 'This is an info message',
        });

        logger.log({
            level: LogLevel.WARNING,
            message: 'This is a warning message',
        });

        logger.log({
            level: LogLevel.ERROR,
            message: 'This is an error message',
        });

        expect(mockedConsole.debug).toHaveBeenCalledTimes(1);
        expect(mockedConsole.debug).toHaveBeenCalledWith('This is a debug message');

        expect(mockedConsole.info).toHaveBeenCalledTimes(1);
        expect(mockedConsole.info).toHaveBeenCalledWith('This is an info message');

        expect(mockedConsole.warn).toHaveBeenCalledTimes(1);
        expect(mockedConsole.warn).toHaveBeenCalledWith('This is a warning message');

        expect(mockedConsole.error).toHaveBeenCalledTimes(1);
        expect(mockedConsole.error).toHaveBeenCalledWith('This is an error message');
    });
});
