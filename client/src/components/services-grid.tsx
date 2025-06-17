import { Home, Key, TrendingUp, Handshake, FileText, Camera } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      icon: Home,
      title: "Vente de Propriétés",
      description: "Accompagnement personnalisé pour la vente de votre bien immobilier au meilleur prix."
    },
    {
      icon: Key,
      title: "Location",
      description: "Gestion locative complète et recherche de locataires qualifiés pour vos biens."
    },
    {
      icon: TrendingUp,
      title: "Estimation Gratuite",
      description: "Évaluation précise de votre bien grâce à notre expertise du marché local."
    },
    {
      icon: Handshake,
      title: "Conseil en Investissement",
      description: "Stratégies d'investissement personnalisées pour optimiser votre patrimoine immobilier."
    },
    {
      icon: FileText,
      title: "Accompagnement Juridique",
      description: "Support complet pour toutes les démarches administratives et juridiques."
    },
    {
      icon: Camera,
      title: "Photographie Immobilière",
      description: "Mise en valeur professionnelle de vos biens avec des photos de qualité."
    }
  ];

  return (
    <section className="py-20 bg-widako-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-widako-dark mb-4">Nos Services</h3>
          <p className="text-xl text-widako-gray max-w-2xl mx-auto">
            Une expertise complète pour tous vos projets immobiliers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="property-card bg-white p-8 rounded-xl text-center">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="text-white text-2xl h-8 w-8" />
                </div>
                <h4 className="text-xl font-semibold text-widako-dark mb-4">{service.title}</h4>
                <p className="text-widako-gray">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
