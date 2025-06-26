import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-semibold capitalize mb-12 text-center sm:text-4xl text-gray-900 dark:text-white">
      {children}
    </h2>
  );
}
