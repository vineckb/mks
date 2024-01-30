import React from "react";
const clients = ["carrefour", "crefisa", "dpaschoal", "banco-bv", "sky"];

export function ClientsList() {
  return (
    <>
      <h3 className="text-center mb-5 text-lg font-semibold">
        Alguns dos nossos clientes
      </h3>
      <div className="grid grid-cols-5 gap-5 px-5">
        {clients.map((name, index) => (
          <img key={index} src={`/clients/${name}.jpg`} alt={name} />
        ))}
      </div>
    </>
  );
}
