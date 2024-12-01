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
