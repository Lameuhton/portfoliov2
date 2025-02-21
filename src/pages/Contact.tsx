import { motion } from "framer-motion";
import { fadeInVariants } from "../lib/utils";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { SEOHead } from "../components/SEOHead";
import { useState } from "react";

export function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const response = await fetch("https://formspree.io/f/xqaenokn", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setShowSuccess(true);
      event.target.reset();
      setTimeout(() => setShowSuccess(false), 5000);
    } else {
      alert("Une erreur est survenue, veuillez réessayer.");
    }
  };

  return (
    <>
      <SEOHead
        title="Contact"
        description="Développeuse web en recherche d'opportunités, contactez-moi pour en savoir plus sur mon profil et mes compétences."
      />
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
              Contactez-moi
            </motion.h1>
            <motion.p
              variants={fadeInVariants(0.2)}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              Que ce soit pour un projet web ou pour discuter d'une opportunité
              professionnelle, je suis toujours à la recherche de nouveaux
              défis.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="pt-20 pb-36 bg-white dark:bg-gray-900" id="contact">
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
                  Vous pouvez me contacter via ce formulaire ou par email pour
                  toute proposition ou collaboration. Je m'engage à vous
                  répondre rapidement !
                </p>
                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: "aurelianeg2000@gmail.com",
                      href: "mailto:aurelianeg2000@gmail.com",
                    },
                    {
                      icon: MapPin,
                      label: "Localisation",
                      value: "Liège, Belgique",
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
                className="space-y-6 relative"
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
                    required
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
                    required
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
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-rose-500 outline-none transition-shadow resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Envoyer le message
                </button>

                {showSuccess && (
                  <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-xl flex items-center gap-2 shadow-md">
                    <CheckCircle className="w-5 h-5" />
                    Message envoyé avec succès !
                  </div>
                )}
              </motion.form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
