"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import AnimatedBackground from "./animated-background";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,42rem)] text-center relative"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      {/* Enhanced Animated Background */}
      <AnimatedBackground variant="cosmic" intensity="medium" />

      <div className="relative z-10">
        <SectionHeading>Let's Connect</SectionHeading>

        <motion.p
          className="text-gray-700 dark:text-white/80 text-lg mb-12 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Ready to collaborate on something amazing? I'd love to hear about your project and discuss how we can bring your ideas to life.
        </motion.p>

        {/* Contact Info Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Email Card */}
          <motion.a
            href="mailto:ali.a.mardan@gmail.com"
            className="group p-6 rounded-2xl backdrop-blur-xl border border-white/10 shadow-lg bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex flex-col items-center space-y-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-purple-600 group-hover:to-blue-500 transition-all duration-300">
                <HiMail className="text-white text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm break-all">ali.a.mardan@gmail.com</p>
              </div>
            </motion.div>
          </motion.a>

          {/* Phone Card */}
          <motion.a
            href="tel:+905342038326"
            className="group p-6 rounded-2xl backdrop-blur-xl border border-white/10 shadow-lg bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex flex-col items-center space-y-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 group-hover:from-emerald-600 group-hover:to-green-500 transition-all duration-300">
                <HiPhone className="text-white text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">+90 534 203 8326</p>
              </div>
            </motion.div>
          </motion.a>

          {/* Location Card */}
          <motion.div
            className="group p-6 rounded-2xl backdrop-blur-xl border border-white/10 shadow-lg bg-white/10 dark:bg-white/5"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex flex-col items-center space-y-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 group-hover:from-red-500 group-hover:to-orange-500 transition-all duration-300">
                <HiLocationMarker className="text-white text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Ankara, Turkey</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.form
            className="space-y-6"
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);

              if (error) {
                toast.error(error);
                return;
              }

              toast.success("Email sent successfully!");
            }}
          >
            {/* Modern Form Container */}
            <motion.div
              className="relative overflow-hidden rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl bg-white/10 dark:bg-white/5 p-8"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 50%, rgba(236, 72, 153, 0.2) 100%)",
                  backgroundSize: "400% 400%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="relative z-10 space-y-6">
                {/* Form Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Send me a message</h3>
                  <p className="text-gray-600 dark:text-gray-400">Let's discuss your next project</p>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    className="w-full h-14 px-6 rounded-xl border border-gray-200/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transition-all duration-300 focus:bg-white dark:focus:bg-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Your email address"
                  />
                  <motion.div
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    whileHover={{ scale: 1.1, color: "#3b82f6" }}
                  >
                    <FaEnvelope />
                  </motion.div>
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <textarea
                    className="w-full h-40 p-6 rounded-xl border border-gray-200/50 dark:border-gray-600/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transition-all duration-300 focus:bg-white dark:focus:bg-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    required
                    maxLength={5000}
                  />
                  <motion.div
                    className="absolute right-4 top-6 text-gray-400"
                    whileHover={{ scale: 1.1, color: "#3b82f6" }}
                  >
                    <FaPaperPlane />
                  </motion.div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <SubmitBtn />
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 blur-xl opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div
                className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-pink-400/20 to-orange-500/20 blur-xl opacity-50"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>
          </motion.form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="mt-12 flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-700 dark:text-gray-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="text-xl" />
          </motion.a>

          <motion.a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-gray-800 hover:text-white transition-all duration-300 text-gray-700 dark:text-gray-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-xl" />
          </motion.a>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Looking forward to hearing from you! 🚀
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}