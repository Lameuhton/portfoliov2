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
              Politique de Confidentialité
            </motion.h1>

            <motion.div variants={fadeInVariants(0.1)}>
              <h2 className="text-2xl font-display font-semibold mb-6">
                1. Collecte des informations personnelles
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Lorsque vous utilisez le formulaire de contact présent sur ce
                site, certaines informations personnelles peuvent être
                collectées, notamment :
              </p>
              <ul className="text-gray-600 dark:text-gray-300 mb-8 list-disc list-inside">
                <li>Votre nom</li>
                <li>Votre adresse email</li>
                <li>
                  Toute autre information que vous fournissez volontairement
                  dans votre message
                </li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Ces données sont collectées uniquement dans le but de répondre à
                vos demandes ou questions.
              </p>

              <h2 className="text-2xl font-display font-semibold mb-6">
                2. Utilisation des données collectées
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Les informations que vous fournissez via le formulaire de
                contact sont utilisées uniquement pour répondre à vos messages
                ou demandes spécifiques, et pour échanger dans le cadre de
                projets ou d'opportunités professionnelles. Vos données ne sont
                jamais partagées, vendues ou utilisées à des fins commerciales.
              </p>

              <h2 className="text-2xl font-display font-semibold mb-6">
                3. Conservation des données
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Les données collectées via le formulaire de contact sont
                conservées pendant une durée maximale de 12 mois, sauf si une
                relation professionnelle ou contractuelle est établie
                nécessitant une conservation plus longue.
              </p>

              <h2 className="text-2xl font-display font-semibold mb-6">
                4. Partage des données
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Les données collectées sur ce site ne sont pas partagées avec
                des tiers, sauf si la loi l'exige ou avec votre consentement
                explicite.
              </p>

              <h2 className="text-2xl font-display font-semibold mb-6">
                5. Sécurité des données
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Toutes les mesures nécessaires sont prises pour protéger vos
                données contre tout accès non autorisé, perte ou modification.
                Cependant, aucune méthode de transmission de données ou de
                stockage électronique n’est totalement sécurisée. Nous ne
                pouvons garantir une sécurité absolue.
              </p>

              <h2 className="text-2xl font-display font-semibold mb-6">
                6. Vos droits
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Conformément au Règlement Général sur la Protection des Données
                (RGPD), vous disposez des droits suivants :
              </p>
              <ul className="text-gray-600 dark:text-gray-300 mb-8 list-disc list-inside">
                <li>
                  <strong>Droit d’accès :</strong> Vous pouvez demander à
                  consulter les informations personnelles que nous avons
                  collectées à votre sujet.
                </li>
                <li>
                  <strong>Droit de rectification :</strong> Vous pouvez demander
                  la correction de vos données personnelles si elles sont
                  inexactes.
                </li>
                <li>
                  <strong>Droit à l’effacement :</strong> Vous pouvez demander
                  la suppression de vos données personnelles.
                </li>
                <li>
                  <strong>Droit d’opposition :</strong> Vous pouvez vous opposer
                  à l’utilisation de vos données pour certaines finalités.
                </li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Pour exercer vos droits, vous pouvez nous contacter par email à
                : <strong>aurelianeg2000@gmail.com</strong>.
              </p>

              <h2 className="text-2xl font-display font-semibold mb-6">
                7. Cookies
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Ce site n'utilise pas de cookies pour collecter des informations
                sur les utilisateurs.
              </p>

              <h2 className="text-2xl font-display font-semibold mb-6">
                8. Modifications de cette politique
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Cette politique de confidentialité peut être modifiée à tout
                moment pour se conformer aux évolutions législatives ou à des
                modifications dans l’utilisation du site. Les utilisateurs
                seront informés de toute modification majeure via une
                notification sur le site.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}