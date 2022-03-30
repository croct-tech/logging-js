/* eslint-disable no-console -- Needed for testing */
import {LogLevel} from '../src/logger';
import {ConsoleLogger} from '../src/consoleLogger';

describe('A console logger', () => {
    it('should log to the console', () => {
        jest.spyOn(console, 'debug').mockImplementationOnce(() => {
            // Suppress the console output
        });

        jest.spyOn(console, 'info').mockImplementationOnce(() => {
            // Suppress the console output
        });

        jest.spyOn(console, 'log').mockImplementationOnce(() => {
            // Suppress the console output
        });

        jest.spyOn(console, 'warn').mockImplementationOnce(() => {
            // Suppress the console output
        });

        jest.spyOn(console, 'error').mockImplementationOnce(() => {
            // Suppress the console output
        });

        const logger = new ConsoleLogger();

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

        expect(console.debug).toHaveBeenCalledTimes(1);
        expect(console.debug).toHaveBeenCalledWith(
            'This is a debug message',
            {
                cause: 'This is a cause',
            },
        );

        expect(console.info).toHaveBeenCalledTimes(1);
        expect(console.info).toHaveBeenCalledWith(
            'This is an info message',
            {
                cause: 'This is a cause',
            },
        );

        expect(console.warn).toHaveBeenCalledTimes(1);
        expect(console.warn).toHaveBeenCalledWith(
            'This is a warning message',
            {
                cause: 'This is a cause',
            },
        );

        expect(console.error).toHaveBeenCalledTimes(1);
        expect(console.error).toHaveBeenCalledWith(
            'This is an error message',
            {
                cause: 'This is a cause',
            },
        );
    });

    it('should omit the details if not specified', () => {
        jest.spyOn(console, 'debug').mockImplementationOnce(() => {
            // Suppress the console output
        });

        jest.spyOn(console, 'info').mockImplementationOnce(() => {
            // Suppress the console output
        });

        jest.spyOn(console, 'log').mockImplementationOnce(() => {
            // Suppress the console output
        });

        jest.spyOn(console, 'warn').mockImplementationOnce(() => {
            // Suppress the console output
        });

        jest.spyOn(console, 'error').mockImplementationOnce(() => {
            // Suppress the console output
        });

        const logger = new ConsoleLogger();

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

        expect(console.debug).toHaveBeenCalledTimes(1);
        expect(console.debug).toHaveBeenCalledWith('This is a debug message');

        expect(console.info).toHaveBeenCalledTimes(1);
        expect(console.info).toHaveBeenCalledWith('This is an info message');

        expect(console.warn).toHaveBeenCalledTimes(1);
        expect(console.warn).toHaveBeenCalledWith('This is a warning message');

        expect(console.error).toHaveBeenCalledTimes(1);
        expect(console.error).toHaveBeenCalledWith('This is an error message');
    });
});
