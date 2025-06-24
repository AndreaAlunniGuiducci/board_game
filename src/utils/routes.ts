export const routes = {
  home: "/",
  gameList: "/lista_giochi",
  gameDetail: (id: string) => `/gioco/${id}`,
  bookedGames: "/prenotati",
};  