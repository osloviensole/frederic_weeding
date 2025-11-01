import { Event } from '../data/weddingData';

interface EventsProps {
  events: Event[];
}

const Events = ({ events }: EventsProps) => {
  return (
    <section id="events" className="section" aria-labelledby="events-title">
      <div className="section-header">
        <h2 id="events-title" className="section-title">Événements</h2>
        <p className="section-description">
          Rejoignez-nous pour célébrer notre union à travers ces moments spéciaux
        </p>
      </div>

      <div className="events-grid" role="list">
        {events.map((event, index) => (
          <article key={index} className="event-card" role="listitem">
            <div className="event-card-header">
              <p className="event-type">{event.type}</p>
              <h3 className="event-title">{event.title}</h3>
            </div>
            <div className="event-card-body">
              <div className="event-info">
                <span className="event-icon" aria-hidden="true">🕐</span>
                <div className="event-details">
                  <h4>Horaire</h4>
                  <p>{event.time}</p>
                </div>
              </div>
              <div className="event-info">
                <span className="event-icon" aria-hidden="true">📍</span>
                <div className="event-details">
                  <h4>Lieu</h4>
                  <p>{event.location}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                    {event.address}
                  </p>
                </div>
              </div>
              <p style={{ marginTop: 'calc(var(--spacing-unit) * 2)', color: 'var(--color-text-secondary)' }}>
                {event.description}
              </p>
              <a
                href={event.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="event-link"
              >
                Voir sur Google Maps
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Events;

