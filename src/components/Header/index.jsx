import React, { Fragment } from 'react';
import './style.css';

export default (props) => (
    <Fragment>
        <header className="main-header">
            <h1 className="main-header-title">Campeonato de filmes</h1>
            <h2 className="main-header-subtitle">{ props.subtitle }</h2>
            <hr></hr>
            <p>{ props.message }</p>
        </header>
    </Fragment>
);