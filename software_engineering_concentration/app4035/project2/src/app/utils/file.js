/**
 * Calculate the size of a Base64-encoded string in bytes.
 * Removes the data URL prefix if present.
 * @param {string} base64String - The Base64 encoded string.
 * @returns {number} The size in bytes.
 */
export function getBase64FileSize(base64String) {
    // If the string contains a data URL prefix, remove it.
    const cleaned = base64String.includes(',') ? base64String.split(',')[1] : base64String;
    // Calculate size: (length * 3/4) minus padding (if any)
    const padding = (cleaned.endsWith('==') ? 2 : cleaned.endsWith('=') ? 1 : 0);
    return Math.floor((cleaned.length * 3) / 4) - padding;
}
