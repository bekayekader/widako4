import SearchForm from "./search-form";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "linear-gradient(rgba(33, 37, 41, 0.4), rgba(33, 37, 41, 0.4)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      <div className="relative container mx-auto px-4 text-center text-white">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-widako-orange-light">WIDAKO IMMOBILIER</span>
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
          AVEC NOUS VOUS SEREZ CHEZ VOUS
        </p>
        
        <SearchForm variant="hero" />
      </div>
    </section>
  );
}
