import { motion } from "framer-motion";
import sectionFade from "@/Constants/Fade";

const Stack = () => {
  return (
    <motion.section
        className="bg-blue-600 text-white py-12"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">Stack</h2>
          <p className="text-xl">
            Jira • Trello • Asana • Monday.com • Notion • Slack • MS Project
          </p>
        </div>
      </motion.section>
  )
}

export default Stack
