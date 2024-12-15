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
              Mentions Légales
            </motion.h1>
            
            <motion.div variants={fadeInVariants(0.1)}>
              <h2>1. Informations légales</h2>
              <p>
                Ce site est édité par Auréliane Gagliardi, développeuse web indépendante.
                <br />
                Adresse : [Votre adresse]
                <br />
                Email : contact@example.com
                <br />
                SIRET : [Votre numéro SIRET]
              </p>

              <h2>2. Hébergement</h2>
              <p>
                Ce site est hébergé par [Nom de l'hébergeur]
                <br />
                Adresse : [Adresse de l'hébergeur]
              </p>

              <h2>3. Propriété intellectuelle</h2>
              <p>
                L'ensemble de ce site relève de la législation française et internationale 
                sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
                reproduction sont réservés.
              </p>

              <h2>4. Données personnelles</h2>
              <p>
                Les informations recueillies via le formulaire de contact sont destinées 
                uniquement à répondre à vos demandes. Conformément à la loi "Informatique 
                et Libertés", vous disposez d'un droit d'accès, de modification et de 
                suppression des données vous concernant.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}