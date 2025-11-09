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