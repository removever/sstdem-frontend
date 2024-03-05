const padZero = (value) => value.toString().padStart(2, '0');

export function formatDate(value, format = 'dd/MM/yyyy') {
  if (value === null || value === undefined) return '-'

  const date = typeof value === 'string' ? new Date(value) : value

  if (date.toString() === 'Invalid Date') return '-'

  const formatTokens = {
    'yyyy': () => date.getFullYear().toString(),
    'MM': () => padZero(date.getMonth() + 1),
    'dd': () => padZero(date.getDate()),
    'HH': () => padZero(date.getHours()),
    'mm': () => padZero(date.getMinutes()),
    'ss': () => padZero(date.getSeconds()),
  };

  let formattedDate = format;

  for (const key in formatTokens) {
    if (format.includes(key)) {
      formattedDate = formattedDate.replace(key, formatTokens[key]())
    }
  }

  return formattedDate;
}

export function addDays(value, day) {
  const date = new Date(value)

  date.setDate(date.getDate() + day);

  return date
}