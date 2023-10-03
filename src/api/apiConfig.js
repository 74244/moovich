const apiConfig = {
    baseUrl: process.env.REACT_APP_API_URL,
    apiKey: process.env.REACT_APP_API_KEY,
    originalImage: (imgPath) => `https://kinopoiskapiunofficial.tech/images/posters/kp/${imgPath}.jpg`,
    w300Image: (imgPath) => `https://kinopoiskapiunofficial.tech/images/posters/kp_small/${imgPath}.jpg`,
}
export default apiConfig;

// "imageUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/2924f6c4-4ea0-4a1d-9a48-f29577172b27/orig",
// "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/2924f6c4-4ea0-4a1d-9a48-f29577172b27/300x"


