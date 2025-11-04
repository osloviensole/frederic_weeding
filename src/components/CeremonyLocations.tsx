interface CeremonyLocation {
  number: number;
  title: string;
  location: string;
  image: string;
  mapsQuery: string;
}

const CeremonyLocations = () => {
  const locations: CeremonyLocation[] = [
    {
      number: 1,
      title: "Cérémonie civile",
      location: "11 eme rue limete résidentiel",
      image: "/image/civile.jpg",
      mapsQuery: "Shangri-La+Paris"
    },
    {
      number: 2,
      title: "Salle du Royaume",
      location: "9A bis, avenue Mboloko, Matete.",
      image: "/image/salle_r.jpg",
      mapsQuery: "Galerie+Bourbon+Paris"
    },
    {
      number: 3,
      title: "Salle de Fêtes Albertine Square",
      location: "avenue Kigoma n°5, quartier Huilerie (référence : banque RAWBANK).",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=2000&q=80",
      mapsQuery: "Salons+de+l'Aveyron+Paris"
    }
  ];

  const handleShowDirections = (mapsQuery: string) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapsQuery)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="ceremony-locations" className="ceremony-locations-section">
      <div className="ceremony-locations-container">
        <div className="ceremony-locations-header">
          <h2 className="ceremony-locations-title">
            <span className="ceremony-title-line-1">LIEU DE LA</span>
            <span className="ceremony-title-line-2">CEREMONIE</span>
          </h2>
          <p className="ceremony-locations-subtitle">DE MARIAGE</p>
        </div>

        <div className="ceremony-locations-grid">
          {locations.map((location) => (
            <div key={location.number} className="ceremony-location-wrapper">
              <div 
                className="ceremony-location-card"
                style={{
                  backgroundImage: `url(${location.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="ceremony-location-overlay"></div>
                <div className="ceremony-location-number">{location.number}</div>
                <div className="ceremony-location-content">
                  <h3 className="ceremony-location-title">{location.title}</h3>
                  <p className="ceremony-location-name">{location.location}</p>
                </div>
              </div>
              <button
                className="ceremony-location-btn"
                onClick={() => handleShowDirections(location.mapsQuery)}
                aria-label={`Afficher l'itinéraire vers ${location.location}`}
              >
                <svg 
                  className="play-icon-btn" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span>Itinéraire ici</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CeremonyLocations;

