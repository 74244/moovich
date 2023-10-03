import axiosClient from "./axiosClient";

export const category = {
  top: "top",
  premieres: "premieres",
};

export const topType = {
  TOP_250_BEST_FILMS: "TOP_250_BEST_FILMS",
  TOP_100_POPULAR_FILMS: "TOP_100_POPULAR_FILMS",
  TOP_AWAIT_FILMS: "TOP_AWAIT_FILMS",
};

export const premieresType = {
  JANUARY: "JANUARY",
  FEBRUARY: "FEBRUARY",
  MARCH: "MARCH",
  APRIL: "APRIL",
  MAY: "MAY",
  JUNE: "JUNE",
  JULY: "JULY",
  AUGUST: "AUGUST",
  SEPTEMBER: "SEPTEMBER",
  OCTOBER: "OCTOBER",
  NOVEMBER: "NOVEMBER",
  DECEMBER: "DECEMBER",
};

const kpApi = {
  getTopMoviesList: (params) => {
    const url = "v2.2/films/top";
    return axiosClient.get(url, params);
  },
  getPremieresMoviesList: (params) => {
    const url = "v2.2/films/premieres";
    return axiosClient.get(url, params);
  },
  getVideos: (id) => {
    const url = "v2.2/films/" + id + "/videos";
    return axiosClient.get(url, { params: {} });
  },
  search: (params) => {
    const url = "v2.2/films/search-by-keyword/";
    return axiosClient.get(url, params);
  },
  detail: (id, params) => {
    const url = `v2.2/films/${id}/`;
    return axiosClient.get(url, params);
  },
  similar: (id) => {
    const url = `v2.2/films/${id}/similars`;
    return axiosClient(url, { params: { id: id } });
  },
  casts: (id) => {
    const url = `v1/staff/${id}`;
    return axiosClient(url, { params: { id: id } });
  },
};

export default kpApi;

// export const topType = {
//   type: [],
//   page: 1,
// }
// export const premieresType = {
//   year: 2023,
//   month: [],
// }
