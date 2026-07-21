"use client";

import { Field } from "./Field";
import { Button } from "@/components/ui/Button";
import { subjects } from "@/lib/data/subjects";
import { plans } from "@/lib/data/pricing";

/* FORMULAIRE NON BRANCHÉ. Voir la note détaillée dans ContactForm.tsx. */

const niveaux = [
  "6e", "5e", "4e", "3e", "Seconde", "Première", "Terminale",
];

export function BookingForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="grid gap-6 sm:grid-cols-2"
      aria-describedby="booking-form-note"
    >
      <Field label="Nom et prénom du responsable" name="parent" autoComplete="name" required />
      <Field label="Prénom de l'élève" name="student" required />
      <Field label="Adresse e-mail" name="email" type="email" autoComplete="email" required />
      <Field label="Téléphone" name="phone" type="tel" autoComplete="tel" required />
      <Field label="Niveau de l'élève" name="level" as="select" options={niveaux} required />
      <Field
        label="Matière souhaitée"
        name="subject"
        as="select"
        options={subjects.map((s) => s.name)}
        required
      />
      <Field
        label="Formule envisagée"
        name="plan"
        as="select"
        options={plans.map((p) => p.label)}
        className="sm:col-span-2"
      />
      <Field
        label="Où en est votre enfant ?"
        name="message"
        as="textarea"
        placeholder="Niveau actuel, difficultés rencontrées, objectif pour l'année…"
        className="sm:col-span-2"
      />
      <Button type="submit" size="lg" arrow className="sm:col-span-2 w-full">
        Envoyer ma demande
      </Button>
      <p
        id="booking-form-note"
        className="sm:col-span-2 border-l border-gold pl-4 text-[0.8125rem] leading-relaxed text-ink-muted"
      >
        Ce formulaire n&apos;est pas encore relié à votre messagerie : aucune
        réservation ne sera transmise pour l&apos;instant. Pour réserver dès
        maintenant, appelez le 01 47 34 35 71 ou écrivez à contact@prepa-etoile.fr.
      </p>
    </form>
  );
}
