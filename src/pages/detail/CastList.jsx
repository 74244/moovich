import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import kpApi from '../../api/kpApi';
import apiConfig from '../../api/apiConfig';


const CastList = props => {
    const { category } = useParams();
    const [casts, setCasts] = useState([])

    useEffect(() => {
        const getCredits = async () => {
            const response = await kpApi.casts(props.filmId);
            setCasts(response.cast.slice(0, 5));
        }
        getCredits();
    }, [category, props.filmId])

    return (
        <div className='casts'>
            {
                casts.map((item, i) => {
                    <div key={i} className="casts__item">
                        <div className="casts__item__img" style={{ backgroundImage: `url(${apiConfig.w300Image(item.posterUrl)})` }}>
                        </div>
                        <p className='casts__item__name'>{item.nameRu}</p>
                    </div>
                })
            }
        </div>
    )
}
export default CastList