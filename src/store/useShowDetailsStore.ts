import { create } from "zustand";
import type { ShowDetailsType } from "../types/movieType";
import { fetchShowDetails } from "../services/movieService";

interface MovieShowStore {
  show: ShowDetailsType | null;
  isLoading: boolean;
  error: string | null;
  fetchShow: (showId: string) => Promise<void>;
}

export const useMovieShowStore = create<MovieShowStore>((set) => ({
  show: null,
  isLoading: false,
  error: null,

  fetchShow: async (showId: string) => {
    try {
      set({ isLoading: true, error: null });
      const response = await fetchShowDetails(showId);
      set({ show: response, isLoading: false });
    } catch (err: any) {
      set({ isLoading: false, error: err.message });
    }
  },
}));
