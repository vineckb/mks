import React from "react";
import { SectionHeading } from "../components/SectionHeading";
import { SectionContent } from "../components/SectionContent";
import { SectionFooter } from "../components/SectionFooter";

export function RadioIndoorSection() {
  return (
    <section>
      <SectionHeading
        title="Rádio Personalizada"
        subtitle="Marketing Inteligente para Seu Negócio"
        text="Uma rádio personalizada é uma ferramenta poderosa de marketing e fidelização de clientes. Ao investir em uma, você evita transmitir anúncios concorrentes e pode controlar sua programação, criando um ambiente sonoro agradável e informativo."
      />

      <SectionContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-[16px] mb-2">
              Por que Investir em uma Rádio Personalizada
            </h4>
            <ul className="list-disc ml-5">
              <li>
                Evita a transmissão de intervalos comerciais de outras
                emissoras.
              </li>
              <li>Mantém o ambiente sonorizado sem repetição de músicas.</li>
              <li>
                Permite divulgar ofertas, promoções e informações relevantes.
              </li>
              <li>
                Oferece um canal exclusivo para comunicação com clientes e
                funcionários.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[16px] mb-2">Vantagens</h4>
            <ul className="list-disc ml-5">
              <li>
                Ambiente mais agradável e aumento do tempo de permanência dos
                clientes.
              </li>
              <li>
                Segundo pesquisa do POPAI, 85% das decisões de compra ocorrem no
                ponto de venda.
              </li>
            </ul>
          </div>
        </div>
      </SectionContent>
      <SectionFooter
        whatsAppMessage="Olá! Gostaria de mais informações sobre o Sistema de Rádio Indoor"
        text="Entre em contato conosco para uma demonstração e descubra como a rádio
          personalizada pode revolucionar seu negócio."
      />
    </section>
  );
}
