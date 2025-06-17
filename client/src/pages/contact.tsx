import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const createContactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
      toast({
        title: "Message envoyé !",
        description: "Nous vous recontacterons dans les plus brefs délais.",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: InsertContact) => {
    setIsSubmitting(true);
    createContactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: ["Cocody Angré Nouveau CHU", "Pharmacie Val d'Oise", "Abidjan, Côte d'Ivoire"]
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: ["+225 07 59 41 68 13"]
    },
    {
      icon: Mail,
      title: "Email",
      content: ["contact@widako-immobilier.com"]
    },
    {
      icon: Clock,
      title: "Horaires",
      content: ["Lun - Ven: 9h00 - 18h00", "Sam: 9h00 - 16h00"]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/widako_immobilier", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/widako_immobilier", label: "Instagram" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-widako-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contactez-<span className="text-widako-orange">Nous</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Prêt à concrétiser votre projet immobilier ? Notre équipe est là pour vous accompagner 
            à chaque étape de votre parcours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-widako-dark mb-8">Informations de Contact</h2>
              
              <div className="space-y-8 mb-12">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-widako-dark mb-1">{info.title}</h3>
                        {info.content.map((line, lineIndex) => (
                          <p key={lineIndex} className="text-widako-gray">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div>
                <h3 className="font-semibold text-widako-dark mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                        aria-label={social.label}
                      >
                        <IconComponent className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8">
                <h3 className="font-semibold text-widako-dark mb-4">Localisation</h3>
                <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                  <p className="text-widako-gray">Carte interactive disponible prochainement</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <Card className="bg-widako-light">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-widako-dark mb-6">Envoyez-nous un Message</h2>
                  
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-medium text-widako-dark mb-2 block">
                          Prénom *
                        </Label>
                        <Input
                          id="firstName"
                          {...form.register("firstName")}
                          placeholder="Votre prénom"
                          className="search-input bg-white"
                        />
                        {form.formState.errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">{form.formState.errors.firstName.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-medium text-widako-dark mb-2 block">
                          Nom *
                        </Label>
                        <Input
                          id="lastName"
                          {...form.register("lastName")}
                          placeholder="Votre nom"
                          className="search-input bg-white"
                        />
                        {form.formState.errors.lastName && (
                          <p className="text-red-500 text-sm mt-1">{form.formState.errors.lastName.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-widako-dark mb-2 block">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          {...form.register("email")}
                          placeholder="votre@email.com"
                          className="search-input bg-white"
                        />
                        {form.formState.errors.email && (
                          <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium text-widako-dark mb-2 block">
                          Téléphone
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...form.register("phone")}
                          placeholder="+212 6XX XX XX XX"
                          className="search-input bg-white"
                        />
                        {form.formState.errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="text-sm font-medium text-widako-dark mb-2 block">
                        Sujet *
                      </Label>
                      <Select onValueChange={(value) => form.setValue("subject", value)}>
                        <SelectTrigger className="search-input bg-white">
                          <SelectValue placeholder="Sélectionnez un sujet" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="achat">Achat de propriété</SelectItem>
                          <SelectItem value="vente">Vente de propriété</SelectItem>
                          <SelectItem value="location">Location</SelectItem>
                          <SelectItem value="estimation">Estimation gratuite</SelectItem>
                          <SelectItem value="conseil">Conseil en investissement</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                      {form.formState.errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.subject.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-widako-dark mb-2 block">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        rows={5}
                        {...form.register("message")}
                        placeholder="Décrivez votre projet ou vos besoins..."
                        className="search-input resize-none bg-white"
                      />
                      {form.formState.errors.message && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                      )}
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn-primary w-full py-4 text-white font-semibold text-lg"
                    >
                      {isSubmitting ? (
                        "Envoi en cours..."
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Envoyer le Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-widako-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-widako-dark mb-4">Questions Fréquentes</h3>
            <p className="text-xl text-widako-gray max-w-2xl mx-auto">
              Trouvez rapidement les réponses à vos questions les plus courantes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-widako-dark mb-3">
                  Combien coûtent vos services ?
                </h4>
                <p className="text-widako-gray">
                  Nos tarifs varient selon le type de service. L'estimation et la consultation 
                  initiale sont toujours gratuites.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-widako-dark mb-3">
                  Dans quelles villes intervenez-vous ?
                </h4>
                <p className="text-widako-gray">
                  Nous sommes présents dans les principales villes du Maroc : Casablanca, 
                  Rabat, Marrakech, Fès, Tanger et Agadir.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-widako-dark mb-3">
                  Combien de temps pour vendre ?
                </h4>
                <p className="text-widako-gray">
                  Le délai moyen de vente est de 2-3 mois, mais cela dépend du marché, 
                  du prix et de l'emplacement de votre bien.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-widako-dark mb-3">
                  Proposez-vous un suivi après-vente ?
                </h4>
                <p className="text-widako-gray">
                  Oui, nous assurons un suivi complet même après la transaction pour 
                  garantir votre satisfaction totale.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
