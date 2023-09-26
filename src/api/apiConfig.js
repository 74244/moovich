const apiConfig = {
    baseUrl: process.env.API_URL,
    apiKey: process.env.API_KEY,
    originalImage: (imgPath) => `https://avatars.mds.yandex.net/get-kinopoisk-image/${imgPath}/orig`,
    w300Image: (imgPath) => `https://avatars.mds.yandex.net/get-kinopoisk-image/${imgPath}/300x`,
}

export default apiConfig;

// "imageUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/2924f6c4-4ea0-4a1d-9a48-f29577172b27/orig",
// "previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/2924f6c4-4ea0-4a1d-9a48-f29577172b27/300x"


