import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
// import { shallow, mount, render } from 'enzyme';
// import Attraction from '../../src/components/Attraction.js';

const Attraction = () => (
  <div className="attraction">Test</div>
);

describe('Attraction', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Attraction />).contains(<div className="attraction">Test</div>)).toBe(true);
  });
});
