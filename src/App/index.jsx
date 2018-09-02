import React, { Component } from 'react'
import Header from '../components/Header';
import MovieForm from '../components/MovieForm';

class Main extends Component {
    render(){
        return (
            <div className="container">
                <Header />
                <MovieForm />
            </div>
        )
    }
}

export default Main;