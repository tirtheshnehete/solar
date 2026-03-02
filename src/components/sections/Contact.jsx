import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    file: null,
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
    <section
      id="contact"
      className="py-12 md:py-20 px-4 md:px-6 bg-lightGreen"
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-primary text-center mb-8 md:mb-12">
          Get a Free Solar Consultation
        </h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-5 sm:p-6 md:p-10 rounded-xl md:rounded-2xl shadow-lg space-y-5 md:space-y-6"
        >
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="border border-gray-300 p-2.5 md:p-3 text-sm md:text-base rounded-md md:rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary transition"
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="border border-gray-300 p-2.5 md:p-3 text-sm md:text-base rounded-md md:rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary transition"
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="border border-gray-300 p-2.5 md:p-3 text-sm md:text-base rounded-md md:rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary transition"
            onChange={handleChange}
            required
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="border border-gray-300 p-2.5 md:p-3 text-sm md:text-base rounded-md md:rounded-lg w-full resize-none focus:outline-none focus:ring-2 focus:ring-primary transition"
            onChange={handleChange}
          />

          {/* File Upload */}
          <div>
            <label className="block mb-1 md:mb-2 text-sm md:text-base font-medium text-gray-700">
              Upload Electricity Bill
            </label>
            <input
              type="file"
              name="file"
              className="w-full text-sm md:text-base"
              onChange={handleChange}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-primary text-white text-sm md:text-base px-6 md:px-8 py-2.5 md:py-3 rounded-md md:rounded-lg font-semibold hover:bg-primaryDark transition w-full md:w-auto"
          >
            Submit Request
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;