import { create } from "zustand";
import { fetchMovieDetails } from "../services/movieService";
import type { MovieDetailsType } from "../types/movieType";

interface MovieDetailsStore {
  movie: MovieDetailsType | null;
  isLoading: boolean;
  error: string | null;
  fetchMovieDetails: (movieId: string) => Promise<void>;
}

export const useMovieDetailsStore = create<MovieDetailsStore>((set) => ({
  movie: null,
  isLoading: false,
  error: null,

  fetchMovieDetails: async (movieId: string) => {
    try {
      set({ isLoading: true, error: null });
      const response = await fetchMovieDetails(movieId);
      set({ movie: response?.data[0], isLoading: false });
    } catch (err: any) {
      set({ isLoading: false, error: err.message });
    }
  },
}));
