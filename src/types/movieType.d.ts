import { SEAT_STATUS, SEAT_CATEGORY } from "../constants";

export interface MovieType {
  id: number;
  title: string;
  genre: string[];
  rating: number;
  poster: string;
  description: string;
  duration: string;
}

export interface TheatreType {
  name: string;
  location: string;
}
export interface ShowType {
  id: number;
  show_time: string;
  theatre: TheatreType;
}

export interface MovieDetailsType extends MovieType {
  shows: ShowType[];
}

type SeatType = {
  id: string;
  status: SEAT_STATUS;
};

type RowType = {
  row: string;
  category: SEAT_CATEGORY;
  price: number;
  seats: Seat[];
};

export interface ShowDetailsType {
  showId: number;
  showTime: string;
  theatre: TheatreType;
  layout: RowType[],
  movie: MovieType
}

export interface BookingType {
  booking_id: number;
  movie_title: string;
  movie_poster: string;
  theatre_name: string;
  theatre_location: string;
  show_time: string;
  seats: string[];
  total_price: number;
  created_at: string;
};