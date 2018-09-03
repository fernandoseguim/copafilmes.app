import React, { Fragment } from 'react';
import './style.css';

export default (props) => (
    <Fragment>        
        <div className="counter">
            Selecionados
            <span>{ props.count } de { props.limit } filmes</span>
        </div>            
    </Fragment>
);