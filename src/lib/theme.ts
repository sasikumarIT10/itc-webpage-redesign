export const themeModes = ["light", "dark", "auto", "system"] as const;
export type ThemeMode = (typeof themeModes)[number];

/** Dark mode between 7 PM and 6 AM (local time). */
export function isNightTime(date = new Date()) {
  const hour = date.getHours();
  return hour >= 19 || hour < 6;
}

export function resolveAutoTheme(date = new Date()): "light" | "dark" {
  return isNightTime(date) ? "dark" : "light";
}

export const themeModeLabels: Record<ThemeMode, string> = {
  light: "Light",
  dark: "Dark",
  auto: "Auto (time)",
  system: "System",
};
