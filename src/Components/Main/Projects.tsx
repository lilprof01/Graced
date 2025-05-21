import { motion } from "framer-motion";
import sectionFade from "@/Constants/Fade";

const Projects = () => {
  const projects = [
    {
      title: "Software Projects Tools",
      description:
        "a scalable, secure, and user-friendly mobile software product that enhances customer engagement, supports digital services..",

      link: "https://docs.google.com/spreadsheets/d/1bJZAP_hXS6tHRvTzQbGjinhKE20HXghV/edit",
    },
    {
      title: "Next-Gen Mobile Software",
      description:
        "a scalable, secure, and user-friendly mobile software product that enhances customer engagement, supports digital services...",
      link: "https://docs.google.com/document/d/1ZG8QcbLsWnSHD4l0AbEZF0pagWNMFqFcTSxLKzLthpc/edit?tab=t.0",
    },
    {
      title: "Project Team Structure",
      description:
        "A comprehensive project team structure with expanded roles and responsibilities to help manage teams effeciently",
      link: "https://docs.google.com/document/d/1jSMw_GkI1ILQpewBohDp3pIEYbvN2C1Juf3LBYmHEQM/edit?tab=t.0#heading=h.fsq8o6ssel7a",
    },
  ];
  return (
    <motion.section
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="projects"
      className="py-20 px-6"
    >
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="relative h-56 rounded-xl flex flex-col justify-between overflow-hidden transition-transform duration-300 group shadow-sm dark:shadow-blue-600"
            style={{ cursor: "default" }}
          >
            <span className="absolute inset-0 rounded-xl bg-black opacity-0 group-hover:opacity-70 dark:group-hover:opacity-100 dark:group-hover:bg-blue-600 transition-opacity duration-300 ease-in-out" />
            <div className="relative p-6 space-y-3 text-gray-900 dark:text-white group-hover:text-white transition-colors">
              <h3 className="text-xl font-semibold transition-colors">
                {project.title}
              </h3>
              <p className="text-sm line-clamp-3 mb-6">{project.description}</p>
              <a
                target="_blank"
                href={project.link}
                className="bg-black dark:bg-blue-600 rounded-xl text-white group-hover:bg-white group-hover:text-black transition-colors px-4 py-2 cursor-pointer hover:scale-105"
              >
                View
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="h-[20vh] flex justify-center items-center">
        <div className="sm:w-1/3 p-5 flex justify-center items-center">
          <a
            href="https://princessebele.my.canva.site/black-aesthethic-education-online-portfolio"
            target="_blank"
            className="px-6 py-2 bg-primary rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          >
            See More
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
