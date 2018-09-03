import React, { Fragment } from 'react';
import Counter from '../Counter';
import Button from '../Button';
import MovieBox from '../MovieBox';
import './style.css';

const movie = {
    id: 1,
    title: "Infinity war",
    year: "2018"
}

export default (props) => (
    <Fragment>
        <section className="content">        
            <Counter count={0} limit={8} />
            <Button />
            
            <form>
                {/* TODO: Should input movies through copafilmes service */}
                <div className="movie-list">
                    <div className="movie-group">
                        <MovieBox movie={movie} />
                        <MovieBox movie={movie} />
                        <MovieBox movie={movie} />
                        <MovieBox movie={movie} />
                    </div>
                    <div className="movie-group">
                        <MovieBox movie={movie} />
                        <MovieBox movie={movie} />
                        <MovieBox movie={movie} />
                        <MovieBox movie={movie} />
                    </div>
                    <div className="movie-group">
                        <MovieBox movie={movie} />
                        <MovieBox movie={movie} />
                        <MovieBox movie={movie} />
                        <MovieBox movie={movie} />
                    </div>
                    <div className="movie-group">
                        <MovieBox movie={movie} />
                        <MovieBox movie={movie} />
                        <MovieBox movie={movie} />
                        <MovieBox movie={movie} />
                    </div>
                </div>
            </form>
            <Button className="footer" />
        </section>
    </Fragment>
);