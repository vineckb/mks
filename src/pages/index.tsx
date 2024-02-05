import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { PageHeader } from "../components/PageHeader";
import { AboutSection } from "../sections/About";
import { SoundCarSection } from "../sections/SoundCar";
import { RecordingStudioSection } from "../sections/RecordingStudio";
import { RadioIndoorSection } from "../sections/RadioIndoor";
import { Analytics } from "@vercel/analytics/react";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <AboutSection />
      <SoundCarSection />
      <RecordingStudioSection />
      <RadioIndoorSection />
      <PageHeader />
      <Analytics />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <html lang="pt-br" />
    <title>
      Carro de Som, Estúdio de gravação & Rádio Indoor - MKS Audio Marketing
    </title>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG_MANAGER_ID}`}
    ></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "${process.env.GTAG_MANAGER_ID}");
        `,
      }}
    />
  </>
);
