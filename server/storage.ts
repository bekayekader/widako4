import { properties, contacts, type Property, type InsertProperty, type Contact, type InsertContact, users, type User, type InsertUser } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getProperties(): Promise<Property[]>;
  getProperty(id: number): Promise<Property | undefined>;
  getFeaturedProperties(): Promise<Property[]>;
  searchProperties(filters: {
    location?: string;
    propertyType?: string;
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
    listingType?: string;
  }): Promise<Property[]>;
  createProperty(property: InsertProperty): Promise<Property>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private properties: Map<number, Property>;
  private contacts: Map<number, Contact>;
  private currentUserId: number;
  private currentPropertyId: number;
  private currentContactId: number;

  constructor() {
    this.users = new Map();
    this.properties = new Map();
    this.contacts = new Map();
    this.currentUserId = 1;
    this.currentPropertyId = 1;
    this.currentContactId = 1;
    
    // Initialize with sample properties
    this.initializeSampleData();
  }

  private initializeSampleData() {
    const sampleProperties: Omit<Property, 'id'>[] = [
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
        createdAt: new Date(),
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
        createdAt: new Date(),
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
        createdAt: new Date(),
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
        createdAt: new Date(),
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
        createdAt: new Date(),
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
        createdAt: new Date(),
      }
    ];

    sampleProperties.forEach(property => {
      const id = this.currentPropertyId++;
      this.properties.set(id, { ...property, id });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getProperties(): Promise<Property[]> {
    return Array.from(this.properties.values()).sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }

  async getProperty(id: number): Promise<Property | undefined> {
    return this.properties.get(id);
  }

  async getFeaturedProperties(): Promise<Property[]> {
    return Array.from(this.properties.values())
      .filter(property => property.isFeatured && property.isAvailable)
      .sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime());
  }

  async searchProperties(filters: {
    location?: string;
    propertyType?: string;
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
    listingType?: string;
  }): Promise<Property[]> {
    let results = Array.from(this.properties.values()).filter(property => property.isAvailable);

    if (filters.location) {
      results = results.filter(property => 
        property.location.toLowerCase().includes(filters.location!.toLowerCase()) ||
        property.city.toLowerCase().includes(filters.location!.toLowerCase())
      );
    }

    if (filters.propertyType && filters.propertyType !== "tous" && filters.propertyType !== "all") {
      results = results.filter(property => property.propertyType === filters.propertyType);
    }

    if (filters.listingType && filters.listingType !== "tous" && filters.listingType !== "all") {
      results = results.filter(property => property.listingType === filters.listingType);
    }

    if (filters.minPrice) {
      results = results.filter(property => parseFloat(property.price) >= filters.minPrice!);
    }

    if (filters.maxPrice) {
      results = results.filter(property => parseFloat(property.price) <= filters.maxPrice!);
    }

    if (filters.bedrooms && filters.bedrooms !== "toutes") {
      const bedroomCount = parseInt(filters.bedrooms.toString());
      if (!isNaN(bedroomCount)) {
        results = results.filter(property => property.bedrooms >= bedroomCount);
      }
    }

    return results.sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime());
  }

  async createProperty(insertProperty: InsertProperty): Promise<Property> {
    const id = this.currentPropertyId++;
    const property: Property = {
      ...insertProperty,
      id,
      createdAt: new Date(),
    };
    this.properties.set(id, property);
    return property;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort((a, b) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );
  }
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getProperties(): Promise<Property[]> {
    return await db.select().from(properties).orderBy(properties.createdAt);
  }

  async getProperty(id: number): Promise<Property | undefined> {
    const [property] = await db.select().from(properties).where(eq(properties.id, id));
    return property || undefined;
  }

  async getFeaturedProperties(): Promise<Property[]> {
    return await db.select().from(properties)
      .where(eq(properties.isFeatured, true))
      .orderBy(properties.createdAt);
  }

  async searchProperties(filters: {
    location?: string;
    propertyType?: string;
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
    listingType?: string;
  }): Promise<Property[]> {
    let query = db.select().from(properties).where(eq(properties.isAvailable, true));
    
    // Note: For a production app, we would build dynamic where conditions
    // For now, we'll get all properties and filter in memory
    const allProperties = await query;
    let results = allProperties;

    if (filters.location) {
      results = results.filter(property => 
        property.location.toLowerCase().includes(filters.location!.toLowerCase()) ||
        property.city.toLowerCase().includes(filters.location!.toLowerCase())
      );
    }

    if (filters.propertyType && filters.propertyType !== "tous" && filters.propertyType !== "all") {
      results = results.filter(property => property.propertyType === filters.propertyType);
    }

    if (filters.listingType && filters.listingType !== "tous" && filters.listingType !== "all") {
      results = results.filter(property => property.listingType === filters.listingType);
    }

    if (filters.minPrice) {
      results = results.filter(property => parseFloat(property.price) >= filters.minPrice!);
    }

    if (filters.maxPrice) {
      results = results.filter(property => parseFloat(property.price) <= filters.maxPrice!);
    }

    if (filters.bedrooms && filters.bedrooms !== "toutes") {
      const bedroomCount = parseInt(filters.bedrooms.toString());
      if (!isNaN(bedroomCount)) {
        results = results.filter(property => property.bedrooms >= bedroomCount);
      }
    }

    return results.sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime());
  }

  async createProperty(insertProperty: InsertProperty): Promise<Property> {
    const [property] = await db
      .insert(properties)
      .values(insertProperty)
      .returning();
    return property;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db
      .insert(contacts)
      .values(insertContact)
      .returning();
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts).orderBy(contacts.createdAt);
  }
}

export const storage = new DatabaseStorage();
