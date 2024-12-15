import { motion } from 'framer-motion';
import { fadeInVariants } from '../lib/utils';
import { SEOHead } from '../components/SEOHead';

export function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title="Politique de Confidentialité"
        description="Politique de confidentialité détaillant la gestion et la protection de vos données personnelles sur le site d'Auréliane Gagliardi."
      />
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto prose dark:prose-invert"
          >
            <motion.h1
              variants={fadeInVariants()}
              className="text-4xl font-display font-bold mb-8 text-center"
            >
              Politique de Confidentialité
            </motion.h1>
            
            <motion.div variants={fadeInVariants(0.1)}>
              <h2>1. Collecte des données</h2>
              <p>
                Je collecte uniquement les données personnelles que vous me fournissez 
                volontairement via le formulaire de contact : nom, email et message.
              </p>

              <h2>2. Utilisation des données</h2>
              <p>
                Les données collectées sont utilisées uniquement pour :
              </p>
              <ul>
                <li>Répondre à vos demandes de contact</li>
                <li>Vous envoyer des informations relatives à vos projets</li>
                <li>Améliorer la qualité de mes services</li>
              </ul>

              <h2>3. Protection des données</h2>
              <p>
                Je m'engage à protéger vos données personnelles et à ne pas les partager 
                avec des tiers sans votre consentement explicite.
              </p>

              <h2>4. Cookies</h2>
              <p>
                Ce site utilise des cookies techniques essentiels au fonctionnement du 
                site et à l'amélioration de votre expérience de navigation.
              </p>

              <h2>5. Vos droits</h2>
              <p>
                Conformément au RGPD, vous disposez des droits suivants concernant vos 
                données personnelles :
              </p>
              <ul>
                <li>Droit d'accès</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}