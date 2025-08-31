import { Hero } from '../components/hero/Hero';
import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin, Camera, Users, Gift, Play, Image } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { IMAGES } from '../data/images';

export function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Section Notre Histoire */}
      <section className="py-20 bg-gradient-to-b from-violetPale to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-ink mb-6">Notre Histoire</h2>
            <div className="w-24 h-px bg-violetLight mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={IMAGES.story.main}
                    alt="Notre histoire d'amour"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = IMAGES.story.fallback;
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-roseViolet/40 to-violetLight/40 rounded-full blur-xl"></div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-serif text-3xl text-ink">Une Rencontre Magique</h3>
              <p className="text-inkSecondary text-lg leading-relaxed">
                Notre histoire a commencé par un regard, un sourire, et cette sensation inexplicable 
                que quelque chose de spécial venait de se passer. Depuis ce jour, chaque moment 
                ensemble nous rapproche un peu plus de notre rêve de partager notre amour avec 
                ceux qui nous sont chers.
              </p>
              <p className="text-inkSecondary text-lg leading-relaxed">
                Le 20 décembre 2025, nous unirons nos vies dans la joie et la célébration, 
                entourés de notre famille et de nos amis les plus proches.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Galerie Photos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-ink mb-6">Nos Moments Précieux</h2>
            <div className="w-24 h-px bg-violetLight mx-auto mb-8"></div>
            <p className="text-inkSecondary text-lg max-w-2xl mx-auto">
              Découvrez quelques-uns des moments qui ont marqué notre parcours ensemble
            </p>
          </motion.div>
          
          {/* Grille de photos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {IMAGES.gallery.photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-square rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-lg">
                  <img
                    src={photo}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = IMAGES.gallery.fallback;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <Image className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Section Vidéo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-8"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-auto"
                controls
                poster={IMAGES.gallery.photos[0]} // Utilise la première photo comme poster
              >
                <source src={IMAGES.gallery.video} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-2">
                <Play className="w-4 h-4" />
                <span>Vidéo</span>
              </div>
            </div>
          </motion.div>
          
          <div className="text-center">
            <Button variant="secondary" size="lg">
              Voir Plus de Photos
            </Button>
          </div>
        </div>
      </section>

      {/* Section Célébration */}
      <section className="py-20 bg-gradient-to-b from-white to-rosePale">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-ink mb-6">Célébrons Ensemble</h2>
            <div className="w-24 h-px bg-violetLight mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Calendar,
                title: "Discours",
                description: "Discours de mariage à la salle du royaume des témoins de Jéhovah",
                time: "14h30"
              },
              {
                icon: Users,
                title: "Réception",
                description: "Partagez avec nous ce moment de joie et de festivités",
                time: "18h30"
              },
              {
                icon: Gift,
                title: "Danse de fin de soirée",
                description: "Un moment de danse et de festivités",
                time: "20h00"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 glass-effect rounded-2xl hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-violetLight/30 to-roseViolet/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-violetDeep" />
                </div>
                <h3 className="font-serif text-2xl text-ink mb-4">{item.title}</h3>
                <p className="text-inkSecondary mb-4">{item.description}</p>
                <div className="text-violetDeep font-semibold text-lg">{item.time}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 bg-gradient-to-r from-violetDeep to-violetLight">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Rejoignez-Nous Pour Ce Moment Unique
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Votre présence rendra cette journée encore plus spéciale. 
              Confirmez votre présence et partagez avec nous cette célébration de l'amour.
            </p>
            <div className="space-x-4">
              <Button size="lg" className="bg-roseViolet text-white hover:bg-roseViolet/90 border-roseViolet">
                Confirmer Ma Présence
              </Button>
              <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-violetDeep">
                Voir le Programme
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}