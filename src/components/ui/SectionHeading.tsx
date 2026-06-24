import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  alignment = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col mb-12",
        {
          "items-start text-left": alignment === "left",
          "items-center text-center": alignment === "center",
          "items-end text-right": alignment === "right",
        },
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-brand-dark/70 max-w-2xl text-lg">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-20 bg-brand-gold mt-6 rounded-full" />
    </div>
  );
}
