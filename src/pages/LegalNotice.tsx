import { motion } from 'framer-motion';
import { fadeInVariants } from '../lib/utils';
import { SEOHead } from '../components/SEOHead';

export function LegalNotice() {
  return (
    <>
      <SEOHead
        title="Mentions Légales"
        description="Mentions légales et informations juridiques concernant le site web d'Auréliane Gagliardi, développeuse web."
      />
      <div className="min-h-screen py-36">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto prose dark:prose-invert"
          >
            <motion.h1
              variants={fadeInVariants()}
              className="text-4xl md:text-5xl font-display font-bold mb-20 text-center"
            >
              Mentions Légales
            </motion.h1>

            <motion.div variants={fadeInVariants(0.1)}>
              <h2 className="text-2xl font-display font-semibold mb-6">
                1. Éditeur du site
              </h2>
              <div className="text-gray-600 dark:text-gray-300 mb-8">
                <p>
                  Ce site est édité par Auréliane Gagliardi, développeuse web
                  dont la profession est exercée dans le cadre de la Smart
                  (coopérative d'activité).
                </p>
                <p>Adresse email : aurelianeg2000@gmail.com</p>
              </div>

              <h2 className="text-2xl font-display font-semibold mb-6">
                2. Responsable juridique
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Smart Belgium SCRL Rue Coenraets 72, 1060 Bruxelles, Belgique
                <br />
                Numéro d’entreprise : BE 0475.246.211
                <br />
                Site web :{" "}
                <a href="https://www.smartbe.be" target="_blank">
                  www.smartbe.be
                </a>
              </p>

              <h2 className="text-2xl font-display font-semibold mb-6">
                3. Hébergement
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Ce site est hébergé par o2switch.
                <br />
                Adresse : Chem. des Pardiaux, 63000 Clermont-Ferrand, France
              </p>

              <h2 className="text-2xl font-display font-semibold mb-6">
                4. Propriété intellectuelle
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Tous les contenus présents sur ce site (textes, images,
                graphismes) sont la propriété de Auréliane Gagliardi, sauf
                mention contraire. Certaines images utilisées sur ce site
                proviennent de la plateforme Unsplash et sont utilisées
                conformément à leur licence libre. Les icônes utilisées sur ce
                site proviennent de la bibliothèque Lucide React et sont
                utilisées conformément à leur licence. Toute reproduction ou
                utilisation du contenu de ce site sans autorisation préalable
                est interdite.
              </p>

              <h2 className="text-2xl font-display font-semibold mb-6">
                5. Clause limitative de responsabilité
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                L'éditeur du site et la Smart ne peuvent être tenus responsables
                des éventuels dommages directs ou indirects liés à l'utilisation
                de ce site ou des informations qui y sont présentées.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}