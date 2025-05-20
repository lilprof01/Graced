import { ThemeToggle } from "@/Components/UI";
import { motion, AnimatePresence } from "framer-motion";
import { Twitter, Linkedin, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const primary = "#1e88ff";


export default function LandingPage() {
  const sectionFade = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 1 },
    }),
  };

  const navItems = [
    ["About", "about"],
    ["Experience", "experience"],
    ["Projects", "projects"],
    ["Reviews", "reviews"],
    ["Contact", "contact"],
  ];

  const reviews = [
    "Jane kept our distributed team perfectly aligned and motivated — product launched early! – CTO, Acme Corp",
    "Her risk-mitigation mindset saved us thousands during a critical pivot. – COO, BrightTech",
    "Communication was seamless; stakeholders always knew status and next steps. – Founder, DevSolutions",
  ];

  const [index, setIndex] = useState(0);
  const paginate = (dir: number) =>
    setIndex((i) => (i + dir + reviews.length) % reviews.length);

  return (
    <div className="font-sans text-gray-900 dark:text-white bg-white dark:bg-black scroll-smooth">
      <ThemeToggle />
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-sm dark:shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-5">
          <button
            onClick={() =>
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-2xl font-bold"
          >
            PE<span style={{ color: primary }}>.</span>
          </button>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() =>
                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-gray-700"
              >
                {label}
              </button>
            ))}
          </nav>
          <nav className="md:hidden flex gap-4 text-sm font-medium">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() =>
                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-gray-700 md:text-4xl"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="grid lg:grid-cols-2 items-center min-h-[80vh] sm:min-h-screen gap-8 pt-24 px-6 md:px-12"
      >
        <motion.div
          className="h-72 md:h-96 bg-[url(/hero2.jpg)] rounded-2xl overflow-clip bg-cover bg-center"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* <img src="/hero1.jpg" className="w-full h-full" /> */}
        </motion.div>
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Turning <span style={{ color: primary }}>chaos</span> into
            coordinated success.
          </h1>
          <p className="text-lg mb-8 max-w-prose">
            I’m Precious Ebele, a results-driven project manager who aligns teams,
            timelines and budgets to deliver products that wow.
          </p>
          <button className="">
            <a href="#projects">See My Works</a>
          </button>
        </motion.div>
      </section>

      {/* About */}
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
          <p className="text-lg leading-relaxed max-w-prose">
            With 6+ years orchestrating cross-functional teams across tech and
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

      {/* Experience */}
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

      {/* Projects */}
      <motion.section
        id="projects"
        className="py-20 px-6"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="relative h-56 rounded-xl flex flex-col justify-between overflow-hidden transition-transform duration-300 group shadow-sm dark:shadow-blue-600"
              style={{ cursor: "default" }}
            >
              <span className="absolute inset-0 rounded-xl bg-black opacity-0 group-hover:opacity-70 dark:group-hover:opacity-100 dark:group-hover:bg-blue-600 transition-opacity duration-300" />
              <div className="relative p-6 space-y-3 text-gray-900 dark:text-white group-hover:text-white transition-colors">
                <h3 className="text-xl font-semibold transition-colors">
                  Project Title {i + 1}
                </h3>
                <p className="text-sm line-clamp-3">
                  Brief project overview that highlights goals, results and key
                  metrics. Use this space to tease impact without going too
                  deep.
                </p>
                <button
                  className="bg-black dark:bg-blue-600 rounded-xl text-white group-hover:bg-white group-hover:text-black transition-colors px-4 py-2"
                  rel="noreferrer"
                  onClick={(e: any) => e.preventDefault()}
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Tech Stack */}
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

      {/* Reviews carousel */}
      <motion.section
        id="reviews"
        className="bg-gray-50 dark:bg-black border-b py-20 px-6"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-10 text-center">Reviews</h2>
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <button onClick={() => paginate(-1)} className="text-2xl cursor-pointer">
            <ChevronLeft />
          </button>
          <div className="w-full px-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="text-center text-base"
              >
                {reviews[index]}
              </motion.p>
            </AnimatePresence>
          </div>
          <button onClick={() => paginate(1)} className="text-2xl cursor-pointer">
            <ChevronRight />
          </button>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        className="py-20 px-6 max-w-3xl mx-auto"
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
              className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </label>
          <div className="flex justify-end">
            <button type="submit" className="w-auto">
              Send
            </button>
          </div>
        </form>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 px-6 text-center border-t">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm">
              © {new Date().getFullYear()} Precious Ebele. All rights reserved.
            </p>
            <div className="flex gap-6 justify-center md:justify-start">
              <a
                href="mailto:hello@example.com"
                aria-label="Email"
                className="hover:opacity-80"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:opacity-80"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:opacity-80"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <p className="text-xs border-t border-white/20 pt-4">
            developed with ❤️ by Smart
          </p>
        </div>
      </footer>
    </div>
  );
}
