import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Users, Camera, Crown, CircleDot, BookOpen, Star, Gift, X, Mail, Phone, MapPin } from 'lucide-react';
import { SITE } from '../data/site';

export function Party() {
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teamMembers = [
    {
      name: 'Joello Bams',
      role: 'Témoin',
      icon: Users,
      color: 'from-violetDeep to-violetLight',
      description: 'Témoin officiel de notre union',
      photo: '/images/celebration/joella.jpg',
      fallbackPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      bio: 'Joello est un ami de longue date qui a toujours été là pour nous soutenir. Sa sagesse et son expérience en font un témoin parfait pour notre union.',
      contact: 'joello.bams@email.com',
      phone: '+33 6 12 34 56 78',
      location: 'Paris, France'
    },
    {
      name: 'Claudiah-Jordan Pelo',
      role: 'Témoin',
      icon: Users,
      color: 'from-roseViolet to-rosePale',
      description: 'Témoin officiel de notre union',
      photo: '/images/celebration/jordan.jpg',
      fallbackPhoto: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      bio: 'Claudiah est un ami très cher, qui occupe une place toute particulière dans notre vie. Il fait partie des deux personnes qui nous ont le plus encouragés à persévérer et à croire en notre histoire. Nous lui devons beaucoup, et c’est avec une profonde reconnaissance que nous avons souhaité qu’il soit notre témoin ainsi que l’orateur de notre discours de mariage.',
      contact: 'claudiah.pelo@email.com',
      phone: '+33 6 98 76 54 32',
      location: 'Lyon, France'
    },
    {
      name: 'Jaspe Mola',
      role: 'Videaste',
      icon: Camera,
      color: 'from-violetLight to-roseViolet',
      description: 'Capturera tous nos moments précieux',
      photo: '/images/celebration/jaspe.jpg',
      fallbackPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      bio: 'Mr le photographe ',
      contact: 'jaspe.mola@photography.com',
      phone: '+33 6 11 22 33 44',
      location: 'Marseille, France'
    },
    {
      name: 'Ocean',
      role: 'Photographe',
      icon: Camera,
      color: 'from-violetLight to-roseViolet',
      description: 'Capturera tous nos moments précieux',
      photo: '/images/celebration/ocean.jpg',
      fallbackPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      bio: 'Mr le photographe ',
      contact: 'ocean@photography.com',
      phone: '+33 6 11 22 33 44',
      location: 'Marseille, France'
    },
    {
      name: 'Couple Kwakoyo',
      role: 'Le parrain et la marraine',
      icon: Crown,
      color: 'from-roseViolet to-violetDeep',
      description: 'Nos guides spirituels et mentors',
      photo: '/images/celebration/kwakoyo.jpg',
      fallbackPhoto: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      bio: 'Dans toute histoire d’amour, il y a des personnes qui marquent, qui soutiennent et qui inspirent. Pour nous, ces personnes spéciales sont notre parrain et notre marraine de mariage. Ils ne sont pas seulement des témoins privilégiés de notre union, mais aussi des repères, des conseillers et des modèles que nous respectons profondément. Leur rôle ne se limite pas à cette cérémonie ; ils seront à nos côtés pour nous accompagner dans cette nouvelle étape de notre vie, avec sagesse, bienveillance et amour. C’est un honneur pour nous de les avoir à nos côtés en ce jour si précieux.',
      contact: 'kwakoyo.family@email.com',
      phone: '+33 6 55 44 33 22',
      location: 'Toulouse, France'
    },
  ];

  const categories = [
    {
      title: 'Témoins',
      members: teamMembers.filter(member => member.role === 'Témoin'),
      icon: Users,
      color: 'from-violetDeep to-roseViolet'
    },
    {
      title: 'Professionnels',
      members: teamMembers.filter(member => ['Photographe', 'Officiant'].includes(member.role)),
      icon: Camera,
      color: 'from-roseViolet to-violetLight'
    },
    {
      title: 'Parrain et Marraine',
      members: teamMembers.filter(member => member.role === 'Le parrain et la marraine'),
      icon: Crown,
      color: 'from-violetDeep to-roseViolet'
    },
    {
      title: 'Garçons d\'Honneur',
      members: teamMembers.filter(member => member.role === 'Garçon d\'honneur'),
      icon: Star,
      color: 'from-violetLight to-roseViolet'
    },
    {
      title: 'Porteur des Alliances',
      members: teamMembers.filter(member => member.role === 'Porteur des alliances'),
      icon: CircleDot,
      color: 'from-roseViolet to-violetDeep'
    }
  ];

  const openModal = (member: any) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

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
              Notre Équipe de Célébration
            </h1>
            <div className="w-24 h-px bg-violetLight mx-auto mb-8"></div>
            <p className="text-xl text-inkSecondary max-w-3xl mx-auto leading-relaxed">
              Ces personnes extraordinaires nous accompagnent dans ce moment si spécial de notre vie
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-8">L'Équipe Complète</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group cursor-pointer"
                  onClick={() => openModal(member)}
                >
                  <div className="relative mb-4">
                    <div className="w-28 h-28 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border-2 border-violetLight/30">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = member.fallbackPhoto;
                        }}
                      />
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center shadow-lg`}>
                      <member.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="font-serif text-lg text-ink font-medium mb-1 group-hover:text-violetDeep transition-colors duration-300">{member.name}</h3>
                  <p className="text-sm text-violetDeep font-medium">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Categories */}
      <section className="py-20 bg-gradient-to-br from-violetPale/30 via-white to-rosePale/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-8">Par Rôle et Responsabilité</h2>
            <p className="text-lg text-inkSecondary max-w-2xl mx-auto">
              Chaque membre de notre équipe a un rôle unique et précieux dans notre célébration
            </p>
          </motion.div>

          <div className="space-y-16">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
              >
                <div className="text-center mb-12">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-serif text-3xl text-ink mb-4">{category.title}</h3>
                  <div className="w-16 h-px bg-violetLight mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.members.map((member, memberIndex) => (
                    <motion.div
                      key={memberIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: memberIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-violetLight/20 cursor-pointer group"
                      onClick={() => openModal(member)}
                    >
                      <div className="text-center mb-6">
                        <div className="relative mb-6">
                          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-2 border-violetLight/30">
                            <img
                              src={member.photo}
                              alt={member.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = member.fallbackPhoto;
                              }}
                            />
                          </div>
                          <div className={`absolute -bottom-1 -right-1 w-12 h-12 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center shadow-lg`}>
                            <member.icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        
                        <h4 className="font-serif text-xl text-ink font-medium mb-2 group-hover:text-violetDeep transition-colors duration-300">{member.name}</h4>
                        <p className="text-violetDeep font-semibold text-lg mb-3">{member.role}</p>
                        <p className="text-inkSecondary text-sm leading-relaxed">{member.description}</p>
                      </div>

                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-violetLight/20 rounded-full group-hover:bg-violetLight/30 transition-colors duration-300">
                          <Heart className="w-5 h-5 text-violetDeep" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Message */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-violetLight/30 to-roseViolet/30 flex items-center justify-center">
              <Gift className="w-12 h-12 text-violetDeep" />
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">
              Notre Reconnaissance
            </h2>
            
            <p className="text-lg text-inkSecondary leading-relaxed mb-8">
              Nous sommes infiniment reconnaissants à chacun de ces êtres chers qui acceptent 
              de jouer un rôle si important dans notre célébration. Leur présence et leur 
              soutien rendent ce jour encore plus spécial et mémorable.
            </p>
            
            <div className="w-32 h-px bg-gradient-to-r from-violetLight to-roseViolet mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Modal Popup */}
      <AnimatePresence>
        {isModalOpen && selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative p-8 pb-6">
                <button
                  onClick={closeModal}
                  className="absolute top-6 right-6 w-10 h-10 bg-violetLight/20 rounded-full flex items-center justify-center hover:bg-violetLight/30 transition-colors duration-300"
                >
                  <X className="w-5 h-5 text-violetDeep" />
                </button>
                
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-violetLight/30">
                      <img
                        src={selectedMember.photo}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = selectedMember.fallbackPhoto;
                        }}
                      />
                    </div>
                    <div className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br ${selectedMember.color} flex items-center justify-center shadow-lg`}>
                      <selectedMember.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <h2 className="font-serif text-3xl text-ink font-medium mb-2">{selectedMember.name}</h2>
                  <p className="text-violetDeep font-semibold text-xl mb-4">{selectedMember.role}</p>
                  <p className="text-inkSecondary text-lg leading-relaxed">{selectedMember.bio}</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="px-8 pb-8">
                <div className="bg-violetLight/10 rounded-2xl p-6">
                  <h3 className="font-serif text-xl text-ink font-medium mb-4 text-center">Informations de Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-violetDeep flex-shrink-0" />
                      <span className="text-inkSecondary">{selectedMember.contact}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-violetDeep flex-shrink-0" />
                      <span className="text-inkSecondary">{selectedMember.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-violetDeep flex-shrink-0" />
                      <span className="text-inkSecondary">{selectedMember.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}