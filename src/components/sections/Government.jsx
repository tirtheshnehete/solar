import { motion } from "framer-motion";

function Government() {
  return (
    <section
      className="py-24 px-6 bg-gradient-to-r from-primary to-primaryDark text-white scroll-mt-24 relative overflow-hidden"
    >
      {/* Background Solar Glow Animation */}
      <motion.div
        className="absolute w-72 h-72 bg-yellow-300 opacity-10 rounded-full blur-3xl -top-20 -right-20"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Government Supported Solar Initiatives
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-100 leading-relaxed">
            The Government of India actively promotes renewable energy adoption
            through structured missions, financial incentives, and policy-driven
            programs aimed at accelerating sustainable development nationwide.
          </p>
        </motion.div>

        {/* Schemes Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">

          {[
            {
              title: "National Solar Mission",
              desc: "A flagship initiative to increase solar capacity and reduce dependence on fossil fuels through large-scale solar parks and grid integration."
            },
            {
              title: "PM Surya Ghar Yojana",
              desc: "Supports residential rooftop installations by providing subsidies and enabling households to generate their own clean electricity."
            },
            {
              title: "KUSUM Scheme",
              desc: "Empowers farmers with solar-powered irrigation systems and decentralized renewable energy generation."
            }
          ].map((scheme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-4">
                {scheme.title}
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                {scheme.desc}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Implementation Process */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-10"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            How We Align With Government Programs
          </h3>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            {[
              "Eligibility Assessment",
              "Documentation & Subsidy Application",
              "Certified Installation",
              "Compliance & Grid Approval"
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="w-12 h-12 bg-accent text-primary font-bold rounded-full flex items-center justify-center mx-auto">
                  {index + 1}
                </div>
                <p className="text-gray-100 text-sm">
                  {step}
                </p>
              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Government;