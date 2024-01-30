import React from "react";
import { SectionHeading } from "../components/SectionHeading";
import { SectionContent } from "../components/SectionContent";
import { SectionFooter } from "../components/SectionFooter";
import { Gallery } from "../components/Gallery";
import { ClientsList } from "../components/ClientsList";

const data = [
  {
    thumbnail: "/thumbnails/siena.jpg",
    src: "/images/siena.jpg",
    width: 800,
    height: 600,
    caption: "Siena",
  },
  {
    thumbnail: "/thumbnails/fiorino.jpg",
    src: "/images/fiorino.jpg",
    width: 800,
    height: 600,
    caption: "Fiorino",
  },
  {
    thumbnail: "/thumbnails/zafira.jpg",
    src: "/images/zafira.jpg",
    width: 800,
    height: 600,
    caption: "Zafira",
  },
  {
    thumbnail: "/thumbnails/parati.jpg",
    src: "/images/parati.jpg",
    width: 800,
    height: 600,
    caption: "Parati",
  },

  {
    poster: "/poster/carrefour.jpg",
    thumbnail: "/thumbnails/carrefour.jpg",
    width: 1280,
    height: 720,
    sources: [{ src: "/videos/carrefour.mp4", type: "video/mp4" }],
    type: "video",
  },
  {
    poster: "/poster/claro.jpg",
    thumbnail: "/thumbnails/claro.jpg",
    width: 1280,
    height: 720,
    sources: [{ src: "/videos/claro.mp4", type: "video/mp4" }],
    type: "video",
  },
  {
    poster: "/poster/prefeitura-campo-magro.jpg",
    thumbnail: "/thumbnails/prefeitura-campo-magro.jpg",
    width: 1280,
    height: 720,
    sources: [{ src: "/videos/prefeitura-campo-magro.mp4", type: "video/mp4" }],
    type: "video",
  },
  {
    poster: "/poster/unicesumar.jpg",
    thumbnail: "/thumbnails/unicesumar.jpg",
    width: 1280,
    height: 720,
    sources: [{ src: "/videos/unicesumar.mp4", type: "video/mp4" }],
    type: "video",
  },
];

export function SoundCarSection() {
  return (
    <section>
      <SectionHeading
        title="Carro de Som"
        subtitle="Divulgação Eficiente e Impactante"
        text="O carro de som é uma poderosa ferramenta de divulgação, sendo uma opção acessível e eficaz quando algumas regras são seguidas. O texto deve ser breve (máximo de 1 minuto), objetivo, claro e pausado, destacando marca, produto, evento, promoção e informações relevantes. A veiculação é crucial, com atenção à velocidade, projeção e qualidade do som."
      />

      <SectionContent>
        <Gallery items={data} />
      </SectionContent>

      <SectionContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-[16px] mb-2">
              Princípios essenciais para eficácia do carro de som
            </h4>
            <ul className="list-disc ml-5">
              <li>
                <strong>Velocidade Controlada:</strong> A velocidade deve ser
                reduzida para garantir que a mensagem seja absorvida. Textos
                mais curtos, de 40 a 50 segundos, permitem velocidade ideal.
              </li>
              <li>
                <strong>Projeção do Som:</strong> O som deve ser projetado para
                frente e para trás do veículo, assegurando que seja ouvido antes
                e depois de sua passagem.
              </li>
              <li>
                <strong>Qualidade e Potência:</strong> A qualidade e potência do
                som são fundamentais para evitar irritações e garantir que a
                mensagem seja clara e inteligível.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[16px] mb-2">
              Principais Vantagens do Carro de Som:
            </h4>
            <ul className="list-disc ml-5">
              <li>
                <strong>Inevitável para o Ouvinte:</strong> Uma forma de
                propaganda que não pode ser ignorada pelo público.
              </li>
              <li>
                <strong>Atração Imediata:</strong> Ideal para atrair clientes
                próximos, incentivando a compra imediata.
              </li>
              <li>
                <strong>Alcance Direto:</strong> Atinge diretamente a região
                desejada, sem desperdício de verba em propaganda ampla.
              </li>
            </ul>
          </div>
        </div>
      </SectionContent>
      <SectionContent>
        <ClientsList />
      </SectionContent>
      <SectionFooter
        whatsAppMessage="Olá! Gostaria de um orçamento para Propaganda com Carro de Som"
        text="Solicite Agora um Orçamento Personalizado para Carro de Som"
      />
    </section>
  );
}
