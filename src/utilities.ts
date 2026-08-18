/**
 * Extracts the message from an error of unknown type.
 *
 * @param error The error to extract the message.
 * @param defaultMessage The default message if no message is available.
 *
 * @returns The message or `null` if no message is available.
 *
 * @deprecated use {@link extractErrorDetails}
 */
export function extractErrorMessage(error: unknown, defaultMessage = 'Unknown error'): string {
    if (error instanceof Error && error.message !== '') {
        return error.message;
    }

    if (typeof error === 'string' && error !== '') {
        return error;
    }

    return defaultMessage;
}

/**
 * Extracted details about an error value.
 */
export type ErrorDetails = {
    /** The error message. */
    message: string,

    /** The stack trace of the error, if available. */
    stack?: string,

    /** The details of the error that caused this error, if part of a chain. */
    cause?: ErrorDetails,
};

/**
 * Extracts the details from an error of unknown type.
 *
 * If the error is a non-empty string, the string itself is used as the message.
 * Otherwise, if the error is an `Error` with a non-empty message, its message, stack trace, and cause
 * are extracted; causes are extracted recursively up to a fixed depth, ignoring cycles.
 *
 * @param error The error to extract the details.
 * @param defaultMessage The default message if the error is not a non-empty string or an `Error` with a message.
 *
 * @returns The extracted details, including the stack trace and the cause, when available.
 */
export function extractErrorDetails(error: unknown, defaultMessage = 'Unknown error'): ErrorDetails {
    return extractErrorDetailsAtDepth(error, defaultMessage, 0, []);
}

const MAX_ERROR_CAUSE_DEPTH = 10;

function extractErrorDetailsAtDepth(
    error: unknown,
    defaultMessage: string,
    depth: number,
    ancestors: unknown[],
): ErrorDetails {
    if (typeof error === 'string' && error !== '') {
        return {message: error};
    }

    if (
        typeof error !== 'object'
        || !(error instanceof Error)
        || error.message === ''
    ) {
        return {message: defaultMessage};
    }

    const details: ErrorDetails = {message: error.message};

    if (error.stack !== undefined) {
        details.stack = error.stack;
    }

    ancestors.push(error);

    if (
        error.cause !== undefined
        && depth < MAX_ERROR_CAUSE_DEPTH
        && !ancestors.includes(error.cause)
    ) {
        details.cause = extractErrorDetailsAtDepth(error.cause, defaultMessage, depth + 1, ancestors);
    }

    return details;
}
