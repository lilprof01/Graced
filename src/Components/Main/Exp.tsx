import { motion } from "framer-motion";
import sectionFade from "../../Constants/Fade";

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="bg-blue-600 text-white py-20 px-6"
      variants={sectionFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <ul className="space-y-3 list-disc list-inside text-base">
            <li>
              <strong>Operations Manager</strong> - Sharperly limited
              (2023-present)
            </li>
            <li>
              <strong>Project Management trainer</strong> - Rehmapath (ongoing)
            </li>
            <li>
              <strong>Volunteer</strong> - Wakocoding for Project management
              2024
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <ul className="space-y-3 list-disc list-inside text-base">
            <li>
              Project Management Professional (PMP) - from PMI (2025-2028)
            </li>
            <li>
              Dataville Research Project management Program Completed Aug
              2024(PMP)
            </li>
            <li>
              Master of Agile Project Management certification - from
              Simplelearn (Jan 2023)
            </li>
            <li>
              Agile Scrum Project management certification - from Simplelearn
              (AgPMP) (Dec 2022)
            </li>
            <li>
              PBasic foundations in Project management - from IBM June-August
              2023(PMP)
            </li>
            <li>Introduction to Project Management - from Simplelearn (PMP)</li>
            <li>
              Project Management short course from Elearning
              College September 2022
            </li>
            <li>
              Foundations of Project Management Certification - from Coursera
              (PMP)
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
