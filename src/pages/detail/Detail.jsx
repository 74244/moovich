import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import kpApi from "../../api/kpApi";
import apiConfig from "../../api/apiConfig";
import CastList from "./CastList";
import VideoList from "./VideoList";
import MovieList from "../../components/movie-list/MovieList";


const Detail = () => {
    const { category, fildId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            const response = await kpApi.detail(fildId, { params: {} });
            setItem(response);
            window.scrollTo(0, 0);
        }
        getDetail();
    }, [category, fildId])


    return (
        <>
            {
                item && (
                    <>
                        <div className="banner" style={{ backgroundImage: `url(${apiConfig.originalImage(item.posterUrl)})` }}>
                        </div>
                        <div className="movie-content__info">
                            <h1 className="title">
                                {item.title || item.nameRu}
                            </h1>
                            <div className="genres">
                                {item.genres && item.genres.slice(0, 5).map((genre, i) => (
                                    <span key={i} className="genres__item">{genre.name}</span>
                                ))}
                            </div>
                            <p className="overview">overview</p>
                            <div className="cast">
                                <div className="section__header">
                                    <h2>Casts</h2>
                                </div>
                                <CastList id={item.filmId} />
                            </div>
                        </div>
                        <div className="container">
                            <div className="section mb-3">
                                <VideoList id={item.filmId} />
                            </div>
                            <div className="section mb-3">
                                <div className="section mb-2">
                                    <h2>Похожие</h2>
                                </div>
                                <MovieList category={category} type="similar" id={item.fildId} />
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}
export default Detail;