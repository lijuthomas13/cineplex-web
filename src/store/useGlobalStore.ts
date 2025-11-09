import { create } from "zustand";

interface GlobalSettings {
  theme: "light" | "dark";
  setTheme : (theme:  "light" | "dark") => void
}

export const useGlobalStore = create<GlobalSettings>((set) => ({
  theme: "light",

  setTheme: async (theme: "light" | "dark") => {
    set({ theme: theme });
  },
}));
