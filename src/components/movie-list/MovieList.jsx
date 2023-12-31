import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import './movie-list.scss';

import { SwiperSlide, Swiper } from "swiper/react";
import { Link } from "react-router-dom";
import MovieCard from "../movie-card/MovieCard";

import Button from "../button/Button";

import kpApi, { category } from "../../api/kpApi";
import apiConfig from "../../api/apiConfig";


const MovieList = props => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {}
            // const paramsTop = { type: props.type };
            // const paramsPremieres = { year: props.year, month: props.month,};
            if (props.type !== 'similar') {
                switch (props.category) {
                    case category.premieres:
                        response = await kpApi.getPremieresMoviesList({ year: 2023, month: "JANUARY" })
                        // response = await kpApi.getTopMoviesList(props.type, { params });
                        break;
                    default:
                        response = await kpApi.getTopMoviesList(props.type, { params });

                        // response = await kpApi.getPremieresMoviesList(props.type, { year: 2023, month: "APRIL" })
                        console.log(response)
                }
            } else {
                response = await kpApi.similar(props.category, props.filmId)
            };
            setItems(response.films)
        }
        getList();
    }, []);

    return (
        <div className="movie-list">
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {
                    items.map((item, i) =>
                        <SwiperSlide key={i}>
                            <MovieCard item={item} category={props.category} />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    )
}
MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}
export default MovieList