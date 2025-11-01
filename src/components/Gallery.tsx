import Carousel from './Carousel';
import { GalleryItem, VideoItem } from '../data/weddingData';

interface GalleryProps {
  gallery: GalleryItem[];
  videos: VideoItem[];
  onVideoClick: (videoId: string) => void;
}

const Gallery = ({ gallery, videos, onVideoClick }: GalleryProps) => {
  return (
    <section id="gallery" className="section" aria-labelledby="gallery-title">
      <div className="section-header">
        <h2 id="gallery-title" className="section-title">Galerie</h2>
        <p className="section-description">
          Nos plus beaux souvenirs en images
        </p>
      </div>

      <Carousel
        title="Photos"
        items={gallery}
        carouselId="gallery"
      />

      <Carousel
        title="Vidéos"
        items={videos}
        carouselId="videos"
        onItemClick={onVideoClick}
      />
    </section>
  );
};

export default Gallery;

