/* eslint-disable no-console -- Needed for testing */
import {extractErrorMessage} from '../src';

describe('A function for extracting error messages', () => {
    it.each<[any, string|undefined, string]>([
        [new Error('Error message.'), undefined, 'Error message.'],
        [new Error(''), undefined, 'Unknown error'],
        [new Error(''), 'Custom default message', 'Custom default message'],
        ['foo', undefined, 'foo'],
        ['', undefined, 'Unknown error'],
        [null, undefined, 'Unknown error'],
        [null, 'Custom default message', 'Custom default message'],
        [true, undefined, 'Unknown error'],
        [{}, undefined, 'Unknown error'],
    ])('should extract the message of the error %p as "%s"', (
        error: any,
        defaultMessage: string | undefined,
        message: string,
    ) => {
        expect(extractErrorMessage(error, defaultMessage)).toBe(message);
    });
});
