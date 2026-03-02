import { motion } from "framer-motion";

const steps = [
  "Site Inspection",
  "System Design",
  "Installation",
  "Testing & Commissioning",
  "Maintenance & Support"
];

function Process() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          Installation Process
        </h2>

        <div className="relative border-l-4 border-primary pl-10 space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-5 top-2 w-4 h-4 bg-primary rounded-full"></div>
              <h3 className="text-xl font-semibold text-gray-800">
                {step}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;