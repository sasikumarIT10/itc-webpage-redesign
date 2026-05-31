"use client";

import { themeModeLabels, useAppTheme } from "@/components/ThemeProvider";

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { mode, cycleMode, mounted } = useAppTheme();

  if (!mounted) {
    return (
      <div
        className={compact ? "h-10 w-10 rounded-xl" : "h-10 min-w-[7.5rem] rounded-xl"}
        aria-hidden
      />
    );
  }

  const icons: Record<string, string> = {
    light: "☀️",
    dark: "🌙",
    auto: "🕐",
    system: "💻",
  };

  const nextIndex = (["light", "dark", "auto", "system"] as const).indexOf(mode) + 1;
  const nextMode = (["light", "dark", "auto", "system"] as const)[nextIndex % 4];

  if (compact) {
    return (
      <button
        type="button"
        onClick={cycleMode}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-itc-green/15 bg-itc-green-muted/50 text-base transition-all hover:border-itc-green/30 hover:shadow-glow dark:border-white/15 dark:bg-white/10 dark:hover:border-itc-gold/40"
        aria-label={`Theme: ${themeModeLabels[mode]}. Next: ${themeModeLabels[nextMode]}.`}
        title={`${themeModeLabels[mode]} — click for ${themeModeLabels[nextMode]}`}
      >
        {icons[mode]}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={cycleMode}
      className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold text-white/80 transition-all hover:border-itc-gold/40 hover:bg-white/10"
      aria-label={`Theme: ${themeModeLabels[mode]}. Next: ${themeModeLabels[nextMode]}.`}
    >
      <span>{icons[mode]}</span>
      <span>{themeModeLabels[mode]}</span>
    </button>
  );
}
