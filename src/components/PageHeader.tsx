import React from "react";
import { Logo } from "./Logo";
import { WhatsAppButton } from "./WhatsAppButton";

export function PageHeader() {
  return (
    <div className="bg-dark-blue fixed w-full z-10 top-0">
      <div
        className="
      container mx-auto max-w-6xl
      p-5 px-10
      flex
      justify-between flex-wrap gap-6 items-center"
      >
        <Logo />
        <WhatsAppButton />
      </div>
    </div>
  );
}
