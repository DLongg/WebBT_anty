import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  alignment = "center",
  className,
  light = false,
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
      <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold mb-4", light ? "text-white" : "text-brand-dark")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("max-w-2xl text-lg", light ? "text-white/80" : "text-brand-dark/70")}>
          {subtitle}
        </p>
      )}
      <div className={cn("h-1 w-20 mt-6 rounded-full", light ? "bg-brand-gold" : "bg-brand-gold")} />
    </div>
  );
}
