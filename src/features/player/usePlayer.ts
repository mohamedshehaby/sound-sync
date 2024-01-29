import { create } from "zustand";

interface PlacerStore {
  ids: string[];
  activeId?: string;

  setId(id: string): void;

  setIds(ids: string[]): void;

  onPlay(id: string, songsIds: string[]): void;

  onPlayPrevious(): void;

  onPlayNext(): void;

  reset(): void;
}

const usePlayer = create<PlacerStore>((set) => ({
  ids: [],
  activeId: undefined,

  setId(id: string) {
    set({ activeId: id });
  },

  setIds(ids: string[]) {
    set({ ids });
  },

  onPlay(id: string, songsIds: string[]) {
    set({ activeId: id, ids: songsIds });
  },
  onPlayPrevious() {
    set((state) => {
      if (state.ids.length === 0) return {};
      const currentIndex = state.ids.findIndex((id) => id === state.activeId);
      const previousSong = state.ids[currentIndex - 1];

      if (!previousSong)
        return {
          activeId: state.ids[state.ids.length - 1],
        };

      return {
        activeId: previousSong,
      };
    });
  },
  onPlayNext() {
    set((state) => {
      if (state.ids.length === 0) return {};
      const currentIndex = state.ids.findIndex((id) => id === state.activeId);
      const nextSong = state.ids[currentIndex + 1];

      if (!nextSong)
        return {
          activeId: state.ids[0],
        };

      return {
        activeId: nextSong,
      };
    });
  },

  reset() {
    set({ ids: [], activeId: undefined });
  },
}));

export default usePlayer;
