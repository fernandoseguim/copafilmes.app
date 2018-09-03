import React, { Component } from 'react'
import Header from '../../components/Header';

class Movies extends Component {
    render(){
        return (
            <div className="container">
                <Header 
                    subtitle="Resultado Final" 
                    message="Veja o resultado final do Campeonato de filmes de forma simples e rápida." 
                />
            </div>
        )
    }
}

export default Movies;