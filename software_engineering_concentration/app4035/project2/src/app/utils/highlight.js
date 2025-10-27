export function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function highlightText(text, query, theme) {
    if (!query.trim() || typeof text !== 'string') return text;

    const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
    const highlightColor = theme.palette.mode === 'dark'
        ? 'rgba(100, 160, 200, 0.4)'  // Dark mode
        : 'rgba(255, 240, 80, 0.4)';  // Light mode

    return text.split(regex).map((part, index) =>
        index % 2 === 1 ? (
            <span key={index} style={{
                backgroundColor: highlightColor,
                borderRadius: '3px',
                padding: '0 2px',
                boxShadow: `0 2px 4px ${theme.palette.mode === 'dark'
                    ? 'rgba(0,0,0,0.2)'
                    : 'rgba(0,0,0,0.1)'}`,
                fontWeight: 500
            }}>
                {part}
            </span>
        ) : part
    );
}
