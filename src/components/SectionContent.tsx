import React, { PropsWithChildren } from "react";

export function SectionContent({ children }: PropsWithChildren) {
  return (
    <div className="container bg-white max-w-4xl mx-auto p-6 pb-10">
      {children}
    </div>
  );
}
