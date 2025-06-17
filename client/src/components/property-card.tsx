import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Bed, Bath, Car } from "lucide-react";
import { Link } from "wouter";
import type { Property } from "@shared/schema";
import { formatPrice, formatArea, getListingTypeLabel } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const mainImage = property.images[0] || "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600";
  
  return (
    <Card className="property-card overflow-hidden shadow-lg">
      <div className="relative">
        <img 
          src={mainImage}
          alt={property.title}
          className="w-full h-64 object-cover"
        />
        <Badge 
          className={`absolute top-4 left-4 px-3 py-1 text-sm font-medium ${
            property.listingType === "vente" 
              ? "bg-widako-orange text-white" 
              : "bg-green-500 text-white"
          }`}
        >
          {getListingTypeLabel(property.listingType)}
        </Badge>
        <button className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors">
          <Heart className="h-5 w-5" />
        </button>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-bold text-widako-orange">
            {formatPrice(property.price, property.listingType)}
          </span>
          <span className="text-sm text-widako-gray">
            {formatArea(property.area)}
          </span>
        </div>
        
        <h4 className="text-xl font-semibold text-widako-dark mb-2 line-clamp-2">
          {property.title}
        </h4>
        
        <p className="text-widako-gray mb-4 flex items-center">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          {property.location}, {property.city}
        </p>
        
        <div className="flex justify-between text-sm text-widako-gray mb-4">
          <span className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            {property.bedrooms} chambres
          </span>
          <span className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            {property.bathrooms} SDB
          </span>
          <span className="flex items-center">
            <Car className="h-4 w-4 mr-1" />
            {property.parking} parking
          </span>
        </div>
        
        <Link href={`/property/${property.id}`}>
          <Button className="w-full btn-primary text-white font-medium">
            Voir les détails
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
