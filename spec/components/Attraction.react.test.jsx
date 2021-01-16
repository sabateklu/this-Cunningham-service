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

describe('Attraction Component', () => {
  describe('Initial Render', () => {
    test('this.state.current should equal null on initial render', () => {
      expect(shallow(<Attraction />).state().current).toBeNull();
    });
    test('should render Loading Div on initial render', () => {
      expect(shallow(<Attraction />).containsMatchingElement(
        <div className="loading">Loading...</div>,
      )).toBeTruthy();
    });
    test('should only have one child element on initial render', () => {
      expect(shallow(<Attraction />).children()).toHaveLength(1);
    });
  });
  describe('Upon Mounting', () => {
    let fn;
    beforeEach(() => {
      fn = jest.spyOn(Attraction.prototype, 'componentDidMount');
      return mount(<Attraction />);
    });
    afterEach(() => {
      mount(<Attraction />).unmount();
    });
    test('should mount and call componentDidMount once', () => {
      expect(fn).toHaveBeenCalled();
    });
  });
});
