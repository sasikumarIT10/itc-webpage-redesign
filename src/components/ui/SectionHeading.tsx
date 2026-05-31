type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl text-left";

  return (
    <div className={alignClass}>
      <p className={dark ? "section-label-dark" : "section-label"}>
        <span
          className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-itc-gold animate-pulse-soft" : "bg-itc-green"}`}
        />
        {label}
      </p>
      <h2
        className={`mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-itc-slate dark:text-white"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed lg:text-lg ${
            dark ? "text-white/70" : "text-itc-slate-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
