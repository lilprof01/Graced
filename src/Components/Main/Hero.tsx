import { motion } from "framer-motion"
import sectionFade from '../../Constants/Fade';

const Hero = () => {
  return (
    <section
        id="hero"
        className="grid lg:grid-cols-2 items-center min-h-[80vh] sm:min-h-screen gap-8 pt-24 px-6 md:px-12"
      >
        <motion.div
          className="h-72 md:h-96 bg-[url(/hero2.jpg)] rounded-2xl overflow-clip bg-cover bg-center order-2 lg:order-1"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Turning <span className="text-primary">Clutter</span> into
            coordinated success.
          </h1>
          <p className="text-lg mb-8 max-w-prose">
            I help teams and individuals move from scattered to streamlined,
            with guidance that makes every task count.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
          >
            <a>See My Works</a>
          </button>
        </motion.div>
      </section>
  )
}

export default Hero
