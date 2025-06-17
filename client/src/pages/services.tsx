import ServicesGrid from "@/components/services-grid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Services() {
  const processSteps = [
    {
      step: "01",
      title: "Consultation Gratuite",
      description: "Nous analysons vos besoins et votre budget pour vous proposer les meilleures options."
    },
    {
      step: "02", 
      title: "Recherche Personnalisée",
      description: "Notre équipe effectue une recherche ciblée selon vos critères spécifiques."
    },
    {
      step: "03",
      title: "Visites Accompagnées",
      description: "Nous organisons et vous accompagnons lors des visites des propriétés sélectionnées."
    },
    {
      step: "04",
      title: "Négociation & Finalisation",
      description: "Nous négocions pour vous et gérons toutes les démarches jusqu'à la signature."
    }
  ];

  const advantages = [
    "Expertise locale approfondie du marché marocain",
    "Réseau étendu de partenaires de confiance",
    "Accompagnement personnalisé à chaque étape",
    "Transactions sécurisées et transparentes",
    "Service après-vente et suivi client",
    "Conseils juridiques et financiers inclus"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-widako-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nos <span className="text-widako-orange">Services</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Une expertise complète et un accompagnement personnalisé pour tous vos projets immobiliers
          </p>
          <Link href="/contact">
            <Button className="btn-primary text-white px-8 py-4 text-lg font-semibold">
              Demander une consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid />

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-widako-dark mb-4">Notre Processus</h3>
            <p className="text-xl text-widako-gray max-w-2xl mx-auto">
              Un accompagnement structuré pour garantir le succès de votre projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <Card key={index} className="property-card relative">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{process.step}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-widako-dark mb-3">{process.title}</h4>
                  <p className="text-widako-gray text-sm">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-widako-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold text-widako-dark mb-6">
                Pourquoi Choisir Widako Immobilier ?
              </h3>
              <p className="text-lg text-widako-gray mb-8">
                Notre expertise et notre engagement vous garantissent un service d'excellence 
                pour tous vos projets immobiliers.
              </p>
              
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-widako-orange flex-shrink-0 mt-0.5" />
                    <span className="text-widako-gray">{advantage}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/about">
                  <Button className="btn-primary text-white px-8 py-4 font-semibold">
                    En savoir plus sur nous
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Équipe Widako Immobilier"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-widako-orange text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">15+</div>
                  <div className="text-sm">Années d'expertise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-widako-dark mb-6">
            Prêt à Commencer Votre Projet ?
          </h3>
          <p className="text-xl text-widako-gray mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez 
            comment nous pouvons vous aider à réaliser vos objectifs immobiliers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="btn-primary text-white px-8 py-4 text-lg font-semibold">
                Consultation gratuite
              </Button>
            </Link>
            <Link href="/properties">
              <Button variant="outline" className="px-8 py-4 text-lg font-semibold border-widako-orange text-widako-orange hover:bg-widako-orange hover:text-white">
                Voir nos propriétés
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
