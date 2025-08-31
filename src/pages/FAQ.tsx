import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Calendar, Clock, Users, Car, Baby, Shirt, Phone, Camera, Heart } from 'lucide-react';
import { SITE } from '../data/site';

export function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Quelle est la date limite pour répondre ?',
      answer: 'Merci de confirmer votre présence avant le 10 decembre, afin que nous ayons un décompte précis. :)',
      icon: Calendar,
      category: 'RSVP'
    },
    {
      question: 'Quelle est la durée de la cérémonie ?',
      answer: 'La cérémonie de mariage débutera à 18h30. L\'ensemble des moments principaux se déroulera avant minuit. À l\'issue de ces célébrations, ceux qui souhaiteront regagner leur domicile pourront naturellement le faire. Quant à ceux qui, pour des raisons de sécurité ou de confort, préféreront rester, nous serons heureux de les accueillir plus longtemps, puisque la salle sera mise à notre disposition jusqu\'au petit matin.',
      icon: Clock,
      category: 'Programme'
    },
    {
      question: 'Puis-je venir accompagné(e) ?',
      answer: 'Veuillez vérifier votre invitation pour savoir si vous pouvez venir accompagné(e) !',
      icon: Users,
      category: 'Invitations'
    },
    {
      question: 'Où puis-je me garer ?',
      answer: 'Il y a beaucoup de places de parking gratuites près de l\'entrée de la salle et nous prendrons des dispositions pour votre sécurité.',
      icon: Car,
      category: 'Logistique'
    },
    {
      question: 'Les enfants sont-ils les bienvenus ?',
      answer: 'Autant nous adorons vos petits, ils ne seront pas inclus dans la cérémonie ni la réception. N\'hésitez pas à nous contacter si vous avez des questions !',
      icon: Baby,
      category: 'Invitations'
    },
    {
      question: 'Que dois-je porter ?',
      answer: 'Violet, blanc, noir.',
      icon: Shirt,
      category: 'Code vestimentaire'
    },
    {
      question: 'Qui dois-je contacter pour des questions ?',
      answer: 'Veuillez appeler notre directeur de festin Mike pour toute question au 555-555-5555.',
      icon: Phone,
      category: 'Contact'
    },
    {
      question: 'Peut-on prendre des photos avec nos téléphones et appareils photo pendant le mariage ?',
      answer: 'Oui ! Nous serions ravis que vous preniez des photos et les partagiez sur notre application Joy. Cependant, merci de ne pas prendre de photos pendant la cérémonie. Nous vous prions de rester à vos places et de ne pas vous levez pendant l\'entrée de mariés.',
      icon: Camera,
      category: 'Photos'
    }
  ];

  const categories = ['Tous', 'RSVP', 'Programme', 'Invitations', 'Logistique', 'Code vestimentaire', 'Contact', 'Photos'];
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredFaqs = activeCategory === 'Tous' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
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
              Questions Fréquentes
            </h1>
            <div className="w-24 h-px bg-violetLight mx-auto mb-8"></div>
            <p className="text-xl text-inkSecondary max-w-3xl mx-auto leading-relaxed">
              Pour tous nos amis et notre famille qui ont beaucoup de questions, 
              consultez d'abord notre FAQ !
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Filtres par catégorie */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-8">Trouvez Rapidement Votre Réponse</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-violetDeep text-white shadow-lg'
                      : 'bg-violetLight/20 text-ink hover:bg-violetLight/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Questions et Réponses */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-violetLight/20 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-violetLight/5 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-violetLight/30 to-roseViolet/30 rounded-full flex items-center justify-center">
                      <faq.icon className="w-5 h-5 text-violetDeep" />
                    </div>
                    <h3 className="font-serif text-lg md:text-xl text-ink font-medium">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-violetDeep" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-violetDeep" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="w-full h-px bg-violetLight/20 mb-4"></div>
                        <p className="text-inkSecondary leading-relaxed text-base">
                          {faq.answer}
                        </p>
                        <div className="mt-3">
                          <span className="inline-block px-3 py-1 bg-violetLight/20 text-violetDeep text-xs rounded-full">
                            {faq.category}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Message de contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-violetLight/30 to-roseViolet/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-violetDeep" />
              </div>
              <h3 className="font-serif text-2xl text-ink mb-4">
                Vous avez d'autres questions ?
              </h3>
              <p className="text-inkSecondary mb-6">
                Si vous ne trouvez pas la réponse à votre question dans cette FAQ, 
                n'hésitez pas à nous contacter directement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-violetDeep text-white rounded-lg hover:bg-violetDeep/90 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Nous Contacter
                </a>
                <a
                  href="/rsvp"
                  className="inline-flex items-center justify-center px-6 py-3 border border-violetDeep text-violetDeep rounded-lg hover:bg-violetDeep hover:text-white transition-all duration-300"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Confirmer Ma Présence
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}