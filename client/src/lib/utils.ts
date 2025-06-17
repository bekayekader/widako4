import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: string, listingType: string): string {
  const numPrice = parseFloat(price);
  
  if (listingType === "location") {
    return `${numPrice.toLocaleString('fr-FR')} €/mois`;
  }
  
  if (numPrice >= 1000000) {
    return `${(numPrice / 1000000).toFixed(1)}M €`;
  }
  
  if (numPrice >= 1000) {
    return `${(numPrice / 1000).toFixed(0)}K €`;
  }
  
  return `${numPrice.toLocaleString('fr-FR')} €`;
}

export function formatArea(area: number): string {
  return `${area} m²`;
}

export function getPropertyTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    'maison': 'Maison',
    'appartement': 'Appartement',
    'villa': 'Villa',
    'studio': 'Studio',
  };
  return labels[type] || type;
}

export function getListingTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    'vente': 'À vendre',
    'location': 'À louer',
  };
  return labels[type] || type;
}
