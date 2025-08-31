# Site de Mariage - Frédéric & Priscille

Un site de mariage élégant et moderne créé avec React, TypeScript et Tailwind CSS.

## 🎨 Design

- **Palette de couleurs** : Violet léger (#CDB4FF), Rose violet (#F3D1F4), Blanc (#FFFFFF)
- **Typographies** : Cormorant Garamond (titres) + Inter (corps)
- **Effets** : Verre dépoli, dégradés doux, animations subtiles

## 🚀 Technologies

- React 18 + TypeScript
- Vite (build tool)
- React Router DOM v7
- Tailwind CSS
- Framer Motion (animations)
- Yet Another React Lightbox (galerie photos)
- Lucide React (icônes)

## 📁 Structure

```
src/
├── components/
│   ├── ui/           # Composants UI réutilisables
│   ├── nav/          # Navigation
│   ├── hero/         # Section héro avec countdown
│   ├── albums/       # Système d'albums photos
│   ├── forms/        # Formulaires (RSVP)
│   └── layout/       # Layout components
├── pages/            # Pages principales
├── data/             # Données statiques
└── router.tsx        # Configuration des routes
```

## 🛠️ Installation

```bash
npm install
npm run dev
```

## 📝 Personnalisation

### 1. Informations du couple

Modifiez `src/data/site.ts` :

```typescript
export const SITE = {
  couple: { bride: "Priscille", groom: "Frédéric" },
  dateISO: "2026-07-18T14:00:00+01:00",
  venue: "Château de la Rose",
  address: "123 Route des Amoureux",
  city: "Provence, France",
  contact: { 
    email: "frederic.priscille@wedding.com", 
    phone: "+33 6 12 34 56 78" 
  }
};
```

### 2. Albums photos

Modifiez `src/data/albums.ts` pour ajouter vos propres albums et photos.

### 3. Images

Remplacez les URLs Pexels par vos propres images :
- Organisez vos photos dans `public/images/albums/`
- Mettez à jour les chemins dans `albums.ts`

## 🎯 Fonctionnalités

- ✅ Navigation SPA fluide
- ✅ Système d'albums avec lightbox avancée
- ✅ Countdown en temps réel
- ✅ Formulaire RSVP avec validation
- ✅ Design responsive (mobile-first)
- ✅ Animations et micro-interactions
- ✅ Filtres par catégories d'albums
- ✅ Partage natif et téléchargement
- ✅ Optimisations performance (lazy loading, etc.)

## 🚢 Déploiement

```bash
npm run build
npm run preview
```

Le site est prêt pour le déploiement sur n'importe quelle plateforme statique (Netlify, Vercel, etc.).