import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Button, { OutlineButton } from '../button/Button';
import Modal, { ModalContent } from '../modal/Modal';

import kpApi from "../../api/kpApi";
import apiConfig from "../../api/apiConfig";

import './hero-slider.scss'

const HeroSlider = () => {
    const [topMovieItems, setTopMovieItems] = useState([])
    useEffect(() => {
        const getTopMovies = async () => {
            const params = { type: 'TOP_250_BEST_FILMS' }
            try {
                const response = await kpApi.getTopMoviesList({ params });
                setTopMovieItems(response.films.slice(1, 4));
                // console.log(response);
            } catch {
                // console.log('error')
            }
        }
        getTopMovies()
    }, [])

    return (
        <div className="hero-slider">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={true}
                navigation
                pagination={{ clickable: true }}
            >
                {
                    topMovieItems.map((item, i) =>

                        <SwiperSlide key={i}>
                            {({ isActive }) => (

                                <HeroSliderItem item={item} className={`${isActive ? 'active' : ''}`} />
                            )}

                        </SwiperSlide>

                    )
                }
            </Swiper>
            {
                topMovieItems.map((item, i) => <TrailerModal key={i} item={item} />)
            }
        </div>
    )
}

const HeroSliderItem = props => {
    let navigate = useNavigate();

    const item = props.item;

    const background = apiConfig.originalImage(item.filmId ? item.filmId : item.posterUrl)

    const setModalActive = async () => {
        const modal = document.querySelector(`#modal_${item.filmId}`)

        const videos = await kpApi.getVideos(item.filmId)
        console.log(videos)
        if (videos.items.length > 0) {
            const videoSrc = videos.items[0].url;

            modal.querySelector('.modal__content > iframe').setAttribute('src', videoSrc)
        } else {
            modal.querySelector('.modal__content').innerHTML = 'No trailer'
        }
        modal.classList.toggle('active')
    }
    return (
        <div
            className={`hero-slider__item ${props.className}`}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="hero-slider__item__content container">
                <div className="hero-slider__item__content__info">
                    <h2 className="title">{item.nameRu}</h2>
                    <div className="btns">
                        <Button onClick={() => navigate('/films/' + item.filmId)}>
                            Смотреть
                        </Button>
                        <OutlineButton onClick={setModalActive}>
                            Смотреть
                        </OutlineButton>
                    </div>
                </div>
                <div className="hero-slider__item__content__poster">
                    <img src={apiConfig.w300Image(item.filmId)} alt="" />
                </div>
            </div>
        </div>
    )
}

const TrailerModal = props => {
    const item = props.item;
    const iframeRef = useRef(null);

    const onClose = () => iframeRef.current.setAttribute('src', '')

    return (
        <Modal active={false} id={`modal_${item.filmId}`}>
            <ModalContent onClose={onClose}>
                <iframe ref={iframeRef} width='100%' height='500px' title="trailer">

                </iframe>
            </ModalContent>
        </Modal>
    )
}
export default HeroSlider;