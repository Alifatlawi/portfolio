import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { motion } from "framer-motion";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <motion.button
      type="submit"
      className="group relative overflow-hidden flex items-center justify-center gap-3 h-16 w-40 mx-auto btn-primary text-lg font-semibold shadow-glow hover:shadow-glow-lg disabled:opacity-60 disabled:cursor-not-allowed"
      disabled={pending}
      whileHover={{ scale: pending ? 1 : 1.05 }}
      whileTap={{ scale: pending ? 1 : 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
        }}
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative z-10 flex items-center gap-3">
        {pending ? (
          <>
            <motion.div
              className="flex gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
              />
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
              />
            </motion.div>
            <span>Sending</span>
          </>
        ) : (
          <>
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Submit
            </motion.span>
            <motion.div
              initial={{ x: 0, rotate: 0 }}
              whileHover={{ x: 10, rotate: -45 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaPaperPlane className="text-lg opacity-90" />
            </motion.div>
          </>
        )}
      </div>

      {/* Ripple Effect on Click */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-full scale-0"
        whileTap={{ scale: 2 }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  );
}
