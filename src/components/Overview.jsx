import React from 'react';
import PropTypes from 'prop-types';
import ImproveListing from './ImproveListing';

const Overview = ({ overview }) => (
  <div className="overview">
    <h4 className="overview-header">Overview</h4>
    <p className="description">{overview.description}</p>
    <p className="open-closed"><strong>{overview.isOpen ? 'Open Now' : 'Closed'}:</strong> Hours Here</p>
    <p className="duration">Suggested Duration: {overview.suggestedDuration} minutes</p>
    <div className="address-container">
      <div className="address">Address:</div>
      <p className="address">{overview.address}</p>
    </div>
    <ImproveListing />
  </div>
);

export default Overview;

Overview.propTypes = {
  overview: PropTypes.shape({
    description: PropTypes.string,
    isOpen: PropTypes.bool,
    suggestedDuration: PropTypes.number,
    address: PropTypes.string,
  }).isRequired,
};
