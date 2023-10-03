import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import kpApi from '../../api/kpApi';

const VideoList = props => {
    const { category } = useParams();
    const [videos, setVideos] = useState([])

    useEffect(() => {
        const getVideos = async () => {
            const response = await kpApi.getVideos(props.filmId);
            setVideos(response.items.slice(0, 5));
        }
        getVideos();
    }, [category, props.filmId]);

    return (
        <>
            {
                videos.map((item, i) => {
                    <Video key={i} item={item} />
                })
            }
        </>
    )
}

const Video = props => {
    const item = props.item
    const iframeRef = useRef(null);
    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, [])

    return (
        <div className="video">
            <div className="video__title">
                <h2>{item.name}</h2>
            </div>
            <iframe
                src={item.url}
                ref={iframeRef}
                width='100%'
                title='video'
            ></iframe>
        </div>
    )
}
export default VideoList;