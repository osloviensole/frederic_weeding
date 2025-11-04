import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Créer le dossier uploads s'il n'existe pas
const uploadsDir = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configuration de multer pour stocker les fichiers
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    // Générer un nom de fichier unique avec timestamp
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, `gallery-${uniqueSuffix}${ext}`);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB max
  },
  fileFilter: (req, file, cb) => {
    // Accepter uniquement les images
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Seules les images sont autorisées'));
    }
  }
});

// Route pour uploader une photo
app.post('/api/upload-photo', upload.single('photo'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Aucun fichier fourni' });
    }

    const photoUrl = `/uploads/${req.file.filename}`;
    const photoData = {
      title: req.body.title || req.file.originalname.replace(/\.[^/.]+$/, ''),
      description: req.body.description || 'Photo ajoutée',
      image: photoUrl,
      filename: req.file.filename
    };

    res.json(photoData);
  } catch (error) {
    console.error('Erreur lors de l\'upload:', error);
    res.status(500).json({ error: 'Erreur lors de l\'upload de la photo' });
  }
});

// Route pour supprimer une photo
app.delete('/api/delete-photo/:filename', (req, res) => {
  try {
    const filename = req.params.filename;
    const filePath = path.join(uploadsDir, filename);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      res.json({ success: true, message: 'Photo supprimée' });
    } else {
      res.status(404).json({ error: 'Photo non trouvée' });
    }
  } catch (error) {
    console.error('Erreur lors de la suppression:', error);
    res.status(500).json({ error: 'Erreur lors de la suppression de la photo' });
  }
});

// Route pour lister les photos existantes du dossier image
app.get('/api/existing-photos', (req, res) => {
  try {
    const imageDir = path.join(__dirname, 'public', 'image');
    if (!fs.existsSync(imageDir)) {
      return res.json([]);
    }
    
    const files = fs.readdirSync(imageDir);
    const photos = files
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map(file => {
        const nameWithoutExt = file.replace(/\.[^/.]+$/, '');
        return {
          filename: file,
          image: `/image/${file}`,
          title: nameWithoutExt.replace(/[_-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          description: 'Photo de la galerie',
          isExisting: true
        };
      });
    res.json(photos);
  } catch (error) {
    console.error('Erreur lors de la lecture des photos existantes:', error);
    res.status(500).json({ error: 'Erreur lors de la lecture des photos existantes' });
  }
});

// Route pour lister les photos uploadées
app.get('/api/photos', (req, res) => {
  try {
    const files = fs.existsSync(uploadsDir) ? fs.readdirSync(uploadsDir) : [];
    const photos = files
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map(file => ({
        filename: file,
        image: `/uploads/${file}`,
        title: file.replace(/^gallery-\d+-/, '').replace(/\.[^/.]+$/, ''),
        description: 'Photo ajoutée',
        isExisting: false
      }));
    res.json(photos);
  } catch (error) {
    console.error('Erreur lors de la lecture des photos:', error);
    res.status(500).json({ error: 'Erreur lors de la lecture des photos' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
  console.log(`📁 Photos stockées dans: ${uploadsDir}`);
});

