/* eslint-disable no-console -- Needed for testing */

import {extractErrorMessage, formatErrorCause, formatErrorMessage} from '../src';

describe('A function for extracting error messages', () => {
    it.each([
        [new Error('Error message.'), 'Error message.'],
        [new Error(''), null],
        ['foo', 'foo'],
        ['', null],
        [null, null],
        [true, null],
        [{}, null],
    ])('should extract the message of the error %p as "%s"', (error: any, message: string) => {
        expect(extractErrorMessage(error)).toBe(message);
    });
});

describe('A function for formatting error messages', () => {
    it.each([
        [new Error('Error message.'), 'Error message.'],
        [new Error(''), 'Unknown error'],
        ['foo', 'Foo'],
        ['', 'Unknown error'],
        [null, 'Unknown error'],
    ])('should format the message of the error %p as "%s"', (error: any, message: string) => {
        expect(formatErrorMessage(error)).toBe(message);
    });
});

describe('A function for formatting error causes', () => {
    it.each([
        [new Error('Error message.'), 'error message.'],
        [new Error(''), 'unknown cause'],
        ['Foo', 'foo'],
        ['', 'unknown cause'],
        [null, 'unknown cause'],
    ])('should format the cause of the error %p as "%s"', (error: any, message: string) => {
        expect(formatErrorCause(error)).toBe(message);
    });
});
