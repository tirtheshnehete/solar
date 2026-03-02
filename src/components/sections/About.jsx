import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-lightGreen py-28 px-6 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About LeanQuality Solutions
          </h2>

          <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
            LeanQuality Solutions (I) Pvt. Ltd. is dedicated to delivering
            sustainable, innovative, and high-performance solar energy systems.
            We combine engineering excellence with advanced technology to provide
            reliable and cost-efficient renewable energy solutions for businesses
            and households.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              Driving Energy Independence
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Our mission is to empower industries, commercial establishments,
              and residential communities with clean energy solutions that reduce
              electricity costs, minimize environmental impact, and ensure long-term
              operational sustainability.
            </p>

            <p className="text-gray-700 leading-relaxed">
              With a strong focus on quality assurance, technical expertise, and
              compliance with national renewable energy policies, we ensure that
              every project delivers measurable performance and long-term value.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-primary font-bold text-xl">10+ Years</h4>
                <p className="text-gray-600 text-sm">Industry Experience</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-primary font-bold text-xl">500+ Projects</h4>
                <p className="text-gray-600 text-sm">Successful Installations</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-primary font-bold text-xl">25MW+</h4>
                <p className="text-gray-600 text-sm">Solar Capacity Installed</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-primary font-bold text-xl">100%</h4>
                <p className="text-gray-600 text-sm">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-primary rounded-3xl p-12 shadow-2xl relative overflow-hidden">

              {/* Solar Glow Animation */}
              <motion.div
                className="absolute w-40 h-40 bg-yellow-300 rounded-full opacity-20 blur-3xl -top-10 -right-10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 5 }}
              />

              <div className="text-white space-y-6 relative z-10">
                <h3 className="text-3xl font-bold">
                  Sustainable. Reliable. Future-Ready.
                </h3>

                <p className="leading-relaxed text-gray-100">
                  We design and implement customized solar solutions tailored to
                  meet evolving energy demands while supporting India’s transition
                  toward renewable and carbon-neutral energy systems.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <span className="bg-white text-primary px-4 py-2 rounded-full text-sm font-medium">
                    Renewable Energy
                  </span>
                  <span className="bg-white text-primary px-4 py-2 rounded-full text-sm font-medium">
                    Cost Optimization
                  </span>
                  <span className="bg-white text-primary px-4 py-2 rounded-full text-sm font-medium">
                    Smart Technology
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;