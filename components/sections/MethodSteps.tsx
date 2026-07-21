import { methodSteps } from "@/lib/data/method";

/** `detailed` ajoute le paragraphe long, réservé à la page Notre méthode. */
export function MethodSteps({ detailed = false }: { detailed?: boolean }) {
  return (
    <ol className="mt-16 grid gap-px bg-hairline md:grid-cols-2 lg:grid-cols-5">
      {methodSteps.map((step) => (
        <li key={step.index} className="relative bg-cream px-7 pt-9 pb-10">
          {/* Le filet or marque la progression d'une étape à l'autre. */}
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gold" />
          <span className="font-serif text-[0.9375rem] text-gold">{step.index}</span>
          <h3 className="mt-4 text-[1.25rem]">{step.title}</h3>
          <p className="mt-3.5 text-[0.9375rem] leading-relaxed text-ink-muted">
            {step.body}
          </p>
          {detailed && (
            <p className="mt-4 border-t border-hairline pt-4 text-[0.875rem] leading-relaxed text-ink-muted">
              {step.detail}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}
