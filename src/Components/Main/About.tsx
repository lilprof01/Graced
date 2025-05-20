import { motion } from "framer-motion"
import sectionFade from '../../Constants/Fade';

const About = () => {
  return (
    <motion.section
        id="about"
        className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto py-20 px-6"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed max-w-prose mb-2">
            I’m Precious Ebele, a results-driven project manager who aligns
            teams, timelines and budgets to deliver products that wow.
          </p>
          <p className="text-lg leading-relaxed max-w-prose">
            With 3+ years orchestrating cross-functional teams across tech and
            creative industries, I bridge strategy with execution—keeping
            stakeholders confident and deliverables on target. Adept at Agile
            frameworks, risk mitigation and fostering transparent communication,
            I empower teams to consistently exceed expectations.
          </p>
        </div>
        <motion.div
          className="w-56 h-56 md:w-72 md:h-72 bg-[url(/me.png)] bg-cover bg-center rounded-full mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      </motion.section>
  )
}

export default About
