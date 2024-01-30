import React from "react";
import { SectionHeading } from "../components/SectionHeading";
import { SectionContent } from "../components/SectionContent";
import { SectionFooter } from "../components/SectionFooter";
import ReactAudioPlayer from "react-audio-player";

const songs = [
  { name: "antena-campo-largo.mp3", title: "Siga Antenado" },
  { name: "auto-pecas-campo-largo.mp3", title: "Auto Zone" },
  { name: "crefisa-campinas.mp3", title: "Crefisa" },
  { name: "dom-bosco.mp3", title: "Dom Bosco" },
  { name: "help-portao.mp3", title: "Help" },
  { name: "smart-fit.mp3", title: "Smart Fit" },
];

export function RecordingStudioSection() {
  return (
    <section>
      <SectionHeading
        title="Estúdio de Gravação"
        subtitle="Áudio Personalizado e Profissional"
        text="Oferecemos produções em áudio com versatilidade, dinamismo e criatividade. Nosso estúdio realiza gravações, offs, jingles, spots, vinhetas, campanhas políticas, esperas telefônicas e chamadas para Call Center. Garantimos a medida exata para sua produção, com a missão de oferecer serviços e equipamentos de alta qualidade."
      />

      <SectionContent>
        <h4 className="font-bold mb-7">Demonstrações:</h4>
        <div className="grid md:grid-cols-2 grid-cols-1  gap-6">
          {songs.map((song, index) => (
            <div key={index}>
              <ReactAudioPlayer
                src={`/jingles/${song.name}`}
                className="w-full"
                controls
                preload="none"
              />
              <p className="py-2 text-center">{song.title}</p>
            </div>
          ))}
        </div>
      </SectionContent>
      <SectionFooter
        whatsAppMessage="Olá! Gostaria de um orçamento para Gravação de vinhetas"
        text="Peça Agora um Orçamento Exclusivo para Gravação de Vinhetas"
      />
    </section>
  );
}
