import React from 'react';
import axios from 'axios';
import { shallow, mount } from 'enzyme';
// import renderer from 'react-test-renderer';
// import { shallow, mount, render } from 'enzyme';
import Attraction from '../../src/components/Attraction';
import Header from '../../src/components/Header';
import Images from '../../src/components/Images';
import Overview from '../../src/components/Overview';

const data = {
  overview: {
    description: 'Even pirates, before they attack another ship, hoist a black flag. The Code is more like guidelines, really.',
    isOpen: true,
    suggestedDuration: 127,
    address: 'Jalan Tpj2 Taman Perindustrian Jaya, Subang Jaya, Selangor, 47200'
  },
  relativeRanking: [
    0,
    28,
  ],
  imageUrl: [
    'https://d3tteoxp56tq1d.cloudfront.net/images/tripadvisor_thailand_10.jpg',
    'https://d3tteoxp56tq1d.cloudfront.net/images/tripadvisor_thailand_13.jpg',
    'https://d3tteoxp56tq1d.cloudfront.net/images/tripadvisor_thailand_28.jpg',
    'https://d3tteoxp56tq1d.cloudfront.net/images/tripadvisor_thailand_63.jpg',
    'https://d3tteoxp56tq1d.cloudfront.net/images/tripadvisor_thailand_86.jpg',
    'https://d3tteoxp56tq1d.cloudfront.net/images/tripadvisor_thailand_66.jpg',
    'https://d3tteoxp56tq1d.cloudfront.net/images/tripadvisor_thailand_54.jpg',
    'https://d3tteoxp56tq1d.cloudfront.net/images/tripadvisor_thailand_7.jpg',
    'https://d3tteoxp56tq1d.cloudfront.net/images/tripadvisor_thailand_80.jpg',
    'https://d3tteoxp56tq1d.cloudfront.net/images/tripadvisor_thailand_87.jpg'
  ],
  _id: '6001f45dc6cc5d2005f7d2d7',
  attractionTitle: 'Sukhothai Old City',
  city: 'Samut Prakan, Thailand',
  ratio: 0,
  attractionType: 'Historic Sites',
  reviews: 2876,
  travelersChoiceAward: true,
  likedStatus: false,
  ticketPrice: 238,
  __v: 0,
};

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
    let wrapper;
    beforeEach(() => {
      fn = jest.spyOn(Attraction.prototype, 'componentDidMount');
      wrapper = mount(<Attraction />);
      return wrapper;
    });
    afterEach(() => {
      mount(<Attraction />).unmount();
    });
    test('should mount and call componentDidMount once', () => {
      expect(fn).toHaveBeenCalled();
    });
    test('should mount with 1 child div.attraction', () => {
      wrapper.setState({ current: data });
      expect(wrapper.children()).toHaveLength(1);
      expect(wrapper.find('.attraction')).toHaveLength(1);
    });
  });
});
