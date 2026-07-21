import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { site } from "@/lib/data/site";

export function VideoSection() {
  return (
    <Section id="video" tone="shade">
      <SectionIntro
        align="center"
        eyebrow="Découvrez Prépa Étoile"
        title="Une méthode, une équipe, une exigence."
        intro="Découvrez en quelques minutes l'esprit de Prépa Étoile, notre accompagnement et la façon dont nous aidons chaque élève à progresser."
      />
      <div className="mx-auto mt-14 aspect-video max-w-4xl border border-hairline bg-navy">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${site.videoId}`}
          title="Présentation de Prépa Étoile"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    </Section>
  );
}
