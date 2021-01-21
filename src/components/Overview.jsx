import React from 'react';
import PropTypes from 'prop-types';
import ImproveListing from './ImproveListing';
import css from '../styles/overview.module.css';

const Overview = ({
  overview, form, handleFormChange, clicked, handleClick, submitImprovements, id,
}) => (
  <div className={css.overview}>
    <h4 className={css['overview-header']}>Overview</h4>
    <p className={css.description}>{overview.description}</p>
    <p className={css['open-closed']}><strong>{overview.isOpen ? 'Open Now' : 'Closed'}:</strong> Hours Here</p>
    <p className={css.duration}>Suggested Duration: {overview.suggestedDuration} minutes</p>
    <div className={css['address-container']}>
      <div className={css.address}>Address:</div>
      <p className={css.address}>{overview.address}</p>
    </div>
    <ImproveListing
      form={form}
      handleFormChange={handleFormChange}
      clicked={clicked}
      handleClick={handleClick}
      submitImprovements={submitImprovements}
      id={id}
    />
  </div>
);

Overview.propTypes = {
  overview: PropTypes.shape({
    description: PropTypes.string,
    isOpen: PropTypes.bool,
    suggestedDuration: PropTypes.number,
    address: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    description: PropTypes.string,
    isOpen: PropTypes.bool,
    suggestedDuration: PropTypes.number,
    address: PropTypes.string,
  }),
  handleFormChange: PropTypes.func,
  clicked: PropTypes.bool,
  handleClick: PropTypes.func,
  submitImprovements: PropTypes.func,
  id: PropTypes.string,
};

Overview.defaultProps = {
  form: {
    description: '',
  },
  handleFormChange: () => {},
  handleClick: () => {},
  submitImprovements: () => {},
  clicked: false,
  id: 'Invalid',
};

export default Overview;
