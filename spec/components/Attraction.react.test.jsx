import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
// import { shallow, mount, render } from 'enzyme';
import Attraction from '../../src/components/Attraction';
import Header from '../../src/components/Header';
import Images from '../../src/components/Images';
import Overview from '../../src/components/Overview';

// const Attraction = () => (
//   <div className="attraction">Test</div>
// );

describe('Attraction', () => {
  it('this.state.current should equal null on initial render', () => {
    expect(shallow(<Attraction />).state().current).toBeNull();
  });
  it('should render Loading Div on initial render', () => {
    expect(shallow(<Attraction />).containsMatchingElement(
      <div className="loading">Loading...</div>,
    )).toBeTruthy();
  });
  it('should only have one child element on initial render', () => {
    expect(shallow(<Attraction />).children()).toHaveLength(1);
  });
  it('should mount and call componentDidMount once', () => {
    const fn = jest.spyOn(Attraction.prototype, 'componentDidMount');
    mount(<Attraction />);
    expect(fn).toHaveBeenCalled();
  });
});
