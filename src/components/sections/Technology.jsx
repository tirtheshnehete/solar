import { motion } from "framer-motion";

const technologies = [
  {
    title: "Mono PERC Panels",
    desc: "High efficiency panels designed for superior performance and durability."
  },
  {
    title: "Bifacial Panels",
    desc: "Generate power from both sides by capturing reflected sunlight."
  },
  {
    title: "Advanced Inverters",
    desc: "Smart inverters with real-time monitoring and optimized power output."
  },
  {
    title: "Battery Storage",
    desc: "Reliable energy storage systems for uninterrupted power supply."
  }
];

function Technology() {
  return (
    <section id="technology" className="py-20 px-6 bg-lightGreen">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-primary">
          Advanced Solar Technology
        </h2>
        <p className="text-gray-700 mt-4">
          Innovative systems designed for maximum efficiency and long-term reliability.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden group"
          >
            {/* Animated Energy Pulse */}
            <motion.div
              className="absolute w-32 h-32 bg-accent rounded-full opacity-20 blur-2xl top-0 right-0"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {tech.title}
            </h3>

            <p className="text-gray-600">
              {tech.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Technology;