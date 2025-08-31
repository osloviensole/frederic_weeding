import { motion } from 'framer-motion';
import { Heart, MessageCircle, Users, Calendar, Sparkles, Crown } from 'lucide-react';
import { IMAGES } from '../data/images';

export function Story() {
  const storySections = [
    {
      icon: MessageCircle,
      title: "Une Rencontre Inattendue",
      content: "Pendant que le monde entier était à l'arrêt, une rencontre inattendue se préparait… C'était en plein confinement, durant la période du Covid-19. Un simple groupe WhatsApp créé pour partager des pensées bibliques est devenu le début d'une belle histoire.",
      highlight: "Un groupe WhatsApp qui a changé nos vies"
    },
    {
      icon: Heart,
      title: "Les Premiers Échanges",
      content: "C'est là que Frédéric a remarqué Priscille. Elle, de son côté, se souvient d'un audio qu'elle avait envoyé dans le groupe pour préparer une Tour de Garde en ligne… et de ce moment où lui, intrigué, a osé lui écrire en privé. La réponse fut brève : « SALUT, C'EST QUI SVP ? » Mais ce petit échange a ouvert la porte à une nouvelle complicité.",
      highlight: "« SALUT, C'EST QUI SVP ? » - Le début de tout"
    },
    {
      icon: Users,
      title: "La Première Rencontre",
      content: "Les débuts n'ont pas été simples, pourtant, petit à petit, la foi les a rapprochés et l'amour a pris toute la place. Après plusieurs semaines de discussions et d'échanges sincères, le 20 août 2020, ils se sont enfin rencontrés pour la première fois.",
      highlight: "20 août 2020 - Le jour où tout a commencé"
    },
    {
      icon: Crown,
      title: "L'Épreuve du Papa Protecteur",
      content: "Une anecdote amusante reste gravée dans leurs souvenirs : Frédéric passait souvent voir Priscille après le travail. Un jour, son papa l'a trouvé dehors, entouré de ses filles. En le voyant, Priscille s'est discrètement éclipsée ! Après l'avoir salué, son père lui a dit avec sérieux : « Chez moi, les frères viennent voir les frères et les sœurs viennent voir les sœurs. » Protecteur et attentif, il a finalement compris que leurs intentions étaient pures.",
      highlight: "Le papa protecteur qui a testé nos intentions"
    },
    {
      icon: Sparkles,
      title: "L'Écriture de Notre Histoire",
      content: "Depuis ce jour, leur histoire s'est écrite à deux. Ils ont partagé des visites touristiques, des moments d'étude, des défis, des fous rires… et même quelques disputes, surtout lorsque Priscille oubliait de répondre aux messages ! Mais chaque fois, ils se réconciliaient vite, car l'amour était plus fort.",
      highlight: "Des visites, des études, des fous rires... et quelques disputes !"
    },
    {
      icon: Calendar,
      title: "La Demande en Mariage",
      content: "Puis arriva le grand moment : la demande en mariage. Frédéric avait préparé cet instant avec soin et complicité, aidé par l'amie de Priscille, Ketty. Entre le décalage horaire, l'achat de la bague et le stress de l'organisation, il avoue avoir été plus nerveux que pour un entretien d'embauche. Mais il a su trouver les bons mots. Priscille, émue et surprise, a dit « Oui » sans hésiter.",
      highlight: "Plus nerveux que pour un entretien d'embauche !"
    }
  ];

  const qualities = [
    {
      person: "Frédéric",
      qualities: ["La force", "La douceur", "Le rire", "L'attachement à Jéhovah"],
      color: "from-violetDeep to-violetLight"
    },
    {
      person: "Priscille", 
      qualities: ["La constance", "La vérité", "La stabilité", "Son roc"],
      color: "from-roseViolet to-rosePale"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-violetPale via-white to-rosePale overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-violetLight/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-roseViolet/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-light text-ink mb-6">
              Notre Histoire d'Amour
            </h1>
            <div className="w-24 h-px bg-violetLight mx-auto mb-8"></div>
            <p className="text-xl text-inkSecondary max-w-3xl mx-auto leading-relaxed">
              De la rencontre virtuelle pendant le confinement à la demande en mariage, 
              découvrez comment notre amour a grandi malgré les obstacles...
            </p>
          </motion.div>

          {/* Image principale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
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
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-ink mb-6">Le Récit de Notre Aventure</h2>
            <div className="w-24 h-px bg-violetLight mx-auto mb-8"></div>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {storySections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Icône et contenu */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="text-center md:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violetLight/30 to-roseViolet/30 rounded-full mb-6">
                      <section.icon className="w-8 h-8 text-violetDeep" />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-ink mb-4">{section.title}</h3>
                    <p className="text-inkSecondary text-lg leading-relaxed mb-4">{section.content}</p>
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-violetLight/20 to-roseViolet/20 rounded-full">
                      <span className="text-violetDeep font-medium text-sm">{section.highlight}</span>
                    </div>
                  </div>
                </div>

                {/* Ligne de connexion */}
                <div className="hidden md:flex flex-col items-center mx-8">
                  <div className="w-1 h-24 bg-gradient-to-b from-violetLight to-roseViolet rounded-full"></div>
                  <div className="w-4 h-4 rounded-full bg-violetDeep mt-2">
                    <Heart className="text-white w-2 h-2 mx-auto mt-1" fill="currentColor" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualités Section */}
      <section className="py-20 bg-gradient-to-b from-white to-rosePale">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-ink mb-6">Ce Qui Nous Unit</h2>
            <div className="w-24 h-px bg-violetLight mx-auto mb-8"></div>
            <p className="text-xl text-inkSecondary max-w-3xl mx-auto">
              La foi, la sincérité et un amour profond sont les fondements de notre relation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {qualities.map((person, index) => (
              <motion.div
                key={person.person}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-24 h-24 bg-gradient-to-br ${person.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <Heart className="w-12 h-12 text-white" fill="currentColor" />
                </div>
                <h3 className="font-serif text-3xl text-ink mb-6">{person.person}</h3>
                <div className="space-y-3">
                  {person.qualities.map((quality, qIndex) => (
                    <div key={qIndex} className="flex items-center justify-center space-x-3">
                      <div className="w-2 h-2 bg-violetLight rounded-full"></div>
                      <span className="text-inkSecondary text-lg">{quality}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 bg-gradient-to-r from-violetDeep to-violetLight">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">
              Une Vie Réelle à Écrire Ensemble
            </h2>
            <p className="text-white/90 text-xl leading-relaxed mb-8">
              Aujourd'hui, ce n'est plus une simple histoire en ligne, mais une vie réelle 
              qu'ils ont choisi d'écrire ensemble. Ce qui les unit ? La foi, la sincérité et un amour profond.
            </p>
            <div className="flex items-center justify-center space-x-4 text-white/80">
              <span className="text-2xl">💍</span>
              <span className="text-2xl">✨</span>
              <span className="text-2xl">💕</span>
            </div>
            <p className="text-white/90 text-lg mt-6">
              Et c'est avec joie et reconnaissance qu'ils vous accueillent dans cette aventure, 
              car si vous êtes ici, c'est que vous faites partie de leur histoire.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}