import { Gift } from '../data/weddingData';

interface GiftsProps {
  gifts: Gift[];
}

const Gifts = ({ gifts }: GiftsProps) => {
  return (
    <section id="gifts" className="section" aria-labelledby="gifts-title">
      <div className="section-header">
        <h2 id="gifts-title" className="section-title">Liste de Cadeaux</h2>
        <p className="section-description">
          Si vous souhaitez nous offrir un cadeau, voici quelques idées qui nous feraient plaisir
        </p>
      </div>

      <div className="gifts-grid" role="list">
        {gifts.map((gift, index) => (
          <article key={index} className="gift-card" role="listitem">
            <img src={gift.image} alt={gift.name} className="gift-image lazy-load loaded" />
            <div className="gift-content">
              <h3 className="gift-name">{gift.name}</h3>
              <p className="gift-price">{gift.price}</p>
              <p className="gift-description">{gift.description}</p>
              <button
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => alert('Merci pour votre générosité ! Cette fonctionnalité sera bientôt disponible.')}
              >
                Contribuer
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Gifts;

