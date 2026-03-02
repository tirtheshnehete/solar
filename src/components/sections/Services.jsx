import { motion } from "framer-motion";

const services = [
  { title: "Rooftop Solar", icon: "🏠" },
  { title: "Industrial Solar", icon: "🏭" },
  { title: "EPC Projects", icon: "⚡" },
  { title: "Battery Storage", icon: "🔋" },
];

function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-primary">
          Our Solar Services
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-lightGreen p-8 rounded-2xl shadow-md text-center hover:shadow-2xl transition relative overflow-hidden"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {service.title}
            </h3>

            {/* Energy Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 hover:opacity-100 transition duration-500"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;