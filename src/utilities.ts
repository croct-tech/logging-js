/**
 * Extracts the message from an error of unknown type.
 *
 * @param error The error to extract the message.
 * @param defaultMessage The default message if no message is available.
 *
 * @returns The message or `null` if no message is available.
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
