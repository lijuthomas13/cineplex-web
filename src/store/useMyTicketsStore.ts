import { create } from "zustand";
import type { BookingType } from "../types/movieType";
import { fetchUserBookings } from "../services/movieService";

interface MyTicketsStore {
  bookings: BookingType[] | [];
  isLoading: boolean;
  error: string | null;
  fetchMyTickets: () => Promise<void>;
}

export const useMyTicketsStore = create<MyTicketsStore>((set) => ({
  bookings: [],
  isLoading: false,
  error: null,
  fetchMyTickets: async () => {
    try {
      set({ isLoading: true, error: null });
      const response = await fetchUserBookings();
      set({ bookings: response, isLoading: false });
    } catch (err: any) {
      set({ isLoading: false, error: err.message });
    }
  },
}));
