import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "Excellente expérience avec Widako Immobilier. L'équipe est très professionnelle et m'a aidé à trouver la maison de mes rêves en un temps record.",
      author: "Sarah Benali",
      role: "Cliente depuis 2023",
      initials: "SB"
    },
    {
      rating: 5,
      text: "Service impeccable ! J'ai vendu mon appartement rapidement grâce à leur expertise et leur accompagnement personnalisé.",
      author: "Karim Mansouri",
      role: "Client depuis 2022",
      initials: "KM"
    },
    {
      rating: 5,
      text: "Une équipe de confiance qui comprend vraiment les besoins de ses clients. Je recommande vivement leurs services.",
      author: "Laila Zahra",
      role: "Cliente depuis 2021",
      initials: "LZ"
    }
  ];

  return (
    <section className="py-20 bg-widako-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-widako-dark mb-4">Témoignages Clients</h3>
          <p className="text-xl text-widako-gray max-w-2xl mx-auto">
            Découvrez les expériences de nos clients satisfaits
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-widako-orange text-xl">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-widako-gray mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-widako-orange rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-widako-dark">{testimonial.author}</div>
                  <div className="text-sm text-widako-gray">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
