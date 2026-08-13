import {ErrorDetails, extractErrorDetails, extractErrorMessage} from '../src';

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

describe('A function for extracting error details', () => {
    it.each<[unknown, string|undefined, ErrorDetails]>([
        ['Error message.', undefined, {message: 'Error message.'}],
        ['', undefined, {message: 'Unknown error'}],
        ['', 'Custom default message', {message: 'Custom default message'}],
        [null, undefined, {message: 'Unknown error'}],
        [null, 'Custom default message', {message: 'Custom default message'}],
        [true, undefined, {message: 'Unknown error'}],
        [{}, undefined, {message: 'Unknown error'}],
        [new Error(''), undefined, {message: 'Unknown error'}],
        [new Error(''), 'Custom default message', {message: 'Custom default message'}],
    ])('should extract the details of the error %p as %j', (
        error: unknown,
        defaultMessage: string | undefined,
        details: ErrorDetails,
    ) => {
        expect(extractErrorDetails(error, defaultMessage)).toEqual(details);
    });

    it('should extract the message and stack of an error', () => {
        const error = new Error('Error message.');

        error.stack = 'Error: Error message.\n    at <anonymous>:1:1';

        expect(extractErrorDetails(error)).toEqual({
            message: 'Error message.',
            stack: 'Error: Error message.\n    at <anonymous>:1:1',
        });
    });

    it('should omit the stack when the error has none', () => {
        const error = new Error('Error message.');

        delete error.stack;

        expect(extractErrorDetails(error)).toEqual({message: 'Error message.'});
    });

    it('should recursively extract the details of the cause', () => {
        const cause = new Error('Cause message.');
        const error = new Error('Error message.');

        cause.stack = 'Error: Cause message.\n    at <anonymous>:1:1';
        error.stack = 'Error: Error message.\n    at <anonymous>:2:2';
        error.cause = cause;

        expect(extractErrorDetails(error)).toEqual({
            message: 'Error message.',
            stack: 'Error: Error message.\n    at <anonymous>:2:2',
            cause: {
                message: 'Cause message.',
                stack: 'Error: Cause message.\n    at <anonymous>:1:1',
            },
        });
    });

    it('should extract the message of a string cause', () => {
        const error = new Error('Error message.');

        error.stack = 'Error: Error message.\n    at <anonymous>:1:1';
        error.cause = 'Cause message.';

        expect(extractErrorDetails(error)).toEqual({
            message: 'Error message.',
            stack: 'Error: Error message.\n    at <anonymous>:1:1',
            cause: {message: 'Cause message.'},
        });
    });

    it.each<[unknown, string|undefined, string]>([
        [new Error(''), undefined, 'Unknown error'],
        [new Error(''), 'Custom default message', 'Custom default message'],
        [{}, undefined, 'Unknown error'],
        [{}, 'Custom default message', 'Custom default message'],
    ])('should fall back to "%s" for the unsupported cause %p', (
        cause: unknown,
        defaultMessage: string | undefined,
        causeMessage: string,
    ) => {
        const error = new Error('Error message.');

        error.cause = cause;

        expect(extractErrorDetails(error, defaultMessage).cause).toEqual({message: causeMessage});
    });
});
