import axiosClient from "./axiosClient";

export const category = {
  top: "top",
  premieres: "premieres",
};

// export const topType = {
//   TOP_250_BEST_FILMS: 'TOP_250_BEST_FILMS',
//   TOP_100_PUPULAR_FILMS: 'TOP_100_PUPULAR_FILMS',
//   TOP_AWAIT_FILMS: 'TOP_AWAIT_FILMS'
// }

// export const premieresType = {
//   JANUARY: 'JANUARY',
//   FEBRUARY: 'FEBRUARY',
//   MARCH: 'MARCH',
//   APRIL: 'APRIL',
//   MAY: 'MAY',
//   JUNE: 'JUNE',
//   JULY: 'JULY',
//   AUGUST: 'AUGUST',
//   SEPTEMBER: 'SEPTEMBER',
//   OCTOBER: 'OCTOBER',
//   NOVEMBER: 'NOVEMBER',
//   DECEMBER: 'DECEMBER'
// }

const kpApi = {
  getTopMoviesList: (type, params) => {
    const url = "films/top/" + topType[type];
    return axiosClient.get(url, params);
  },
  getPremieresMoviesList: (type, params) => {
    const url = "films/premieres/" + premieresType[type];
    return axiosClient.get(url, params);
  },
  getVideos: (id) => {
    const url = "films/" + id + "/videos";
    return axiosClient.get(url, { params: {} });
  },
  search: () => {
    const url = "films/seach-by-keyword/";
    return axiosClient.get(url, params);
  },
  detail: (id, params) => {
    const url = `films/${id}`;
    return axiosClient.get(url, params);
  },
  similar: (id) => {
    const url = `films/${id}/similars`;
    return axiosClient(url, { params: {} });
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
