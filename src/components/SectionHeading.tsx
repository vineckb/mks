import React from "react";

export interface SectionHeadingProps {
  title: string;
  subtitle: string;
  text: string;
  imageUrl?: string;
}

export function SectionHeading({ title, subtitle, text }: SectionHeadingProps) {
  return (
    <div className="bg-light-blue text-dark-blue">
      <div className="container max-w-4xl mx-auto p-5">
        <h2 className="text-[24px]">{title}</h2>
        <h3 className="text-medium-blue text-[16px] mb-5">{subtitle}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
