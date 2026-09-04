import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ayaanahmed.dev"