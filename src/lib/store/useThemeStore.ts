import { create } from "zustand";
interface useDarkModeStoreProps {
  setThemeValue: (theme: string | undefined) => void;
}

export const useThemeStore = create<useDarkModeStoreProps>(() => ({
  setThemeValue(theme: string | undefined) {
    if (theme) document.body.classList.add("dark");
    if (!theme) document.body.classList.remove("dark");
  },
}));

export const useThemeStoreActions = () => {
  return useThemeStore((store) => ({
    setThemeValue: store.setThemeValue,
  }));
};
