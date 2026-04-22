import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaCode } from "react-icons/fa";
import atilimScheduleImg from "@/public/atilimScheduleImg.png"
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";
import atilimCom from "@/public/atilimcom.png"

export const links = [
  { name: "Home", hash: "#home" },
  { name: "Projects", hash: "#projects" },
  { name: "About", hash: "#about" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Atilim University",
    location: "Ankara, TR",
    description: "Pursuing a degree in Software Engineering, focusing on advanced algorithms, system design, and modern programming paradigms. Active participant in coding competitions and collaborative projects, developing strong problem-solving and teamwork skills in a fast-paced academic environment.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - present",
  },
  {
    title: "Mobile App Developer Internship",
    location: "Ankara, TR",
    description: "Intensive internship focused on Flutter mobile app development. Collaborated with senior developers to build cross-platform applications, implemented responsive UI designs, and optimized app performance. Gained hands-on experience with state management, API integration, and mobile development best practices.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Software Engineer",
    location: "Ankara, TR",
    description: "Full-stack software engineer developing scalable applications across iOS, web, and backend platforms. Architect and implement clean, maintainable code following SOLID principles. Lead technical discussions and mentor junior developers while delivering enterprise-level software solutions.",
    icon: React.createElement(FaCode),
    date: "2023 - present",
  },
] as const;


export const projectsData = [
  {
    title: "Atilim Schedule",
    description:
      "A comprehensive iOS scheduling application built with Swift and SwiftUI. Features include intelligent course planning, calendar integration, real-time notifications, and an intuitive user interface designed specifically for university students. Successfully published on the App Store with positive user reviews.",
    tags: ["Swift", "SwiftUI", "Xcode", "iOS Development", "Core Data", "UserNotifications"],
    imageUrl: atilimScheduleImg, 
    url: "https://apps.apple.com/tr/app/atilim-schedule/id6468368315",
    featured: true,
    category: "Mobile App",
    year: "2024",
    status: "Live on App Store"
  },
  {
    title: "Atilim Community",
    description: "A social platform connecting Atilim University students through real-time messaging, file sharing, and community forums. Built with modern iOS architecture patterns including MVVM, dependency injection, and Firebase backend integration for seamless user experience.",
    tags: ["Swift", "SwiftUI", "Firebase", "Dependency Injection", "MVVM", "Real-time Database"],
    imageUrl: atilimCom,
    url: "https://apps.apple.com/tr/app/atilimcommunity/id6499083769",
    featured: true,
    category: "Mobile App",
    year: "2024",
    status: "Live on App Store"
  },
] as const;
