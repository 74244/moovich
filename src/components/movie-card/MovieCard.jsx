import React from 'react';

import './movie-card.scss';

import { Link } from 'react-router-dom';
import Button from '../button/Button';

import { category } from '../../api/kpApi';
import apiConfig from '../../api/apiConfig';

const MovieCard = props => {
    const item = props.item;
    const link = '/' + category[props.category] + '/' + item.filmId;
    const bg = item.posterUrlPreview    // проверить строку потом //
    return (
        <Link to={link}>
            <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
                <Button>
                    <i className="bx bx-play"></i>
                </Button>
            </div>
            <h3>{item.nameRu || item.nameRu}</h3>
        </Link>
    )
}
export default MovieCard