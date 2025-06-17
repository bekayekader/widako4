export default function StatsSection() {
  const stats = [
    { number: "1,250+", label: "Propriétés vendues" },
    { number: "850+", label: "Clients satisfaits" },
    { number: "15+", label: "Années d'expérience" },
    { number: "25+", label: "Agents experts" },
  ];

  return (
    <section className="py-16 bg-widako-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="property-card bg-white p-6 rounded-xl">
              <div className="text-3xl font-bold text-widako-orange mb-2">
                {stat.number}
              </div>
              <p className="text-widako-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
