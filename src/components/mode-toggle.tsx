"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div>
      <p onClick={() => setTheme("light")}>Light</p>
      <p onClick={() => setTheme("dark")}>Dark</p>
      <p onClick={() => setTheme("system")}>System</p>
    </div>
  );
}
