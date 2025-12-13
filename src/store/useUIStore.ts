import { create } from "zustand";

type UIState = {
  isTransitioning: boolean;
  setTransitioning: (value: boolean) => void;
};

export const useUIStore = create<UIState>((set) => ({
  isTransitioning: false,
  setTransitioning: (value) => set({ isTransitioning: value }),
}));
