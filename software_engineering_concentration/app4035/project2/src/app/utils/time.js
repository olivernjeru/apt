export function getEATTimestamp() {
    // Use Intl.DateTimeFormat to format the current time in Africa/Nairobi, UTC+3
    const date = new Date();
    const options = {
        timeZone: 'Africa/Nairobi',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    const formatter = new Intl.DateTimeFormat('en-CA', options);
    const parts = formatter.formatToParts(date);

    const year = parts.find(p => p.type === 'year').value;
    const month = parts.find(p => p.type === 'month').value;
    const day = parts.find(p => p.type === 'day').value;
    const hour = parts.find(p => p.type === 'hour').value;
    const minute = parts.find(p => p.type === 'minute').value;
    const second = parts.find(p => p.type === 'second').value;

    // Construct an ISO-like string with the EAT offset (+03:00)
    return `${year}-${month}-${day}T${hour}:${minute}:${second}+03:00`;
}

export function formatEditedAt(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

    // Always use 24-hour format
    const timeString = date.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    if (diffDays === 0) return `Today ${timeString}`;
    if (diffDays === 1) return `Yesterday ${timeString}`;

    const dateString = date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });

    return `${dateString} ${timeString}`;
}
