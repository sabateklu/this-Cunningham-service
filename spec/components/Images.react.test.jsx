import React from 'react';
import { shallow } from 'enzyme';
import Images from '../../src/components/Images';
import data from './mockData';

describe('<Images />', () => {
  let images;
  beforeEach(() => {
    images = shallow(<Images images={data.imageUrl} travelersChoice={data.travelersChoiceAward} />);
  });
  afterEach(() => {
    // images.unmount();
  });
  test('Images should render an image initially', () => {
    expect(images.find('img').props().src).toBeDefined();
  });
  test('Images should have an overlay', () => {
    expect(images.find('.overlay')).toHaveLength(1);
  });
  test('Images should display travelers choice award if it has one', () => {
    expect(images.instance().props.travelersChoice).toEqual(true);
    expect(images.find('.award')).toHaveLength(1);
    images.setProps({ travelersChoice: false });
    expect(images.instance().props.travelersChoice).toEqual(false);
    expect(images.find('.award')).toHaveLength(0);
  });
  test.skip('Images should have "prev"/"next" buttons to scroll thru pictures if there are more than one picture', () => {

  });
  test.skip('Images should', () => {

  });
});
