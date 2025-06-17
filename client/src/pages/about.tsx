import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Award, Users, Target, Heart, ArrowRight } from "lucide-react";
import Testimonials from "@/components/testimonials";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque transaction et chaque interaction avec nos clients."
    },
    {
      icon: Heart,
      title: "Confiance",
      description: "La confiance est au cœur de notre relation avec nos clients et partenaires."
    },
    {
      icon: Users,
      title: "Proximité",
      description: "Nous privilégions une approche humaine et personnalisée pour chaque projet."
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Notre connaissance approfondie du marché garantit les meilleurs conseils."
    }
  ];

  const timeline = [
    {
      year: "2009",
      title: "Création de Widako Immobilier",
      description: "Lancement de notre agence à Casablanca avec une vision claire : révolutionner le marché immobilier marocain."
    },
    {
      year: "2012",
      title: "Expansion régionale",
      description: "Ouverture de nouvelles agences à Rabat et Marrakech pour mieux servir nos clients."
    },
    {
      year: "2015",
      title: "Innovation technologique",
      description: "Lancement de notre plateforme digitale pour faciliter la recherche immobilière."
    },
    {
      year: "2018",
      title: "1000ème transaction",
      description: "Franchissement du cap des 1000 propriétés vendues, marquant notre expertise reconnue."
    },
    {
      year: "2021",
      title: "Certification qualité",
      description: "Obtention de la certification qualité pour nos services immobiliers."
    },
    {
      year: "2024",
      title: "Leader du marché",
      description: "Positionnement comme l'une des agences immobilières de référence au Maroc."
    }
  ];

  const stats = [
    { number: "1,250+", label: "Propriétés vendues", description: "Transactions réussies" },
    { number: "850+", label: "Clients satisfaits", description: "Familles accompagnées" },
    { number: "15+", label: "Années d'expérience", description: "Sur le marché" },
    { number: "25+", label: "Agents experts", description: "Professionnels certifiés" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-widako-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            À Propos de <span className="text-widako-orange">Widako</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Depuis 15 ans, nous accompagnons nos clients dans la réalisation de leurs projets immobiliers 
            avec passion, expertise et transparence.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-widako-dark mb-6">Notre Mission</h2>
              <p className="text-lg text-widako-gray mb-6">
                Chez Widako Immobilier, notre mission est de simplifier et sécuriser vos transactions 
                immobilières tout en vous offrant un service personnalisé et de qualité supérieure.
              </p>
              <p className="text-lg text-widako-gray mb-8">
                Nous croyons que chaque projet immobilier est unique et mérite une attention particulière. 
                C'est pourquoi nous mettons notre expertise, notre réseau et notre passion au service 
                de votre réussite.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.slice(0, 4).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-widako-orange mb-2">{stat.number}</div>
                    <p className="text-widako-gray font-medium">{stat.label}</p>
                    <p className="text-sm text-widako-gray">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Équipe Widako Immobilier"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-widako-dark">Agence Certifiée</div>
                    <div className="text-sm text-widako-gray">Qualité garantie</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-widako-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-widako-dark mb-4">Nos Valeurs</h3>
            <p className="text-xl text-widako-gray max-w-2xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="property-card text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-widako-dark mb-4">{value.title}</h4>
                    <p className="text-widako-gray">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-widako-dark mb-4">Notre Histoire</h3>
            <p className="text-xl text-widako-gray max-w-2xl mx-auto">
              15 années d'évolution et de croissance au service de l'immobilier
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-widako-orange opacity-20"></div>
            
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8'}`}>
                    <Card className="property-card">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-widako-orange mb-2">{event.year}</div>
                        <h4 className="text-xl font-semibold text-widako-dark mb-3">{event.title}</h4>
                        <p className="text-widako-gray">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-widako-orange rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-widako-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-widako-dark mb-4">Notre Équipe</h3>
            <p className="text-xl text-widako-gray max-w-2xl mx-auto">
              Des professionnels expérimentés à votre service
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h4 className="text-2xl font-semibold text-widako-dark mb-6">
                Une Équipe d'Experts Dédiée
              </h4>
              <p className="text-lg text-widako-gray mb-6">
                Notre équipe est composée de professionnels passionnés et expérimentés, 
                chacun spécialisé dans son domaine d'expertise. Ensemble, nous formons 
                une équipe soudée et complémentaire.
              </p>
              <p className="text-lg text-widako-gray mb-8">
                Nos agents sont régulièrement formés aux dernières évolutions du marché 
                et aux nouvelles technologies pour vous offrir un service toujours plus performant.
              </p>
              
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-widako-orange mb-1">25+</div>
                  <p className="text-sm text-widako-gray">Agents certifiés</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-widako-orange mb-1">95%</div>
                  <p className="text-sm text-widako-gray">Taux de satisfaction</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-widako-orange mb-1">5</div>
                  <p className="text-sm text-widako-gray">Agences</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Équipe Widako en réunion"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-widako-dark mb-6">
            Rejoignez la Famille Widako
          </h3>
          <p className="text-xl text-widako-gray mb-8 max-w-2xl mx-auto">
            Faites confiance à notre expertise pour réaliser vos projets immobiliers. 
            Contactez-nous dès aujourd'hui pour commencer votre aventure avec nous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="btn-primary text-white px-8 py-4 text-lg font-semibold">
                Nous contacter
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="px-8 py-4 text-lg font-semibold border-widako-orange text-widako-orange hover:bg-widako-orange hover:text-white">
                Découvrir nos services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
