interface ProgramEvent {
  title: string;
  time: string;
  image: string;
}

const WeddingProgramDetails = () => {
  const programEvents: ProgramEvent[] = [
    {
      title: "CÉRÉMONIE CIVILE",
      time: "14H30 - 15H15",
      image: "/image/salle_r.jpg"
    },
    {
      title: "VIN D'HONNEUR",
      time: "15H45 - 17H30",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=2000&q=80"
    },
    {
      title: "RÉCEPTION",
      time: "18H00 - 23H00",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=2000&q=80"
    }
  ];

  return (
    <section id="wedding-program-details" className="wedding-program-details-section">
      <div className="program-details-container">
        <div className="program-portrait program-portrait-left">
          <img src="/image/fredpri.jpg" alt="Frédéric" className="portrait-image" />
        </div>
        
        <div className="program-events-list">
          {programEvents.map((event, index) => (
            <div key={index} className="program-event-item">
              <div className="program-event-image-wrapper">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="program-event-image"
                />
              </div>
              <h3 className="program-event-title">{event.title}</h3>
              <p className="program-event-time">{event.time}</p>
            </div>
          ))}
        </div>

        <div className="program-portrait program-portrait-right">
          <img src="/image/pi_2.jpg" alt="Priscille" className="portrait-image" />
        </div>
      </div>
    </section>
  );
};

export default WeddingProgramDetails;

