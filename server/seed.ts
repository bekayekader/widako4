import { db } from "./db";
import { properties } from "@shared/schema";

const sampleProperties = [
  {
    title: "Villa Moderne avec Piscine",
    description: "Magnifique villa contemporaine avec piscine, jardin paysager et finitions haut de gamme. Vue panoramique sur la ville.",
    price: "450000",
    area: 280,
    location: "Californie",
    city: "Casablanca",
    propertyType: "villa",
    listingType: "vente",
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    features: ["Piscine", "Jardin", "Garage", "Climatisation", "Sécurité"],
    isFeatured: true,
    isAvailable: true,
  },
  {
    title: "Appartement de Luxe Centre-Ville",
    description: "Appartement standing avec vue imprenable sur la ville. Proche de tous les commerces et transports.",
    price: "2500",
    area: 120,
    location: "Agdal",
    city: "Rabat",
    propertyType: "appartement",
    listingType: "location",
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    features: ["Vue panoramique", "Balcon", "Parking", "Ascenseur", "Gardiennage"],
    isFeatured: true,
    isAvailable: true,
  },
  {
    title: "Maison Familiale avec Jardin",
    description: "Belle maison familiale dans un quartier calme avec grand jardin et terrasse. Idéale pour une famille.",
    price: "320000",
    area: 200,
    location: "Gueliz",
    city: "Marrakech",
    propertyType: "maison",
    listingType: "vente",
    bedrooms: 5,
    bathrooms: 3,
    parking: 2,
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    features: ["Jardin", "Terrasse", "Garage", "Cheminée", "Cave"],
    isFeatured: true,
    isAvailable: true,
  },
  {
    title: "Penthouse avec Terrasse",
    description: "Exceptionnel penthouse avec terrasse privative et vue à 360°. Prestations de luxe.",
    price: "680000",
    area: 180,
    location: "Centre-Ville",
    city: "Tanger",
    propertyType: "appartement",
    listingType: "vente",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    features: ["Terrasse privée", "Vue panoramique", "Parking privé", "Ascenseur", "Conciergerie"],
    isFeatured: true,
    isAvailable: true,
  },
  {
    title: "Villa de Luxe avec Piscine",
    description: "Villa d'exception avec piscine chauffée, spa et domotique intégrée. Quartier résidentiel haut standing.",
    price: "1200000",
    area: 450,
    location: "Saiss",
    city: "Fès",
    propertyType: "villa",
    listingType: "vente",
    bedrooms: 6,
    bathrooms: 4,
    parking: 3,
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    features: ["Piscine chauffée", "Spa", "Domotique", "Salle de sport", "Garage triple"],
    isFeatured: true,
    isAvailable: true,
  },
  {
    title: "Studio Moderne Centre-Ville",
    description: "Studio entièrement rénové dans le centre historique. Idéal pour étudiant ou investissement locatif.",
    price: "800",
    area: 45,
    location: "Centre",
    city: "Agadir",
    propertyType: "studio",
    listingType: "location",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    features: ["Climatisation", "Parking", "Proche transports", "Meublé", "Internet"],
    isFeatured: false,
    isAvailable: true,
  }
];

async function seedDatabase() {
  try {
    console.log("Starting database seeding...");
    
    // Insert sample properties
    for (const property of sampleProperties) {
      await db.insert(properties).values(property);
      console.log(`Inserted property: ${property.title}`);
    }
    
    console.log("Database seeding completed successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();