import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="h-screen bg-gradient-to-r from-emerald-700 to-emerald-500 text-white flex items-center justify-center relative overflow-hidden">

      {/* Animated Sun */}
      <motion.div
        className="absolute w-40 h-40 bg-yellow-300 rounded-full blur-3xl opacity-70 top-20 right-20"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />

      <div className="text-center max-w-3xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Solar Energy for a Brighter Future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg mb-8"
        >
          Clean. Sustainable. Cost-Effective Energy Solutions.
        </motion.p>

        <div className="space-x-4">
          <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Quote
          </button>

          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-primary transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;