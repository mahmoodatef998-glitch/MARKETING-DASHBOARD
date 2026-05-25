import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, currency: string = "AED"): string {
  return `${price} ${currency}`;
}

export function buildWhatsAppUrl(message: string, phone: string = "971XXXXXXXXX"): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

export const WHATSAPP_NUMBER = "971522995639";
export const WHATSAPP_DEFAULT_MSG = "مرحباً بمطعم العناني، أريد الاستفسار عن القائمة 🍽️";

export const RESTAURANT_ADDRESS_AR = "عجمان الراشدية | ابراج الخور\nامام جمعية اسواق عجمان والهوريزون";
export const RESTAURANT_ADDRESS_EN = "Al Rashidiya, Al Khor Towers, Ajman\nOpposite Ajman Co-op & Horizon";
export const RESTAURANT_PHONE = "+971 52 299 5639";
