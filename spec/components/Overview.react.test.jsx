import React from 'react';
import { shallow, mount } from 'enzyme';
import Attraction from '../../src/components/Attraction';
import Overview from '../../src/components/Overview';
import data from './mockData';

describe('<Overview />', () => {
  let wrapper;
  // let app;
  beforeEach(() => {
    // app = shallow(<Attraction />);
    wrapper = mount(<Overview overview={data.overview} />);
  });
  test('Open-closed status should change based on props', () => {
    const status = wrapper.find('.overview').find('.open-closed').find('strong');
    expect(status.text()).toEqual('Open Now:');
    // setting props below did not work unless component is MOUNTED
    wrapper.setProps({
      overview: {
        ...data.overview,
        isOpen: false,
      },
    });
    expect(status.text()).toEqual('Closed:');
  });
});
