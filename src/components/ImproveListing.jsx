import React from 'react';
import PropTypes from 'prop-types';

const ImproveListing = ({ clicked }) => (
  <div className="improveListing">
    {clicked ? (
      <form className="improve" onSubmit={() => {}}>
        <input type="text" />
      </form>
    ) : 'Improve This Listing'}
  </div>
);

ImproveListing.propTypes = {
  clicked: PropTypes.bool,
};

ImproveListing.defaultProps = {
  clicked: false,
};

export default ImproveListing;
