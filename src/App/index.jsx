import React, { Component } from 'react'
import Header from '../components/Header';
import MovieForm from '../components/MovieForm';

class Main extends Component {
    render(){
        return (
            <div className="container">
                <Header 
                    subtitle="Fase de Seleção" 
                    message="Selecione 8 filmes que você deseja que entrem na competição e depois pressione o botão Gerar Meu Campeonato para prosseguir." 
                />
                <MovieForm />
            </div>
        )
    }
}

export default Main;