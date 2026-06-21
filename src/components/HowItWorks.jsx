"use client";

import { motion } from "framer-motion";

const steps = {
  client: [
    {
      title: "Post a Task",
      desc: "Describe your project, set budget and deadline in minutes.",
    },
    {
      title: "Get Proposals",
      desc: "Freelancers send offers based on your requirements.",
    },
    {
      title: "Hire & Pay",
      desc: "Choose the best freelancer and pay securely via Stripe.",
    },
  ],
  freelancer: [
    {
      title: "Find Tasks",
      desc: "Browse available tasks that match your skills.",
    },
    {
      title: "Submit Proposal",
      desc: "Send your offer with budget, timeline and message.",
    },
    {
      title: "Get Paid",
      desc: "Complete work and receive secure payments instantly.",
    },
  ],
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-800">
          How It Works
        </h2>
        <p className="text-gray-500 mt-2">
          Simple workflow for both clients and freelancers
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">

        {/* CLIENT SIDE */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">
            For Clients
          </h3>

          <div className="space-y-6">
            {steps.client.map((step, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                className="bg-white shadow-md rounded-xl p-6 border hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#678d58] text-white font-bold">
                    {i + 1}
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg">
                      {step.title}
                    </h4>
                    <p className="text-gray-500 text-sm mt-1">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FREELANCER SIDE */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">
            For Freelancers
          </h3>

          <div className="space-y-6">
            {steps.freelancer.map((step, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                className="bg-white shadow-md rounded-xl p-6 border hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#678d58] text-white font-bold">
                    {i + 1}
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg">
                      {step.title}
                    </h4>
                    <p className="text-gray-500 text-sm mt-1">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;