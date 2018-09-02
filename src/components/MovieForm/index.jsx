import React, { Fragment } from 'react';
import MovieBox from '../MovieBox';
import './style.css';

export default (props) => (
    <Fragment>
        <form>
            <div className="movie-list">
                <div className="movie-group">
                    <MovieBox id="1" />
                    <MovieBox id="2" />
                    <MovieBox id="3" />
                    <MovieBox id="4" />
                </div>
                <div className="movie-group">
                    <MovieBox id="5" />
                    <MovieBox id="6" />
                    <MovieBox id="7" />
                    <MovieBox id="8" />
                </div>
                <div className="movie-group">
                    <MovieBox id="9" />
                    <MovieBox id="10" />
                    <MovieBox id="11" />
                    <MovieBox id="12" />
                </div>
                <div className="movie-group">
                    <MovieBox id="13" />
                    <MovieBox id="14" />
                    <MovieBox id="15" />
                    <MovieBox id="16" />
                </div>
            </div>
        </form>
    </Fragment>
);