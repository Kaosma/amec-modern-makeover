import { motion } from "framer-motion";

export default function RecoWidget() {
  return (
    <section className="py-12 md:py-16 px-4 bg-card" aria-labelledby="reco-heading">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full"
      >
        <div className="text-center mb-7">
          <p className="text-primary tracking-widest uppercase text-sm mb-2">Omdömen</p>
          <h2 id="reco-heading" className="text-2xl md:text-4xl font-display">
            Vad våra kunder säger om oss
          </h2>
        </div>
        <iframe
          src="https://widget.reco.se/v2/venues/6020759/horizontal/xlarge?inverted=false&border=true&lang=sv"
          title="AMECO Konsult AB - Omdömen på Reco"
          height="225"
          className="w-full border-0 block overflow-hidden"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
}