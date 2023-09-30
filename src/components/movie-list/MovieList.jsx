import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import './movie-list.scss';

import { SwiperSlide, Swiper } from "swiper/react";
import { Link } from "react-router-dom";

import Button from "../button/Button";

import kpApi, { category } from "../../api/kpApi";
import apiConfig from "../../api/apiConfig";


const MovieList = props => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getList = async () => {
            let response = null;
            const paramsTop = {type: props.type};
            // const paramsPremieres = { year: props.year, month: props.month,};
            if (props.type !== 'similar') {
                switch (props.category) {
                    case category.top:
                        response = await kpApi.getTopMoviesList({ paramsTop });
                        break;
                    default:
                        response = await kpApi.getPremieresMoviesList({ year: props.year, month: props.month })
                        console.log(response)
                }
            } else {
                response = await kpApi.similar(props.id)
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
                            <img src={`https://kinopoiskapiunofficial.tech/images/posters/kp_small/${item.filmId}.jpg`} alt="" />
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