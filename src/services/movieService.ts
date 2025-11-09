import apiClient from "../apiClient";

export const fetchMovieList = async () => {
  const response = await apiClient.get<any>("movies?select=*");
  return response;
};
