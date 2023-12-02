"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently studying at <span className="font-medium">Atilim University</span> in Ankara, Turkey, where I'm deepening my knowledge and passion for programming. Throughout my academic journey, I have undertaken several projects that have honed my skills, particularly in <span className="font-medium">Swift</span>. One of my notable achievements includes developing an <span className="italic">iOS application</span> for the university, which has been a significant milestone in my learning path.
      </p>

      <p>
        My interest in technology extends beyond academics. I enjoy exploring new programming languages and tools, and I am always eager to apply my learning to real-world challenges. When I'm not immersed in coding, I like to engage in various activities that help me maintain a balanced lifestyle, such as <span className="font-medium">playing video games</span>, enjoying movies, and spending time outdoors.
      </p>
    </motion.section>
  );
}
