import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Car, 
  Home, 
  Calendar,
  Heart,
  Share2,
  Phone,
  Mail,
  ArrowLeft
} from "lucide-react";
import { Link } from "wouter";
import type { Property } from "@shared/schema";
import { formatPrice, formatArea, getListingTypeLabel } from "@/lib/utils";

export default function PropertyDetail() {
  const [match, params] = useRoute("/property/:id");
  const propertyId = params?.id;

  const { data: property, isLoading, error } = useQuery<Property>({
    queryKey: ["/api/properties", propertyId],
    queryFn: async () => {
      const response = await fetch(`/api/properties/${propertyId}`, {
        credentials: "include",
      });
      if (!response.ok) throw new Error('Property not found');
      return response.json();
    },
    enabled: !!propertyId,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="bg-gray-200 rounded-xl h-96 mb-8" />
            <div className="bg-gray-200 h-8 w-3/4 mb-4" />
            <div className="bg-gray-200 h-6 w-1/2 mb-8" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-gray-200 h-64" />
              <div className="bg-gray-200 h-64" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Propriété introuvable</h1>
            <p className="text-gray-600 mb-6">
              La propriété que vous recherchez n'existe pas ou a été supprimée.
            </p>
            <Link href="/properties">
              <Button className="btn-primary text-white">
                Retour aux propriétés
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const mainImage = property.images[0] || "https://images.unsplash.com/photo-1560518883-ce09059eeffa";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <section className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <Link href="/properties" className="flex items-center text-widako-gray hover:text-widako-orange transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux propriétés
          </Link>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
            <div className="lg:col-span-3">
              <img 
                src={mainImage}
                alt={property.title}
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
            <div className="space-y-4">
              {property.images.slice(1, 4).map((image, index) => (
                <img 
                  key={index}
                  src={image}
                  alt={`${property.title} - Image ${index + 2}`}
                  className="w-full h-28 object-cover rounded-lg"
                />
              ))}
              {property.images.length > 4 && (
                <div className="w-full h-28 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 font-medium">
                    +{property.images.length - 4} photos
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Badge 
                      className={`mb-4 ${
                        property.listingType === "vente" 
                          ? "bg-widako-orange text-white" 
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {getListingTypeLabel(property.listingType)}
                    </Badge>
                    <h1 className="text-3xl font-bold text-widako-dark mb-2">
                      {property.title}
                    </h1>
                    <p className="text-widako-gray flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      {property.location}, {property.city}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon">
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center space-x-6 text-widako-gray">
                  <span className="flex items-center">
                    <Bed className="h-5 w-5 mr-2" />
                    {property.bedrooms} chambres
                  </span>
                  <span className="flex items-center">
                    <Bath className="h-5 w-5 mr-2" />
                    {property.bathrooms} salles de bain
                  </span>
                  <span className="flex items-center">
                    <Car className="h-5 w-5 mr-2" />
                    {property.parking} parking
                  </span>
                  <span className="flex items-center">
                    <Home className="h-5 w-5 mr-2" />
                    {formatArea(property.area)}
                  </span>
                </div>
              </div>

              {/* Description */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-widako-dark mb-4">Description</h3>
                  <p className="text-widako-gray leading-relaxed">
                    {property.description}
                  </p>
                </CardContent>
              </Card>

              {/* Features */}
              {property.features && property.features.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-widako-dark mb-4">Caractéristiques</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {property.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-widako-orange rounded-full"></div>
                          <span className="text-widako-gray">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Price Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-widako-orange mb-4">
                    {formatPrice(property.price, property.listingType)}
                  </div>
                  <div className="space-y-4">
                    <Button className="w-full btn-primary text-white">
                      <Phone className="h-5 w-5 mr-2" />
                      Appeler maintenant
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Mail className="h-5 w-5 mr-2" />
                      Envoyer un message
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Property Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-widako-dark mb-4">Informations</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-widako-gray">Type</span>
                      <span className="font-medium capitalize">{property.propertyType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-widako-gray">Surface</span>
                      <span className="font-medium">{formatArea(property.area)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-widako-gray">Chambres</span>
                      <span className="font-medium">{property.bedrooms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-widako-gray">Salles de bain</span>
                      <span className="font-medium">{property.bathrooms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-widako-gray">Parking</span>
                      <span className="font-medium">{property.parking}</span>
                    </div>
                    {property.createdAt && (
                      <div className="flex justify-between">
                        <span className="text-widako-gray">Publié le</span>
                        <span className="font-medium">
                          {new Date(property.createdAt).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Agent */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-widako-dark mb-4">Agent immobilier</h3>
                  <div className="flex items-center space-x-4 mb-4">
                    <img 
                      src="/attached_assets/434423977_1035132934639394_2159270022631547310_n_1750135547002.jpg"
                      alt="Widako Immobilier"
                      className="h-12 w-auto"
                    />
                  </div>
                  <div className="space-y-2 text-sm text-widako-gray">
                    <p className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      +212 5 22 XX XX XX
                    </p>
                    <p className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      contact@widako-immobilier.ma
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
