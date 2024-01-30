import React from "react";
import { WhatsAppButton } from "./WhatsAppButton";

export interface SectionFooterProps {
  text: string;
  whatsAppMessage: string;
}

export function SectionFooter({ text, whatsAppMessage }: SectionFooterProps) {
  return (
    <div className="container max-w-4xl mx-auto mb-10 md:mb-0 p-6 bg-dark-blue text-white flex items-center gap-5 justify-between">
      <h4 className="text-center flex-1 text-lg">{text}</h4>
      <WhatsAppButton message={whatsAppMessage} />
    </div>
  );
}
