"use client";

import { create } from "zustand";

type ProductFilterState = {
  search: string;
  category: string;
  setSearch: (value: string) => void;
  setCategory: (value: string) => void;
  reset: () => void;
};

export const useProductFilterStore = create<ProductFilterState>((set) => ({
  search: "",
  category: "All",
  setSearch: (value) => set({ search: value }),
  setCategory: (value) => set({ category: value }),
  reset: () => set({ search: "", category: "All" })
}));
