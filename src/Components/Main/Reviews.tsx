import { motion, AnimatePresence } from "framer-motion";
import sectionFade from "@/Constants/Fade";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const paginate = (dir: number) =>
    setIndex((i: number) => (i + dir + reviews.length) % reviews.length);

  const reviews = [
    "Precious kept our distributed team perfectly aligned and motivated — product launched early! – CTO, Acme Corp",
    "Her risk-mitigation mindset saved us thousands during a critical pivot. – COO, BrightTech",
    "Communication was seamless; stakeholders always knew status and next steps. – Founder, DevSolutions",
  ];
  return (
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
        <button
          onClick={() => paginate(-1)}
          className="text-2xl cursor-pointer"
        >
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
  );
};

export default Reviews;
