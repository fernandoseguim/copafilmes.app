import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import MovieForm from '../components/MovieForm';
import Counter from '../components/Counter';
import Button from '../components/Button';

configure({ adapter: new Adapter() });

describe('When render movies form component', () => {
        
    it('should contains counter component', () => {
    
        const movieForm = shallow(<MovieForm />);
        const counter = <Counter count={0} limit={8} />;
        
        expect(movieForm.contains(counter)).to.equal(true);
    });
                
    it('should contains button component', () => {
    
        const movieForm = shallow(<MovieForm />);
        const button = <Button />;
        
        expect(movieForm.contains(button)).to.equal(true);
    });
});
