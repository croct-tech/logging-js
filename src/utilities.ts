/**
 * Extracts the message from an error of unknown type.
 *
 * @param error The error to extract the message.
 *
 * @returns The message or `null` if no message is available.
 */
export function extractErrorMessage(error: unknown): string|null {
    if (error instanceof Error && error.message !== '') {
        return error.message;
    }

    if (typeof error === 'string' && error !== '') {
        return error;
    }

    return null;
}

/**
 * This method formats an error message for use as the main message.
 *
 * @param error The error to format.
 *
 * @returns The message with the first letter capitalized or "Unknown error" no message is
 * available.
 */
export function formatErrorMessage(error: unknown): string {
    const message = extractErrorMessage(error) ?? 'Unknown error';

    return message.charAt(0).toUpperCase() + message.slice(1);
}

/**
 * This method formats an error message for use as a complement to the main message.
 *
 * This is usually used for combining messages together to form a single message,
 * e.g `Failed to load resource: the request failed (cause)`.
 *
 * @param error The error to format.
 *
 * @returns The message with the first letter in lower case or "Unknown cause" if no message
 * is available.
 */
export function formatErrorCause(error: unknown): string {
    const message = extractErrorMessage(error) ?? 'Unknown cause';

    return message.charAt(0).toLowerCase() + message.slice(1);
}
