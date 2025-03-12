
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading = ({ title, subtitle, className }: SectionHeadingProps) => {
  return (
    <div className={cn("mb-10 text-center", className)}>
      <div className="inline-flex items-center justify-center">
        <span className="px-2 py-1 text-xs font-medium uppercase tracking-wider text-primary rounded-full bg-primary/10 mb-3">
          {subtitle}
        </span>
      </div>
      <h2 className="section-heading">{title}</h2>
    </div>
  );
};

export default SectionHeading;
