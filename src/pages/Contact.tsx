import { motion } from 'framer-motion';
import { fadeInVariants } from '../lib/utils';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { useForm } from "@formspree/react";

export function Contact() {
  const [state, handleSubmit] = useForm("xoqgzwoa");

  if (state.succeeded) {
    alert("Message submitted!");
    window.location.reload();
    window.scrollTo(0, 0);
  }
  
  return (
    <>
      <SEOHead
        title="Contact"
        description="Contactez Auréliane Gagliardi pour discuter de votre projet web et obtenir un devis personnalisé."
      />
      {/* Hero Section */}
      <section className="pt-36 pb-20 bg-gradient-to-b from-rose-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeInVariants()}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              Parlons de votre projet
            </motion.h1>
            <motion.p
              variants={fadeInVariants(0.2)}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              Je suis à votre écoute pour donner vie à vos idées et créer
              ensemble une solution web qui vous ressemble.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white dark:bg-gray-900" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants()}
              >
                <h2 className="text-2xl font-display font-semibold mb-6">
                  Informations de contact
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  N'hésitez pas à me contacter pour toute question ou pour
                  discuter de votre projet. Je vous répondrai dans les plus
                  brefs délais.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: "contact@example.com",
                      href: "mailto:contact@example.com",
                    },
                    {
                      icon: Phone,
                      label: "Téléphone",
                      value: "+33 6 12 34 56 78",
                      href: "tel:+33612345678",
                    },
                    {
                      icon: MapPin,
                      label: "Localisation",
                      value: "Paris, France",
                    },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-900/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                      </div>
                      <div>
                        <p className="font-medium text-lg">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            className="text-gray-600 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-300">
                            {value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.form
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants(0.2)}
                className="space-y-6"
                onSubmit={handleSubmit}
                method="POST"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-rose-500 outline-none transition-shadow"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-rose-500 outline-none transition-shadow"
                    placeholder="Le sujet de votre message"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-rose-500 outline-none transition-shadow resize-none"
                    placeholder="Décrivez votre projet..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Envoyer le message
                </button>
              </motion.form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}