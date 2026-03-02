import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    file: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-lightGreen">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          Get a Free Solar Consultation
        </h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-2xl shadow-xl space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="border p-3 rounded-lg focus:outline-primary"
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="border p-3 rounded-lg focus:outline-primary"
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="border p-3 rounded-lg w-full focus:outline-primary"
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="border p-3 rounded-lg w-full focus:outline-primary"
            onChange={handleChange}
          />

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Upload Electricity Bill
            </label>
            <input
              type="file"
              name="file"
              className="w-full"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primaryDark transition"
          >
            Submit Request
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;