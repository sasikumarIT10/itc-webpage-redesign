"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  resolveAutoTheme,
  themeModeLabels,
  themeModes,
  type ThemeMode,
} from "@/lib/theme";

const STORAGE_KEY = "itc-theme-preference";

type ThemeContextValue = {
  mode: ThemeMode;
  resolved: "light" | "dark";
  setMode: (mode: ThemeMode) => void;
  cycleMode: () => void;
  mounted: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readStoredMode(): ThemeMode {
  if (typeof window === "undefined") return "auto";
  const stored = localStorage.getItem(STORAGE_KEY);
  return themeModes.includes(stored as ThemeMode) ? (stored as ThemeMode) : "auto";
}

function resolveMode(mode: ThemeMode): "light" | "dark" {
  if (mode === "auto") return resolveAutoTheme();
  if (mode === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return mode;
}

function applyTheme(resolved: "light" | "dark", mode: ThemeMode) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(resolved);
  root.dataset.themeMode = mode;
  root.style.colorScheme = resolved;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>("auto");
  const [resolved, setResolved] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  const sync = useCallback((currentMode: ThemeMode) => {
    const next = resolveMode(currentMode);
    setResolved(next);
    applyTheme(next, currentMode);
  }, []);

  useEffect(() => {
    const stored = readStoredMode();
    setModeState(stored);
    sync(stored);
    setMounted(true);
  }, [sync]);

  useEffect(() => {
    if (!mounted) return;
    sync(mode);
    localStorage.setItem(STORAGE_KEY, mode);

    if (mode === "auto") {
      const id = window.setInterval(() => sync("auto"), 60_000);
      return () => window.clearInterval(id);
    }

    if (mode === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const onChange = () => sync("system");
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }
  }, [mode, mounted, sync]);

  const setMode = useCallback((next: ThemeMode) => {
    setModeState(next);
  }, []);

  const cycleMode = useCallback(() => {
    setModeState((current) => {
      const index = themeModes.indexOf(current);
      return themeModes[(index + 1) % themeModes.length];
    });
  }, []);

  const value = useMemo(
    () => ({ mode, resolved, setMode, cycleMode, mounted }),
    [mode, resolved, setMode, cycleMode, mounted]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useAppTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useAppTheme must be used within ThemeProvider");
  return ctx;
}

export { themeModeLabels };
