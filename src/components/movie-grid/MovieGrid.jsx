import React, { useState, useEffect, useCallback } from 'react';
import './movie-grid.scss';
import MovieCard from '../movie-card/MovieCard';
import { useNavigate, useParams } from 'react-router-dom';
import kpApi, { category } from '../../api/kpApi';
import Button, { OutlineButton } from '../button/Button';
import Input from '../input/Input';
import { cleanup } from '@testing-library/react';

const MovieGrid = props => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0)

    const { keyword } = useParams()

    useEffect(() => {
        const getList = async () => {
            let response = null;
            if (keyword === undefined) {
                const params = {};
                switch (props.category) {
                    case category.top:
                        response = await kpApi.getTopMoviesList(props.type, { params });
                        break;
                    default:
                        response = await kpApi.getPremieresMoviesList(props.type, { year: 2023, month: "APRIL" })
                }
            } else {
                const params = {
                    query: keyword
                }
                response = await kpApi.search({ params });
            }
            setItems(response.films);
            setTotalPage(response.pagesCount);
        }
        getList();
    }, [props.category, keyword])

    const loadMore = async () => {
        let response = null;
        if (keyword === undefined) {
            const params = {
                page: page + 1
            };
            switch (props.category) {
                case category:
                    response = await kpApi.getTopMoviesList(props.type, { params });
                    break;
                default:
                    response = await kpApi.getPremieresMoviesList(props.type, { year: 2023, month: "JANUARY" })
                    console.log(response)
            }
        } else {
            const params = {
                page: page + 1,
                query: keyword
            }
            response = await kpApi.search({ params })
        }
        setItems(...items, ...response.films);
        setPage(page + 1)
    }
    return (
        <>
            <div className="section mb-3">
                <MovieSearch category={props.category} keyword={keyword} />
            </div>
            <div className='movie-grid'>
                {items.map((item, i) => <MovieCard category={props.category} item={item} key={i} />)}
            </div>
            {
                page < totalPage ? (
                    <div className="movie-grid-loadmore">
                        <OutlineButton className="small" onClick={loadMore}>
                            Загрузить ещё
                        </OutlineButton>
                    </div>
                ) : null
            }
        </>
    );
}

const MovieSearch = props => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');
    const goToSearch = useCallback(
        () => {
            if (keyword.trim().length > 0) {
                navigate(`${category[props.category]}/search/${keyword}`);
            }
        },
        [keyword, props.category, navigate]
    );

    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                goToSearch();
            }
        }
        document.addEventListener('keyup', enterEvent)
        return () => {
            document.removeEventListener('keyup', enterEvent)
        }
    }, [keyword, goToSearch])

    return (
        <div className="movie-search">
            <Input
                type="text"
                placeholder="Введите ключевое слово"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <Button className="small" onClick={goToSearch}>Поиск</Button>
        </div>
    )
}
export default MovieGrid