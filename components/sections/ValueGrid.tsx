import { values } from "@/lib/data/values";

export function ValueGrid() {
  return (
    <ul className="mt-16 grid gap-px bg-hairline-dark sm:grid-cols-2 lg:grid-cols-3">
      {values.map((value) => (
        <li key={value.index} className="bg-navy px-8 py-10">
          <span className="font-serif text-[0.9375rem] text-gold-light">
            {value.index}
          </span>
          <h3 className="mt-5 text-[1.1875rem] text-cream">{value.title}</h3>
          <p className="mt-3.5 text-[0.9375rem] leading-relaxed text-cream/65">
            {value.body}
          </p>
        </li>
      ))}
    </ul>
  );
}
