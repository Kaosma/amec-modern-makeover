import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';
import contactBg from '@/assets/ameco_contact.jpg';
import SocialLinks from './SocialLinks';

const cardCls =
  'flex gap-4 items-start p-6 rounded-2xl bg-card/90 backdrop-blur-sm border border-border/50';

export default function ContactSection() {
  return (
    <section
      id="kontakt"
      className="relative min-h-[80vh] overflow-hidden section-padding side-page-top"
    >
      <div
        className="absolute inset-0 z-0 w-full overflow-hidden bg-background"
        aria-hidden="true"
      >
        <img
          src={contactBg}
          alt=""
          className="absolute inset-0 block h-full min-h-full w-full min-w-full max-w-none object-cover object-center"
        />

        <div className="absolute inset-0 bg-background/75" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-widest text-primary">
            Kontakta oss
          </p>

          <h1 className="font-display text-3xl md:text-5xl">
            Kontakta oss för våra{' '}
            <span className="text-gradient-gold">
              tjänster och priser
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="grid gap-5 md:grid-cols-3"
        >
          <div className={cardCls}>
            <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />

            <div>
              <p className="font-medium">
                AMECO Konsult AB
              </p>

              <p className="text-sm text-muted-foreground">
                Fågelvägen 34, 135 53 Tyresö
              </p>
            </div>
          </div>

          <a
            href="tel:+46884875"
            className={`${cardCls} group transition-colors hover:border-primary/30`}
          >
            <Phone className="h-5 w-5 flex-shrink-0 text-primary" />

            <span className="text-muted-foreground transition-colors group-hover:text-primary">
              +46 8 84 87 50
            </span>
          </a>

          <a
            href="mailto:info@amecokonsult.se"
            className={`${cardCls} group transition-colors hover:border-primary/30`}
          >
            <Mail className="h-5 w-5 flex-shrink-0 text-primary" />

            <span className="break-all text-muted-foreground transition-colors group-hover:text-primary">
              info@amecokonsult.se
            </span>
          </a>
        </motion.div>

        <SocialLinks className="mt-10 justify-center" />

        <div className="mt-12 text-center">
          <Link
            to="/form"
            state={{ subject: 'Boka konsultation' }}
            className="inline-block rounded-lg bg-gradient-gold px-8 py-4 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Skicka en förfrågan
          </Link>
        </div>
      </div>
    </section>
  );
}