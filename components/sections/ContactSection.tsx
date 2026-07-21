import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { ContactForm } from "@/components/forms/ContactForm";
import { IconMail, IconPhone, IconPin } from "@/components/ui/Icons";
import { site } from "@/lib/data/site";

export function ContactDetails() {
  return (
    <ul className="space-y-5">
      <li className="flex items-center gap-4">
        <IconPhone className="h-5 w-5 shrink-0 text-gold" />
        <a
          href={site.phone.href}
          className="text-[1.0625rem] text-navy transition-colors hover:text-gold"
        >
          {site.phone.display}
        </a>
      </li>
      <li className="flex items-center gap-4">
        <IconMail className="h-5 w-5 shrink-0 text-gold" />
        <a
          href={`mailto:${site.email}`}
          className="text-[1.0625rem] text-navy transition-colors hover:text-gold"
        >
          {site.email}
        </a>
      </li>
      <li className="flex items-center gap-4">
        <IconPin className="h-5 w-5 shrink-0 text-gold" />
        <span className="text-[1.0625rem] text-navy">{site.address.display}</span>
      </li>
    </ul>
  );
}

export function ContactSection() {
  return (
    <Section id="contact" tone="shade">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
        <div>
          <SectionIntro
            eyebrow="Commencez dès aujourd'hui"
            title="Offrez à votre enfant les meilleures conditions pour réussir."
            intro="Échangeons sur son niveau, ses objectifs et le groupe qui lui conviendra le mieux."
          />
          <div className="mt-10 border-t border-hairline pt-10">
            <ContactDetails />
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
