import React, { Fragment } from 'react';
import './style.css';

export default (props) => (
    <Fragment>
        <button className={ props.className } onClick={ props.onClick }>Gerar meu campeonato</button>    
    </Fragment>
);