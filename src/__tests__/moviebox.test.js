import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { configure, mount } from 'enzyme'
import MovieBox from '../components/MovieBox';

configure({ adapter: new Adapter() });

const movie = {
    id: "1",
    title: "Infinity war",
    year: "2018",
    score: "10"
}

it('should contains movie', () => {
    const movieBox = mount(<MovieBox movie={movie} />);
    expect(movieBox.props().movie).to.equal(movie);
});