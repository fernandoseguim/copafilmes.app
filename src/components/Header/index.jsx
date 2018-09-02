import React, { Fragment } from 'react';
import './style.css';

export default () => (
    <Fragment>
        <header className="main-header">
            <h1 className="main-header-title">Campeonato de filmes</h1>
            <h2 className="main-header-subtitle">Fase de Seleção</h2>
            <hr></hr>
            <p>Selecione 8 filmes que você deseja que entrem na competição e depois pressione o botão Gerar Meu Campeonato para prosseguir.</p>
        </header>
    </Fragment>
);