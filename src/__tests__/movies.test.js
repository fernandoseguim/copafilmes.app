import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Movies from '../pages/Movies';
import Header from '../components/Header';
import MovieForm from '../components/MovieForm';

configure({ adapter: new Adapter() });

describe('When render movies page', () => {
    it('should renders app without crashing', () => {
        shallow(<Movies />);
    });
    
    it('should contains headers', () => {
    
        const app = shallow(<Movies />);
        const header = <Header 
            subtitle="Fase de Seleção" 
            message="Selecione 8 filmes que você deseja que entrem na competição e depois pressione o botão Gerar Meu Campeonato para prosseguir." />;
        
        expect(app.contains(header)).to.equal(true);
    });
    
    it('should contains MovieForm', () => {
    
        const app = shallow(<Movies />);
        const form = <MovieForm />; 
        
        expect(app.contains(form)).to.equal(true);
    });
});
