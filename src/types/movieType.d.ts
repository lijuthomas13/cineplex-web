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
