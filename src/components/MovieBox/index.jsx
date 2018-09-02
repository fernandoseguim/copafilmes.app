import React, { Fragment } from 'react';
import './style.css';

export default (props) => (
    <Fragment>
        <div className="movie-box">
            <input id={ props.movie.id } name={ props.movie.id } type="checkbox"/>
            <label htmlFor={ props.movie.id }>
                <span className="movie-title">{ props.movie.title }</span>
                <span className="movie-year">{ props.movie.year }</span>
            </label>   
        </div>
    </Fragment>
);