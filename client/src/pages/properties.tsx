import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import SearchForm, { type SearchFilters } from "@/components/search-form";
import PropertyCard from "@/components/property-card";
import type { Property } from "@shared/schema";

export default function Properties() {
  const [location] = useLocation();
  const [filters, setFilters] = useState<SearchFilters>({
    location: "",
    propertyType: "",
    maxPrice: "",
    bedrooms: "",
    listingType: "",
  });

  // Parse URL parameters on component mount
  useEffect(() => {
    const params = new URLSearchParams(location.split('?')[1] || '');
    setFilters({
      location: params.get('location') || '',
      propertyType: params.get('propertyType') || '',
      maxPrice: params.get('maxPrice') || '',
      bedrooms: params.get('bedrooms') || '',
      listingType: params.get('listingType') || '',
    });
  }, [location]);

  const { data: properties, isLoading } = useQuery<Property[]>({
    queryKey: ["/api/properties/search", filters],
    queryFn: async () => {
      const params = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params.append(key, value);
      });
      
      const response = await fetch(`/api/properties/search?${params.toString()}`, {
        credentials: "include",
      });
      if (!response.ok) throw new Error('Failed to fetch properties');
      return response.json();
    },
  });

  const [activeFilter, setActiveFilter] = useState("all");
  const propertyFilters = [
    { id: "all", label: "Tous" },
    { id: "maison", label: "Maisons" },
    { id: "appartement", label: "Appartements" },
    { id: "villa", label: "Villas" },
    { id: "studio", label: "Studios" },
  ];

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setFilters({ ...filters, propertyType: filterId === "all" ? "tous" : filterId });
  };

  const handleSearch = (newFilters: SearchFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-widako-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nos <span className="text-widako-orange">Propriétés</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Découvrez notre large sélection de biens immobiliers d'exception
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <SearchForm variant="compact" onSearch={handleSearch} />
        </div>
      </section>

      {/* Filters and Results */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Property Type Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {propertyFilters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeFilter === filter.id
                    ? "bg-widako-orange text-white hover:bg-widako-orange/90"
                    : "bg-white text-widako-dark border-gray-300 hover:bg-widako-orange hover:text-white hover:border-widako-orange"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-widako-gray">
              {isLoading ? "Recherche en cours..." : `${properties?.length || 0} propriété(s) trouvée(s)`}
            </p>
          </div>

          {/* Properties Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-gray-200 animate-pulse rounded-xl h-96" />
              ))}
            </div>
          ) : properties && properties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-widako-dark mb-4">
                Aucune propriété trouvée
              </h3>
              <p className="text-widako-gray mb-8">
                Essayez de modifier vos critères de recherche pour voir plus de résultats.
              </p>
              <Button 
                onClick={() => {
                  setFilters({ location: "", propertyType: "", maxPrice: "", bedrooms: "", listingType: "" });
                  setActiveFilter("all");
                }}
                className="btn-primary text-white"
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
