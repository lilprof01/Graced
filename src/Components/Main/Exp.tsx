import {motion} from 'framer-motion';
import sectionFade from '../../Constants/Fade';

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
                <strong>Senior Project Manager</strong> – Acme Corp
                (2022-Present)
              </li>
              <li>
                <strong>Project Lead</strong> – BrightTech (2020-2022)
              </li>
              <li>
                <strong>Scrum Master</strong> – DevSolutions (2018-2020)
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <ul className="space-y-3 list-disc list-inside text-base">
              <li>MBA, Project Management – University of Lagos (2018)</li>
              <li>BSc, Computer Science – Covenant University (2014)</li>
            </ul>
          </div>
        </div>
      </motion.section>
  )
}

export default Experience
