import { motion } from "framer-motion";
import sectionFade from "@/Constants/Fade";

const Contact = () => {
  return (
    <motion.section
        id="contact"
        className="py-20 px-6 max-w-2xl mx-auto"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-10 text-center">Contact Me</h2>
        <form
          action="https://api.brevo.com/your-endpoint"
          method="POST"
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            // handle form submit here (Brevo integration)
            alert("Form submitted!");
          }}
        >
          <label className="block">
            <span className="block mb-1 font-semibold">Name</span>
            <input
              type="text"
              name="name"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </label>
          <label className="block">
            <span className="block mb-1 font-semibold">Email</span>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </label>
          <label className="block">
            <span className="block mb-1 font-semibold">Message</span>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </label>
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-auto bg-black dark:bg-white text-white dark:text-black px-6 py-1 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            >
              Send
            </button>
          </div>
        </form>
      </motion.section>
  )
}

export default Contact
