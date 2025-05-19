import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names and Tailwind CSS classes.
 * This utility merges Tailwind classes properly, resolving conflicts
 * where later classes override earlier ones.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number as a currency string.
 */
export function formatCurrency(
  amount: number,
  currency: string = "USD",
  locale: string = "en-US"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}

/**
 * Formats a date as a string according to the specified format.
 */
export function formatDate(
  date: Date | string,
  options: Intl.DateTimeFormatOptions = { 
    year: "numeric", 
    month: "long", 
    day: "numeric" 
  },
  locale: string = "en-US"
): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

/**
 * Truncates a string if it exceeds the maximum length.
 */
export function truncateString(str: string, maxLength: number = 50): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + "...";
}

/**
 * Creates a delay using a Promise.
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Generates a random string of the specified length.
 */
export function generateRandomString(length: number = 8): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Capitalizes the first letter of a string.
 */
export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Checks if a value is null or undefined.
 */
export function isNullOrUndefined(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

/**
 * Creates a debounced function that delays invoking the provided function
 * until after the specified wait time has elapsed since the last time it was invoked.
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout);
    
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
}

/**
 * Generate a testimonial slider class based on the current slide index
 * This helps avoid inline styles for the testimonial slider
 */
export function getTestimonialSliderClass(currentSlide: number): string {
  const translateClasses = [
    'translate-x-0',           // slide 0
    '-translate-x-full',       // slide 1
    '-translate-x-[200%]',     // slide 2
    '-translate-x-[300%]',     // slide 3
    '-translate-x-[400%]',     // slide 4
    '-translate-x-[500%]',     // slide 5
    '-translate-x-[600%]',     // slide 6
    '-translate-x-[700%]',     // slide 7
    '-translate-x-[800%]',     // slide 8
    '-translate-x-[900%]',     // slide 9
  ];
    return translateClasses[currentSlide] || 'translate-x-0';
}

/**
 * Generate a progress class based on the current value
 * This helps avoid inline styles for progress indicators
 */
export function getProgressClass(value: number | undefined): string {
  const normalizedValue = value || 0;
  // Round to the nearest 10
  const roundedValue = Math.round(normalizedValue / 10) * 10;
  
  return `progress-${roundedValue}`;
}
