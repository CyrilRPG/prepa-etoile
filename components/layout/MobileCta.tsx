import Link from "next/link";
import { bookingHref } from "@/lib/data/navigation";
import { IconArrowRight } from "@/components/ui/Icons";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-cream/95 pb-[env(safe-area-inset-bottom)] md:hidden">
      <Link
        href={bookingHref}
        className="mx-4 my-3 flex h-12 items-center justify-center gap-2.5 rounded-[2px] bg-navy text-[0.9375rem] font-medium text-cream"
      >
        Réserver un cours
        <IconArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
