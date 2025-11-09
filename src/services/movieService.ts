import apiClient from "../apiClient";

export const fetchMovieList = async () => {
  const response = await apiClient.get<any>("movies?select=*");
  return response;
};

export const fetchMovieDetails = async (movieId: string) => {
  const response = await apiClient.get<any>(
    `movies?select=id,title,poster,genre,duration,rating,description,shows(id,show_time,theatre:theatre_id(name,location))&id=eq.${movieId}`
  );
  return response;
};

export const fetchShowDetails = async (showId: string) => {
  const response = await apiClient.post<any>(
    "rpc/get_show_details",
    { show_id_input: showId }
  );
  return response.data;
};

export const bookSeats = async (
  showId: number,
  selectedSeats: string[],
  totalPrice: number,
) => {
  const response = await apiClient.post("rpc/book_seats", {
    p_show_id: showId,
    p_seats: selectedSeats,
    p_total_price: totalPrice,
    p_user_id: "cd9cf1ef-21c2-4869-b7cf-bdf6e2315342",
  });

  return response.data;
}