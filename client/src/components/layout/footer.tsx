import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-widako-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <img 
                src="/attached_assets/434423977_1035132934639394_2159270022631547310_n_1750135547002.jpg"
                alt="Widako Immobilier"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Votre partenaire immobilier de confiance depuis plus de 15 ans. 
              Nous vous accompagnons dans tous vos projets immobiliers.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/widako_immobilier" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-widako-orange transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/widako_immobilier" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-widako-orange transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-widako-orange transition-colors">Accueil</Link></li>
              <li><Link href="/properties" className="text-gray-400 hover:text-widako-orange transition-colors">Propriétés</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-widako-orange transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-widako-orange transition-colors">À Propos</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-widako-orange transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-widako-orange transition-colors">Vente</a></li>
              <li><a href="#" className="text-gray-400 hover:text-widako-orange transition-colors">Location</a></li>
              <li><a href="#" className="text-gray-400 hover:text-widako-orange transition-colors">Estimation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-widako-orange transition-colors">Investissement</a></li>
              <li><a href="#" className="text-gray-400 hover:text-widako-orange transition-colors">Gestion</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-widako-orange mt-0.5 flex-shrink-0" />
                <span>Cocody Angré Nouveau CHU<br />Pharmacie Val d'Oise<br />Abidjan, Côte d'Ivoire</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-widako-orange flex-shrink-0" />
                <span>+225 07 59 41 68 13</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-widako-orange flex-shrink-0" />
                <span>contact@widako-immobilier.com</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 Widako Immobilier. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-widako-orange transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-widako-orange transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-widako-orange transition-colors">CGU</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
