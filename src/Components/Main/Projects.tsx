import { motion } from "framer-motion";
import sectionFade from "@/Constants/Fade";

const Projects = () => {
  return (
    <motion.section id="projects" className="py-20 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="relative h-56 rounded-xl flex flex-col justify-between overflow-hidden transition-transform duration-300 group shadow-sm dark:shadow-blue-600"
            style={{ cursor: "default" }}
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="absolute inset-0 rounded-xl bg-black opacity-0 group-hover:opacity-70 dark:group-hover:opacity-100 dark:group-hover:bg-blue-600 transition-opacity duration-300 ease-in-out" />
            <div className="relative p-6 space-y-3 text-gray-900 dark:text-white group-hover:text-white transition-colors">
              <h3 className="text-xl font-semibold transition-colors">
                Project Title {i + 1}
              </h3>
              <p className="text-sm line-clamp-3">
                Brief project overview that highlights goals, results and key
                metrics. Use this space to tease impact without going too deep.
              </p>
              <button
                className="bg-black dark:bg-blue-600 rounded-xl text-white group-hover:bg-white group-hover:text-black transition-colors px-4 py-2 cursor-pointer"
                rel="noreferrer"
                onClick={(e: any) => e.preventDefault()}
              >
                View
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
