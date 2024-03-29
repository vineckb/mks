import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton({ message = "" }) {
  function handleClick() {
    console.log("click whatsapp button");
    // @ts-ignore
    gtag("event", "conversion", {
      send_to: "AW-983249833/dMw1CP25_Y4ZEKnn7NQD",
    });
  }
  const text = encodeURI(message);
  return (
    <a
      onClick={handleClick}
      href={`https://api.whatsapp.com/send?1=pt_BR&phone=5541996317707&text=${text}`}
      target="_blank"
      className="text-white bg-whatsapp rounded-full flex items-center justify-center p-3"
    >
      <span className="text-xl mx-3 whitespace-nowrap hidden md:block">
        (41) 99631-7707
      </span>
      <FaWhatsapp size={30} />
    </a>
  );
}
