import { motion } from "framer-motion";

const industries = [
  "Residential",
  "Commercial",
  "Agriculture",
  "Manufacturing",
  "Hospitals",
  "Educational Institutions"
];

function Industries() {
  return (
    <section className="py-20 px-6 bg-lightGreen">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-primary">
          Industries We Serve
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {industries.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md text-center font-medium text-gray-700 hover:bg-primary hover:text-white transition"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Industries;