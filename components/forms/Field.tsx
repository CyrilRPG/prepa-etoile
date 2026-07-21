import { cn } from "@/lib/cn";

type Props = {
  label: string;
  name: string;
  as?: "input" | "select" | "textarea";
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  options?: string[];
  rows?: number;
  className?: string;
};

const control =
  "mt-2.5 w-full rounded-[2px] border border-hairline bg-cream px-4 py-3 text-[0.9375rem] text-ink " +
  "transition-colors placeholder:text-ink-soft hover:border-gold/50 focus:border-gold focus:outline-none";

export function Field({
  label,
  name,
  as = "input",
  type = "text",
  required,
  autoComplete,
  placeholder,
  options,
  rows = 5,
  className,
}: Props) {
  return (
    <label className={cn("block", className)}>
      <span className="text-[0.8125rem] font-medium text-navy">
        {label}
        {required && <span className="ml-1 text-gold" aria-hidden="true">*</span>}
      </span>

      {as === "select" ? (
        <select name={name} required={required} className={control} defaultValue="">
          <option value="" disabled>
            Choisissez…
          </option>
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : as === "textarea" ? (
        <textarea
          name={name}
          rows={rows}
          required={required}
          placeholder={placeholder}
          className={cn(control, "resize-y")}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={control}
        />
      )}
    </label>
  );
}
