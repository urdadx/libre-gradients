import { create } from "zustand";

type State = {
  searchText: string;
};

type Action = {
  updateSearchText: (searchText: State["searchText"]) => void;
};

const useSearchText = create<State & Action>((set) => ({
  searchText: "",
  updateSearchText: (searchText) => set(() => ({ searchText: searchText })),
}));

export default useSearchText;
