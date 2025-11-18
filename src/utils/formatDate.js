// lib/formatRange.js
export function formatRange(start, end) {
  const options = { month: 'short', day: 'numeric' };
  const startStr = start.toLocaleDateString(undefined, options);
  const endStr = end.toLocaleDateString(undefined, options);

  return `${startStr} – ${endStr}`;
}




// utils/date.js
export function formatDateUTC(dateString) {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-GB', {
        timeZone: 'UTC',
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
}





export function formatDateTimeIST(dateString) {
  if (!dateString) return '';

  const date = new Date(dateString);

  return date.toLocaleString('en-GB', {
    timeZone: 'Asia/Kolkata', // ✅ IST
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true, // shows AM/PM
  });
}

export function formatDateTimeUTC(dateString) {
  if (!dateString) return '';
  return new Date(dateString).toLocaleString('en-GB', {
    timeZone: 'UTC',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
     second: '2-digit', 
    hour12: true, // ✅ shows AM/PM
  });
}
