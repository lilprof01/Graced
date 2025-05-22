import { motion, AnimatePresence } from "framer-motion";
import sectionFade from "@/Constants/Fade";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const paginate = (dir: number) =>
    setIndex((i: number) => (i + dir + reviews.length) % reviews.length);

  const reviews = [
    "Princess's lectures are always loaded with concise and digestible information, she is no doubt a master at what she does – Mr. Abiola Abatan",
    "I've had the chance to be in a conversation with Princess, and she is brilliant, she made me understand the true and in-depth meaning of what waterfall is in difference to agile methodology – Diosa Zah",
    // "Communication was seamless; stakeholders always knew status and next steps. – Founder, DevSolutions",
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
