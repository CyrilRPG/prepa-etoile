import Image from "next/image";
import Link from "next/link";
import { subjects } from "@/lib/data/subjects";

export function SubjectGrid() {
  return (
    <ul className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2">
      {subjects.map((subject) => (
        <li key={subject.slug}>
          <Link href={`/nos-matieres#${subject.slug}`} className="group block">
            <div className="relative aspect-[4/3] overflow-hidden bg-cream-shade">
              <Image
                src={subject.image}
                alt={subject.alt}
                fill
                sizes="(min-width: 640px) 40vw, 90vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-6 flex items-baseline gap-4">
              <span className="font-serif text-[0.9375rem] text-gold">
                {subject.index}
              </span>
              <h3 className="text-[1.375rem] transition-colors group-hover:text-gold">
                {subject.name}
              </h3>
            </div>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
              {subject.blurb}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
