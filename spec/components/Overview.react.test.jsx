import React from 'react';
import { shallow, mount } from 'enzyme';
import Attraction from '../../src/components/Attraction';
import ImproveListing from '../../src/components/ImproveListing';
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
    wrapper.unmount();
  });
  test('Improve listing component should render', () => {
    expect(wrapper.find('.overview').containsMatchingElement(
      ImproveListing,
    )).toBe(true);
    wrapper.unmount();
  });
  describe('<ImproveListing /> Form', () => {
    let improveListing;
    let app;
    let instance;
    beforeEach(() => {
      app = mount(<Attraction />);
      instance = app.instance();
      improveListing = mount(<ImproveListing />);
    });
    afterEach(() => {
      app.unmount();
      improveListing.unmount();
    });
    test('it should render "Improve this listing initially"', () => {
      expect(improveListing.text()).toEqual('Improve This Listing');
    });
    test('it should render a form', () => {
      improveListing.setProps({ clicked: true });
      expect(improveListing.find('.improve').type()).toBe('form');
    });
    test.skip('it should have 4 input fields', () => {
      improveListing.setProps({ clicked: true });
      expect(improveListing.find('input')).toHaveLength(4);
    });
    describe('HandleFormChange', () => {
      test('handleformChange should be a function', () => {
        improveListing.setProps({ clicked: true });
        improveListing.setProps({ handleFormChange: instance.handleFormChange });
        expect(typeof improveListing.props().handleFormChange).toEqual('function');
      });
      test.skip('it should call handleFormChange when there is a change', () => {
        improveListing.setProps({ clicked: true });
        const spy = jest.spyOn(instance, 'handleFormChange');
        improveListing.setProps({ handleFormChange: instance.handleFormChange });
        const input = improveListing.find('input');
        input.simulate('change');
        expect(spy).toHaveBeenCalledTimes(1);
      });
      test('it should handle form-change by updating state', () => {
        improveListing.setProps({ clicked: true });
        instance.handleFormChange({ target: { name: 'description', value: 'Test' } });
        expect(app.state().form.description).toEqual('Test');
      });
      test.skip('it should update form data with state', () => {
        improveListing.setProps({ clicked: true });
        // instance.handleFormChange({ target: { value: 'Test' } });
        const input = improveListing.find('.input').first();
        input.simulate('change', { target: { value: 'test' } });
        expect(input.props().form.description).toEqual(input.instance().value);
      });
    });
  });
});
