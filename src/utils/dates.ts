import { format, isBefore, parseISO } from 'date-fns';

export function formatDate(
  isoString: string,
  dateFormat = 'do MMMM, yyyy',
): string {
  return format(parseISO(isoString), dateFormat);
}

export function dateIsBefore(dateA: string, dateB = new Date()): boolean {
  return isBefore(new Date(dateA), dateB);
}

export function convertToSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

export function convertToSentenceCase(text: string): string {
  return (
    text.charAt(0).toUpperCase() +
    text.slice(1).toLowerCase().replace(/-/g, ' ')
  );
}
