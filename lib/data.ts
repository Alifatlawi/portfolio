import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaSwift } from "react-icons/fa";
import atilimScheduleImg from "@/public/atilimScheduleImg.png"
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";
import atilimCom from "@/public/atilimcom.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Atilim University",
    location: "Ankara, TR",
    description: "Pursuing a degree in Software Engineering, I've engaged deeply with both theoretical and practical aspects of software development. My coursework has included advanced topics in algorithms, system design, and programming languages. I've also participated in various team projects and coding challenges, which have honed my collaborative and problem-solving skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - present",
  },
  {
    title: "Mobile App Developer Internship",
    location: "Ankara, TR",
    description: "During my one-month internship, I worked on a team developing mobile applications using Flutter. This role involved designing user interfaces, implementing features, and debugging applications. It was a valuable opportunity to apply my academic knowledge in a real-world setting, and I gained practical experience with Flutter and mobile app development processes.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "iOS App Developer (Part-time)",
    location: "Ankara, TR",
    description: "In my current part-time role as an iOS mobile application developer, I am responsible for developing and maintaining iPhone applications using Swift and SwiftUI. My duties include writing clean and efficient code, designing user-friendly interfaces, and working closely with other team members to deliver high-quality software solutions. This role has significantly enhanced my expertise in iOS development and agile methodologies.",
    icon: React.createElement(FaSwift),
    date: "2023 - present",
  },
] as const;


export const projectsData = [
  {
    title: "Atilim Schedule",
    description:
      "Atilim Schedule is an iOS application that I developed using Swift, SwiftUI, and Xcode. This app is designed to assist students at Atilim University",
    tags: ["Swift", "SwiftUI", "Xcode", "iOS Development"],
    imageUrl: atilimScheduleImg, 
    url: "https://apps.apple.com/tr/app/atilim-schedule/id6468368315"
  },
  {
    title: "Atilim Community",
    description: "Atilim Community is an iOS applicaiton that I developed, This app is designed to assist studesnts at Atilim Univsrsity so they can post and share their materials",
    tags: ["Swift", "SwiftUI", "FireBase", "Dependency Injection", "MVVM"],
    imageUrl: atilimCom,
    url: "https://apps.apple.com/tr/app/atilimcommunity/id6499083769"
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "C++",
  "Swift",
  "SwiftUI",
  "Git",
  "PostgreSQL",
  "Python",
  "Mobile Development"
] as const;
