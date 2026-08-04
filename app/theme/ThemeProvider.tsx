"use client";

import { useEffect } from "react";
import { clientConfig } from "@/app/config/client";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const theme = clientConfig.theme;

    const root = document.documentElement;

    root.style.setProperty("--primary", theme.primary);

    root.style.setProperty(
      "--primary-hover",
      theme.primaryHover
    );

    root.style.setProperty(
      "--secondary",
      theme.secondary
    );

    root.style.setProperty(
      "--background",
      theme.background
    );

    root.style.setProperty(
      "--surface",
      theme.surface
    );

    root.style.setProperty("--text", theme.text);

    root.style.setProperty(
      "--text-muted",
      theme.textMuted
    );

    root.style.setProperty(
      "--border",
      theme.border
    );

    root.style.setProperty(
      "--success",
      theme.success
    );

    root.style.setProperty(
      "--warning",
      theme.warning
    );

    root.style.setProperty(
      "--danger",
      theme.danger
    );

  }, []);

  return children;
}