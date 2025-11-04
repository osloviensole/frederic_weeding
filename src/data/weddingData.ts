export interface StoryItem {
  title: string;
  description: string;
  image: string;
}

export interface Event {
  type: string;
  title: string;
  time: string;
  location: string;
  address: string;
  mapsUrl: string;
  description: string;
}

export interface GalleryItem {
  title: string;
  description: string;
  image: string;
}

export interface VideoItem {
  title: string;
  description: string;
  image: string;
  video: string;
}

export interface Gift {
  name: string;
  price: string;
  description: string;
  image: string;
}

export interface WeddingData {
  story: StoryItem[];
  events: Event[];
  gallery: GalleryItem[];
  videos: VideoItem[];
  gifts: Gift[];
}

export const siteData: WeddingData = {
  story: [
    {
      title: "Première Rencontre",
      description: "Un hasard merveilleux dans un café parisien",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 225'%3E%3Crect fill='%232a2a2a' width='400' height='225'/%3E%3Ctext x='50%25' y='50%25' fill='%23666' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='18'%3E2018%3C/text%3E%3C/svg%3E"
    },
    {
      title: "Premier Rendez-vous",
      description: "Une soirée inoubliable au bord de la Seine",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 225'%3E%3Crect fill='%232a2a2a' width='400' height='225'/%3E%3Ctext x='50%25' y='50%25' fill='%23666' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='18'%3ERomance%3C/text%3E%3C/svg%3E"
    },
    {
      title: "Voyage en Italie",
      description: "Deux semaines magiques à découvrir Rome et Venise",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 225'%3E%3Crect fill='%232a2a2a' width='400' height='225'/%3E%3Ctext x='50%25' y='50%25' fill='%23666' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='18'%3EVoyage%3C/text%3E%3C/svg%3E"
    },
    {
      title: "La Demande",
      description: "Un coucher de soleil sur les toits de Paris",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 225'%3E%3Crect fill='%232a2a2a' width='400' height='225'/%3E%3Ctext x='50%25' y='50%25' fill='%23666' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='18'%3EProposition%3C/text%3E%3C/svg%3E"
    },
    {
      title: "Préparatifs",
      description: "Planning de notre plus beau jour ensemble",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 225'%3E%3Crect fill='%232a2a2a' width='400' height='225'/%3E%3Ctext x='50%25' y='50%25' fill='%23666' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='18'%3EPr%C3%A9paration%3C/text%3E%3C/svg%3E"
    }
  ],
  events: [
    {
      type: "Cérémonie",
      title: "Cérémonie de Mariage",
      time: "15h00",
      location: "Salle de Fêtes Albertine Square",
      address: "Kinshasa, République Démocratique du Congo",
      mapsUrl: "https://maps.google.com/?q=Salle+de+Fêtes+Albertine+Square+Kinshasa",
      description: "La cérémonie aura lieu dans cette magnifique salle des fêtes à Kinshasa."
    },
    {
      type: "Réception",
      title: "Cocktail & Réception",
      time: "18h00",
      location: "Salle de Fêtes Albertine Square",
      address: "Kinshasa, République Démocratique du Congo",
      mapsUrl: "https://maps.google.com/?q=Salle+de+Fêtes+Albertine+Square+Kinshasa",
      description: "Rejoignez-nous pour un cocktail et un dîner de célébration."
    },
    {
      type: "Soirée",
      title: "Soirée Dansante",
      time: "22h00",
      location: "Salle de Fêtes Albertine Square",
      address: "Kinshasa, République Démocratique du Congo",
      mapsUrl: "https://maps.google.com/?q=Salle+de+Fêtes+Albertine+Square+Kinshasa",
      description: "Dansons jusqu'au bout de la nuit pour célébrer ce jour exceptionnel."
    }
  ],
  gallery: [
    { title: "Paris", description: "Notre ville préférée", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 225'%3E%3Crect fill='%232a2a2a' width='400' height='225'/%3E%3Ctext x='50%25' y='50%25' fill='%23666' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='18'%3EParis%3C/text%3E%3C/svg%3E" },
    { title: "Voyage", description: "Nos aventures", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 225'%3E%3Crect fill='%232a2a2a' width='400' height='225'/%3E%3Ctext x='50%25' y='50%25' fill='%23666' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='18'%3EVoyages%3C/text%3E%3C/svg%3E" },
    { title: "Famille", description: "Moments précieux", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 225'%3E%3Crect fill='%232a2a2a' width='400' height='225'/%3E%3Ctext x='50%25' y='50%25' fill='%23666' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='18'%3EFamille%3C/text%3E%3C/svg%3E" },
    { title: "Amis", description: "Rires et souvenirs", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 225'%3E%3Crect fill='%232a2a2a' width='400' height='225'/%3E%3Ctext x='50%25' y='50%25' fill='%23666' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='18'%3EAmis%3C/text%3E%3C/svg%3E" },
    { title: "Nature", description: "Escapades champêtres", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 225'%3E%3Crect fill='%232a2a2a' width='400' height='225'/%3E%3Ctext x='50%25' y='50%25' fill='%23666' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='18'%3ENature%3C/text%3E%3C/svg%3E" }
  ],
  videos: [
    { title: "Notre Histoire", description: "Vidéo montage", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 225'%3E%3Crect fill='%231f1f1f' width='400' height='225'/%3E%3Ccircle cx='200' cy='112.5' r='40' fill='%23e50914'/%3E%3Cpolygon points='185,95 220,112.5 185,130' fill='white'/%3E%3C/svg%3E", video: "intro" },
    { title: "La Demande", description: "Moment magique", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 225'%3E%3Crect fill='%231f1f1f' width='400' height='225'/%3E%3Ccircle cx='200' cy='112.5' r='40' fill='%23e50914'/%3E%3Cpolygon points='185,95 220,112.5 185,130' fill='white'/%3E%3C/svg%3E", video: "proposal" },
    { title: "Voyage Italie", description: "Aventure italienne", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 225'%3E%3Crect fill='%231f1f1f' width='400' height='225'/%3E%3Ccircle cx='200' cy='112.5' r='40' fill='%23e50914'/%3E%3Cpolygon points='185,95 220,112.5 185,130' fill='white'/%3E%3C/svg%3E", video: "italy" }
  ],
  gifts: [
    { name: "Voyage de Noces", price: "Contribution libre", description: "Aidez-nous à réaliser notre voyage de rêve aux Maldives", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%232a2a2a' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' fill='%23666' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='20'%3E%E2%9C%88%3C/text%3E%3C/svg%3E" },
    { name: "Machine à Café", price: "250€", description: "Pour nos petits-déjeuners en amoureux", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%232a2a2a' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' fill='%23666' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='50'%3E%E2%98%95%3C/text%3E%3C/svg%3E" },
    { name: "Set de Vaisselle", price: "180€", description: "Service élégant pour 8 personnes", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%232a2a2a' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' fill='%23666' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='50'%3E%F0%9F%8D%BD%3C/text%3E%3C/svg%3E" },
    { name: "Plantes d'Intérieur", price: "80€", description: "Pour verdure notre nouveau chez-nous", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%232a2a2a' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' fill='%23666' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='50'%3E%F0%9F%AA%B4%3C/text%3E%3C/svg%3E" },
    { name: "Cours de Cuisine", price: "150€", description: "Atelier cuisine gastronomique pour deux", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%232a2a2a' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' fill='%23666' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='50'%3E%F0%9F%91%A8%E2%80%8D%F0%9F%8D%B3%3C/text%3E%3C/svg%3E" },
    { name: "Cadre Photo", price: "60€", description: "Pour immortaliser nos meilleurs souvenirs", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect fill='%232a2a2a' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' fill='%23666' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='50'%3E%F0%9F%96%BC%3C/text%3E%3C/svg%3E" }
  ]
};

