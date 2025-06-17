import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import ServicesGrid from "@/components/services-grid";
import Testimonials from "@/components/testimonials";
import PropertyCard from "@/components/property-card";
import type { Property } from "@shared/schema";

export default function Home() {
  const { data: featuredProperties, isLoading } = useQuery<Property[]>({
    queryKey: ["/api/properties/featured"],
  });

  return (
    <>
      <HeroSection />
      <StatsSection />
      

      
      <ServicesGrid />
      
      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-widako-dark mb-4">Biens à Vendre</h3>
            <p className="text-xl text-widako-gray max-w-2xl mx-auto">
              Découvrez notre sélection exclusive de propriétés modernes avec des finitions haut de gamme
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Villa with Modern Kitchen */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="/attached_assets/58ad359d-3e17-4082-8251-0b58ca6c2c21_1750136437822.JPG"
                alt="Villa avec cuisine moderne"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">Villa Premium</h4>
                  <p className="text-sm mb-1">Cuisine moderne avec îlot central</p>
                  <p className="text-lg font-bold text-widako-orange">75 millions FCFA</p>
                </div>
              </div>
            </div>
            
            {/* Villa with Pool */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="/attached_assets/b2f146a6-1d94-4cb3-9b78-be4ac1d5e481_1750136437824.JPG"
                alt="Villa avec piscine"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">Villa avec Piscine</h4>
                  <p className="text-sm mb-1">5 chambres, jardin et piscine</p>
                  <p className="text-lg font-bold text-widako-orange">95 millions FCFA</p>
                </div>
              </div>
            </div>
            
            {/* Luxury Villa Kitchen */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="/attached_assets/ca954cc6-8757-48ff-833b-4c16a9cb5c7f - Copie_1750136437825.JPG"
                alt="Villa de luxe"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">Villa de Luxe</h4>
                  <p className="text-sm mb-1">6 chambres, cuisine équipée haut de gamme, 350m²</p>
                  <p className="text-lg font-bold text-widako-orange">85 millions FCFA</p>
                </div>
              </div>
            </div>
            
            {/* Contemporary Villa */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg md:col-span-2">
              <img 
                src="/attached_assets/fcab988a-dc2a-4872-8eb1-d7978ef58f13 - Copie_1750136437826.JPG"
                alt="Villa contemporaine"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-semibold mb-2">Villa Contemporaine</h4>
                  <p className="text-sm mb-1">4 chambres, terrasses panoramiques</p>
                  <p className="text-lg font-bold text-widako-orange">65 millions FCFA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/properties">
              <Button className="btn-primary text-white px-8 py-4 font-semibold">
                Voir plus de réalisations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold text-widako-dark mb-6">À Propos de Widako Immobilier</h3>
              <p className="text-lg text-widako-gray mb-6">
                Depuis plus de 15 ans, Widako Immobilier accompagne particuliers et investisseurs 
                dans leurs projets immobiliers. Notre équipe d'experts vous offre un service 
                personnalisé et des conseils avisés.
              </p>
              <p className="text-lg text-widako-gray mb-8">
                Nous mettons notre connaissance approfondie du marché immobilier marocain et 
                notre réseau de partenaires au service de votre réussite.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-widako-orange mb-2">15+</div>
                  <p className="text-widako-gray">Années d'expérience</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-widako-orange mb-2">1,250+</div>
                  <p className="text-widako-gray">Biens vendus</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-widako-orange mb-2">850+</div>
                  <p className="text-widako-gray">Clients satisfaits</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-widako-orange mb-2">25+</div>
                  <p className="text-widako-gray">Agents experts</p>
                </div>
              </div>
              
              <Link href="/contact">
                <Button className="btn-primary text-white px-8 py-4 font-semibold">
                  Contactez-nous
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Équipe professionnelle Widako Immobilier"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-widako-dark">Certification</div>
                    <div className="text-sm text-widako-gray">Agence certifiée</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
    </>
  );
}
