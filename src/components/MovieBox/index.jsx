import React, { Fragment } from 'react';
import './style.css';

export default (props) => (
    <Fragment>
        <div className="movie-box">
            <input id={ props.id } name={ props.id } type="checkbox"/>
            <label htmlFor={ props.id }>
                <span className="movie-title">Título do filme</span>
                <span className="movie-year">2018</span>
            </label>   
        </div>
    </Fragment>
);