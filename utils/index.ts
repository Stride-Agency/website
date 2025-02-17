import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export default function removeTrailingSlash(str: string): string {
    return str.endsWith('/') ?
        str.slice(0, -1) :
        str;
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatDate(dateString: string, locale: 'de' | 'en'): string {
    const date = new Date(dateString);

    return new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(date);
}

export function slugify(str: string): string {
    return str
        .toLowerCase()
        .normalize("NFD") // Normalize to decompose accents (e.g., é → e, ö → o)
        .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
        .replace(/ß/g, "ss") // Convert "ß" to "ss"
        .replace(/[^a-z0-9 -]/g, "") // Remove all non-alphanumeric characters except spaces and hyphens
        .replace(/\s+/g, "-") // Replace spaces with a single hyphen
        .replace(/-+/g, "-") // Prevent multiple consecutive hyphens
        .trim(); // Trim spaces at the start and end
}
