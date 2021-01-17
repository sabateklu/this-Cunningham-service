import React from 'react';
import { shallow } from 'enzyme';
import Attraction from '../../src/components/Attraction';
import Overview from '../../src/components/Overview';
import data from './mockData';

describe('<Overview />', () => {
  let wrapper;
  let app;
  beforeEach(() => {
    app = shallow(<Attraction />);
    wrapper = shallow(<Overview current={data} />);
  });
});
