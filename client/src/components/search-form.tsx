import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin } from "lucide-react";
import { useLocation } from "wouter";

interface SearchFormProps {
  variant?: "hero" | "compact";
  onSearch?: (filters: SearchFilters) => void;
}

export interface SearchFilters {
  location: string;
  propertyType: string;
  maxPrice: string;
  bedrooms: string;
  listingType: string;
}

export default function SearchForm({ variant = "hero", onSearch }: SearchFormProps) {
  const [, setLocation] = useLocation();
  const [filters, setFilters] = useState<SearchFilters>({
    location: "",
    propertyType: "",
    maxPrice: "",
    bedrooms: "",
    listingType: "",
  });

  const handleSearch = () => {
    if (onSearch) {
      onSearch(filters);
    } else {
      // Navigate to properties page with search params
      const params = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value && value !== "tous" && value !== "toutes" && value !== "aucun") {
          params.append(key, value);
        }
      });
      setLocation(`/properties?${params.toString()}`);
    }
  };

  const isHero = variant === "hero";

  return (
    <div className={`${isHero ? "bg-white rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-2xl" : "bg-widako-light rounded-xl p-6"}`}>
      <div className={`grid grid-cols-1 ${isHero ? "md:grid-cols-4" : "md:grid-cols-5"} gap-4 mb-6`}>
        <div className="relative">
          <Label className="block text-sm font-medium text-gray-700 mb-2">Localisation</Label>
          <Input
            type="text"
            placeholder="Ville, quartier..."
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="search-input pl-4 pr-10"
          />
          <MapPin className="absolute right-3 top-9 h-5 w-5 text-widako-gray" />
        </div>
        
        <div>
          <Label className="block text-sm font-medium text-gray-700 mb-2">Type</Label>
          <Select value={filters.propertyType} onValueChange={(value) => setFilters({ ...filters, propertyType: value })}>
            <SelectTrigger className="search-input">
              <SelectValue placeholder="Tous types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tous">Tous types</SelectItem>
              <SelectItem value="maison">Maison</SelectItem>
              <SelectItem value="appartement">Appartement</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="studio">Studio</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label className="block text-sm font-medium text-gray-700 mb-2">Budget</Label>
          <Select value={filters.maxPrice} onValueChange={(value) => setFilters({ ...filters, maxPrice: value })}>
            <SelectTrigger className="search-input">
              <SelectValue placeholder="Prix max" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="aucun">Prix max</SelectItem>
              <SelectItem value="50000">50 000 €</SelectItem>
              <SelectItem value="100000">100 000 €</SelectItem>
              <SelectItem value="200000">200 000 €</SelectItem>
              <SelectItem value="500000">500 000 €</SelectItem>
              <SelectItem value="1000000">1 000 000 €+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label className="block text-sm font-medium text-gray-700 mb-2">Pièces</Label>
          <Select value={filters.bedrooms} onValueChange={(value) => setFilters({ ...filters, bedrooms: value })}>
            <SelectTrigger className="search-input">
              <SelectValue placeholder="Toutes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="toutes">Toutes</SelectItem>
              <SelectItem value="1">1 pièce</SelectItem>
              <SelectItem value="2">2 pièces</SelectItem>
              <SelectItem value="3">3 pièces</SelectItem>
              <SelectItem value="4">4+ pièces</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {!isHero && (
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-2">Transaction</Label>
            <Select value={filters.listingType} onValueChange={(value) => setFilters({ ...filters, listingType: value })}>
              <SelectTrigger className="search-input">
                <SelectValue placeholder="Tous" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tous">Tous</SelectItem>
                <SelectItem value="vente">Vente</SelectItem>
                <SelectItem value="location">Location</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
      
      <Button 
        onClick={handleSearch}
        className={`btn-primary text-white font-semibold text-lg ${isHero ? "w-full py-4" : "w-full md:w-auto py-3 px-8"}`}
      >
        <Search className="mr-2 h-5 w-5" />
        Rechercher
      </Button>
    </div>
  );
}
