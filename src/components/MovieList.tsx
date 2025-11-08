import React from "react";

const MovieList = () => {
  const movies: any[] = [
    {
      id: 1,
      title: "Dune: Part Two",
      poster:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA9BOFyeUMUVvRqBDh5bQZDWoUPh2IFEaOpCZFfrwJaYSspxpSEze9B151e1mSwGmJIt39j8OwARI3oO2vPPQiurWv11MCXJSyjsT_Ncem0t_3AU8wKXrrbRF1NBHnJJ6yVr-uIQlKPg4czgiC3hhTw8m20VRHKcSLrdzIAmpbydzjhTJ6T049aQ3-y9n_UjtE4fm-RsAHnVJiAtgT5b-AKaKQve_0mOEeypKi0He1qbT1W4uXy-F8_rKmrfscF7sKCw4ppc2JWE_c",
      genres: ["Action", "Sci-Fi"],
    },
    {
      id: 2,
      title: "Oppenheimer",
      poster:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBCJvHRm51QeGbo1eIbxHsXrIvhoddp2JoOxBVHr_OQDOhxFTOMs41dp148FXqxkKkr15YDy9uaWnC3qqSmbH8LnF8wa9xyktTK-GJa4eNRWRuCsiB5RJ89yISnQNkV0j-ghoWS-ax_oMCTuGbV2RAwEa6fA9H5A4g2vtO9MdXzjh1ScLgyli1CBEYy0FL8tm5f_TmB0d-vvONEyjTif59eXkT6F32galefPFfUxjXFaL6L-muZplrTe4aCp1mlxw4NlqUKeKG8vcs",
      genres: ["Drama", "History"],
    },
    {
      id: 3,
      title: "Spider-Man",
      poster:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAFdl34RPsf56TQmiL746m4iB-HTyYnwbV0QQO2koId-2oH8GuPTjfeNpDit6G8eHfXxTdJf8WefjGjUo1_sFU21W03r_YmJakYv1NrtTxfPW6RW-DA1HLleJaZhu8q0U4JXnWBp7BltSdOYzh6e2fF-8YhNPQ2px5sTPGaNdgZopF4ZXGMepyzcX2h_CddW5fBOX-oQQHr2LeifHgmvBmID06ApjTJjRMQlfyxJ03aB4nFk_JKJNxGZXghw8viHkyBTYX5vI1sIlk",
      genres: ["Animation", "Action"],
    },
    {
      id: 4,
      title: "The Holdovers",
      poster:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDuPNMuJ2jpYLhTPxrQbN69fjGi8qwqTbO4PPkPbOaBOwj7eBgsMWPud6ton1BHJup1_g4q1X1qXnXajsGVsDQCZzj6onYWDoIoMe0QwAEEsqV-M8NfCXp8AolcbdqMMuCl1cJ_XVunbsvoXASd6l-epfAsv4AQIyAaFZvuCsC3HKtO75M1jv36sPU1dDdnqYeKa-1_SeZ6K4nY12IW4AVAUdMo7FQf47gScoiu5J5iMmfrQus_068f4bN5fOBNQeDmkfL5N2GABXU",
      genres: ["Comedy", "Drama"],
    },
        {
      id: 1,
      title: "Dune: Part Two",
      poster:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA9BOFyeUMUVvRqBDh5bQZDWoUPh2IFEaOpCZFfrwJaYSspxpSEze9B151e1mSwGmJIt39j8OwARI3oO2vPPQiurWv11MCXJSyjsT_Ncem0t_3AU8wKXrrbRF1NBHnJJ6yVr-uIQlKPg4czgiC3hhTw8m20VRHKcSLrdzIAmpbydzjhTJ6T049aQ3-y9n_UjtE4fm-RsAHnVJiAtgT5b-AKaKQve_0mOEeypKi0He1qbT1W4uXy-F8_rKmrfscF7sKCw4ppc2JWE_c",
      genres: ["Action", "Sci-Fi"],
    },
    {
      id: 2,
      title: "Oppenheimer",
      poster:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBCJvHRm51QeGbo1eIbxHsXrIvhoddp2JoOxBVHr_OQDOhxFTOMs41dp148FXqxkKkr15YDy9uaWnC3qqSmbH8LnF8wa9xyktTK-GJa4eNRWRuCsiB5RJ89yISnQNkV0j-ghoWS-ax_oMCTuGbV2RAwEa6fA9H5A4g2vtO9MdXzjh1ScLgyli1CBEYy0FL8tm5f_TmB0d-vvONEyjTif59eXkT6F32galefPFfUxjXFaL6L-muZplrTe4aCp1mlxw4NlqUKeKG8vcs",
      genres: ["Drama", "History"],
    },
    {
      id: 3,
      title: "Spider-Man",
      poster:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAFdl34RPsf56TQmiL746m4iB-HTyYnwbV0QQO2koId-2oH8GuPTjfeNpDit6G8eHfXxTdJf8WefjGjUo1_sFU21W03r_YmJakYv1NrtTxfPW6RW-DA1HLleJaZhu8q0U4JXnWBp7BltSdOYzh6e2fF-8YhNPQ2px5sTPGaNdgZopF4ZXGMepyzcX2h_CddW5fBOX-oQQHr2LeifHgmvBmID06ApjTJjRMQlfyxJ03aB4nFk_JKJNxGZXghw8viHkyBTYX5vI1sIlk",
      genres: ["Animation", "Action"],
    },
    {
      id: 4,
      title: "The Holdovers",
      poster:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDuPNMuJ2jpYLhTPxrQbN69fjGi8qwqTbO4PPkPbOaBOwj7eBgsMWPud6ton1BHJup1_g4q1X1qXnXajsGVsDQCZzj6onYWDoIoMe0QwAEEsqV-M8NfCXp8AolcbdqMMuCl1cJ_XVunbsvoXASd6l-epfAsv4AQIyAaFZvuCsC3HKtO75M1jv36sPU1dDdnqYeKa-1_SeZ6K4nY12IW4AVAUdMo7FQf47gScoiu5J5iMmfrQus_068f4bN5fOBNQeDmkfL5N2GABXU",
      genres: ["Comedy", "Drama"],
    },
  ];
  return (
    <main className="flex-1 mt-6 overflow-y-auto">
      <div className="flex justify-between items-center px-4 mb-6">
        <h1 className="text-4xl font-black text-gray-900">Now Showing</h1>
      </div>

      <div className="grid moview-list-grid gap-6 px-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex flex-col group overflow-hidden rounded-xl bg-gray-100 border border-transparent hover:border-primary/50 transition duration-300"
          >
            <div
              className="aspect-[3/4] bg-cover bg-center rounded-t-xl transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${movie.poster})` }}
            ></div>

            <div className="flex flex-col flex-1 p-4">
              <p className="text-base font-bold text-gray-900">{movie.title}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre}
                    className="text-xs font-medium text-gray-600 bg-gray-200 px-2 py-1 rounded-full"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              <button className="mt-4 w-full bg-primary text-white text-sm font-bold py-2.5 rounded-lg hover:bg-primary/90 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MovieList;
