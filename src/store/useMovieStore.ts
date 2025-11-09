import { create } from "zustand";
import { fetchMovieList } from "../services/movieService";
import type { MovieType } from "../types/movieType";

interface MovieStore {
  movies: MovieType[];
  isLoading: boolean;
  error: string | null;
  fetchMovies: () => Promise<void>;
}

export const useMovieStore = create<MovieStore>((set) => ({
  movies: [],
  isLoading: false,
  error: null,

  fetchMovies: async () => {
    try {
      set({ isLoading: true, error: null });
      const response = await fetchMovieList();
      set({ movies: response?.data, isLoading: false });
    } catch (err: any) {
      set({ isLoading: false, error: err.message });
    }
  },
}));
