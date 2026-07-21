"use client";

import { Field } from "./Field";
import { Button } from "@/components/ui/Button";

/* ---------------------------------------------------------------------------
   FORMULAIRE NON BRANCHÉ.

   Rien n'est envoyé : `onSubmit` annule l'envoi pour qu'aucune saisie ne parte
   dans le vide, et un message le dit à l'utilisateur plutôt que de simuler un
   succès. Pour le mettre en service, au choix :
     - Formspree : <form action="https://formspree.io/f/XXXX" method="post">
       et retirer le onSubmit ;
     - Netlify Forms : ajouter data-netlify="true" et un champ caché form-name ;
     - une route API et un fetch (demande de quitter `output: export`).
   Penser à la page Confidentialité (RGPD) et à une case de consentement.
--------------------------------------------------------------------------- */

const niveaux = ["Collège", "Seconde", "Première", "Terminale"];

export function ContactForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="grid gap-6 sm:grid-cols-2"
      aria-describedby="contact-form-note"
    >
      <Field label="Nom et prénom" name="name" autoComplete="name" required />
      <Field label="Adresse e-mail" name="email" type="email" autoComplete="email" required />
      <Field label="Téléphone" name="phone" type="tel" autoComplete="tel" />
      <Field label="Niveau de l'élève" name="level" as="select" options={niveaux} />
      <Field
        label="Votre message"
        name="message"
        as="textarea"
        placeholder="Matière, niveau actuel, objectif…"
        className="sm:col-span-2"
      />
      <Button type="submit" size="lg" arrow className="sm:col-span-2 w-full">
        Être rappelé par l&apos;équipe
      </Button>
      <p
        id="contact-form-note"
        className="sm:col-span-2 border-l border-gold pl-4 text-[0.8125rem] leading-relaxed text-ink-muted"
      >
        Ce formulaire n&apos;est pas encore relié à votre messagerie : aucune
        demande ne sera transmise pour l&apos;instant. En attendant, écrivez-nous
        à contact@prepa-etoile.fr ou appelez le 01 47 34 35 71.
      </p>
    </form>
  );
}
