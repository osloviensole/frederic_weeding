export type Photo = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt?: string;
  tags?: string[];
  isVideo?: boolean;
};

export type Album = {
  id: string;
  title: string;
  date: string;
  coverUrl: string;
  description?: string;
  tags?: string[];
  photos: Photo[];
};

export const ALBUMS: Album[] = [
  {
    id: "couple",
    title: "Nos Photos de Couple",
    date: "2024-2025",
    coverUrl: "/images/p&f.jpg",
    description: "Des moments précieux capturés ensemble, de nos débuts à aujourd'hui.",
    tags: ["Couple", "Amour"],
    photos: [
      { 
        id: "p&f", 
        src: "/images/p&f.jpg", 
        width: 1381, 
        height: 1381, 
        alt: "Priscille et Frédéric ensemble" 
      },
      { 
        id: "bill&bill", 
        src: "/images/bill&bill.jpg", 
        width: 993, 
        height: 993, 
        alt: "Photo de couple romantique" 
      },
      { 
        id: "regard", 
        src: "/images/regard.jpg", 
        width: 492, 
        height: 492, 
        alt: "Regard amoureux" 
      },
      { 
        id: "love", 
        src: "/images/love.jpg", 
        width: 570, 
        height: 570, 
        alt: "Expression d'amour" 
      },
      { 
        id: "drow&drop", 
        src: "/images/drow&drop.jpg", 
        width: 1165, 
        height: 1165, 
        alt: "Moment spécial ensemble" 
      },
      { 
        id: "hero", 
        src: "/images/hero.png", 
        width: 1920, 
        height: 1080, 
        alt: "Photo principale de notre histoire" 
      }
    ]
  },
  {
    id: "portraits",
    title: "Portraits Individuels",
    date: "2024-2025",
    coverUrl: "/images/priscille.jpg",
    description: "Des portraits qui capturent notre personnalité et notre beauté intérieure.",
    tags: ["Portraits", "Individuel"],
    photos: [
      { 
        id: "priscille", 
        src: "/images/priscille.jpg", 
        width: 1920, 
        height: 1080, 
        alt: "Portrait de Priscille" 
      },
      { 
        id: "fred", 
        src: "/images/fred.jpg", 
        width: 1920, 
        height: 1080, 
        alt: "Portrait de Frédéric" 
      },
      { 
        id: "regard-portrait", 
        src: "/images/regard.jpg", 
        width: 492, 
        height: 492, 
        alt: "Regard profond et expressif" 
      },
      { 
        id: "love-portrait", 
        src: "/images/love.jpg", 
        width: 570, 
        height: 570, 
        alt: "Expression d'amour et de tendresse" 
      }
    ]
  },
  {
    id: "moments",
    title: "Moments Spéciaux",
    date: "2024-2025",
    coverUrl: "/images/drow&drop.jpg",
    description: "Des instants uniques et des souvenirs précieux de notre parcours.",
    tags: ["Moments", "Souvenirs"],
    photos: [
      { 
        id: "drow&drop", 
        src: "/images/drow&drop.jpg", 
        width: 1165, 
        height: 1165, 
        alt: "Moment spécial ensemble" 
      },
      { 
        id: "p&f-moment", 
        src: "/images/p&f.jpg", 
        width: 1381, 
        height: 1381, 
        alt: "Moment précieux à deux" 
      },
      { 
        id: "bill&bill-moment", 
        src: "/images/bill&bill.jpg", 
        width: 993, 
        height: 993, 
        alt: "Moment romantique partagé" 
      },
      { 
        id: "video", 
        src: "/video/video.mp4", 
        width: 1920, 
        height: 1080, 
        alt: "Vidéo de nos moments", 
        isVideo: true
      }
    ]
  },
  {
    id: "histoire",
    title: "Notre Histoire en Images",
    date: "2020-2025",
    coverUrl: "/images/regard.jpg",
    description: "L'évolution de notre amour, de la rencontre virtuelle à aujourd'hui.",
    tags: ["Histoire", "Évolution"],
    photos: [
      { 
        id: "regard", 
        src: "/images/regard.jpg", 
        width: 492, 
        height: 492, 
        alt: "Le début de notre histoire" 
      },
      { 
        id: "p&f2", 
        src: "/images/p&f.jpg", 
        width: 1381, 
        height: 1381, 
        alt: "Notre amour qui grandit" 
      },
      { 
        id: "love2", 
        src: "/images/love.jpg", 
        width: 570, 
        height: 570, 
        alt: "L'amour qui nous unit" 
      },
      { 
        id: "hero-histoire", 
        src: "/images/hero.png", 
        width: 1920, 
        height: 1080, 
        alt: "Notre histoire en images" 
      }
    ]
  },
  {
    id: "collection-complete",
    title: "Collection Complète",
    date: "2024-2025",
    coverUrl: "/images/p&f.jpg",
    description: "Tous nos médias réunis dans une collection complète et organisée.",
    tags: ["Collection", "Complet"],
    photos: [
      { 
        id: "p&f-complete", 
        src: "/images/p&f.jpg", 
        width: 1381, 
        height: 1381, 
        alt: "Priscille et Frédéric ensemble" 
      },
      { 
        id: "bill&bill-complete", 
        src: "/images/bill&bill.jpg", 
        width: 993, 
        height: 993, 
        alt: "Photo de couple romantique" 
      },
      { 
        id: "regard-complete", 
        src: "/images/regard.jpg", 
        width: 492, 
        height: 492, 
        alt: "Regard amoureux" 
      },
      { 
        id: "love-complete", 
        src: "/images/love.jpg", 
        width: 570, 
        height: 570, 
        alt: "Expression d'amour" 
      },
      { 
        id: "drow&drop-complete", 
        src: "/images/drow&drop.jpg", 
        width: 1165, 
        height: 1165, 
        alt: "Moment spécial ensemble" 
      },
      { 
        id: "priscille-complete", 
        src: "/images/priscille.jpg", 
        width: 1920, 
        height: 1080, 
        alt: "Portrait de Priscille" 
      },
      { 
        id: "fred-complete", 
        src: "/images/fred.jpg", 
        width: 1920, 
        height: 1080, 
        alt: "Portrait de Frédéric" 
      },
      { 
        id: "hero-complete", 
        src: "/images/hero.png", 
        width: 1920, 
        height: 1080, 
        alt: "Photo principale" 
      },
      { 
        id: "video-complete", 
        src: "/video/video.mp4", 
        width: 1920, 
        height: 1080, 
        alt: "Vidéo de nos moments", 
        isVideo: true
      }
    ]
  }
];

export const ALBUM_TAGS = [
  "Tous",
  "Couple", 
  "Portraits", 
  "Moments", 
  "Histoire", 
  "Collection",
  "Amour",
  "Souvenirs"
];