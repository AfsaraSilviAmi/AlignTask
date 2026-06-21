"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  PenTool,
  FileText,
  Code2,
  Megaphone,
  MoreHorizontal,
  Video,
} from "lucide-react";

const categories = [
  { name: "Design", color: "#f59e0b", icon: PenTool },
  { name: "Writing", color: "#3b82f6", icon: FileText },
  { name: "Development", color: "#10b981", icon: Code2 },
  { name: "Marketing", color: "#ef4444", icon: Megaphone },
  { name: "Video Editing", color: "#f97316", icon: Video },
  { name: "Other", color: "#8b5cf6", icon: MoreHorizontal },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const PopularCategories = () => {
  const router = useRouter();

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-800">
          Popular Categories
        </h2>
        <p className="text-gray-500 mt-2">
          Explore tasks based on your skills and interests
        </p>
      </motion.div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-2 md:grid-cols-6 gap-6"
      >
        {categories.map((cat, i) => {
          const Icon = cat.icon;

          return (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                scale: 1.06,
                y: -6,
              }}
              onClick={() =>
                router.push(`/browse-tasks?category=${cat.name}`)
              }
              className="cursor-pointer bg-white shadow-md rounded-xl p-6 text-center border hover:shadow-xl transition"
            >
              {/* ICON */}
              <div
                className="flex items-center justify-center mb-3"
                style={{ color: cat.color }}
              >
                <Icon size={28} />
              </div>

              {/* NAME */}
              <h3 className="font-semibold text-gray-700">
                {cat.name}
              </h3>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default PopularCategories;