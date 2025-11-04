import { Event } from '../data/weddingData';

interface EventsProps {
  events: Event[];
}

const Events = ({ events }: EventsProps) => {
  const getEventIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'cérémonie':
        return '💍';
      case 'réception':
        return '🥂';
      case 'soirée':
        return '🎉';
      default:
        return '✨';
    }
  };

  return (
    <section id="events" className="events-section-modern" aria-labelledby="events-title">
      <div className="events-container-modern">
        <div className="events-header-modern">
          <h2 id="events-title" className="events-title-modern">Événements</h2>
          <p className="events-subtitle-modern">
            Rejoignez-nous pour célébrer notre union à travers ces moments spéciaux
          </p>
        </div>

        <div className="events-timeline-wrapper">
          {/* Timeline horizontale */}
          <div className="events-timeline-line"></div>
          
          <div className="events-list-modern" role="list">
            {events.map((event, index) => (
              <article 
                key={index} 
                className="event-card-modern" 
                role="listitem"
                style={{ '--event-index': index } as React.CSSProperties}
              >
                <div className="event-card-inner">
                  {/* Badge de type */}
                  <div className="event-type-badge">
                    <span className="event-type-icon">{getEventIcon(event.type)}</span>
                    <span className="event-type-text">{event.type}</span>
                  </div>

                  {/* Timeline dot */}
                  <div className="event-timeline-dot">
                    <div className="event-timeline-dot-inner"></div>
                  </div>

                  {/* Contenu principal */}
                  <div className="event-card-content">
                    <div className="event-time-display">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span className="event-time-text">{event.time}</span>
                    </div>

                    <h3 className="event-title-modern">{event.title}</h3>
                    
                    <div className="event-location-info">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <div className="event-location-details">
                        <p className="event-location-name">{event.location}</p>
                        <p className="event-location-address">{event.address}</p>
                      </div>
                    </div>

                    <p className="event-description-modern">{event.description}</p>

                    <a
                      href={event.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="event-maps-button"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Voir sur Google Maps</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;

