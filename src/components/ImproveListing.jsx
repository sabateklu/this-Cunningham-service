import React from 'react';
import PropTypes from 'prop-types';

const ImproveListing = ({ clicked, form, handleFormChange, handleClick }) => (
  <div className="improveListing">
    {clicked ? (
      <form className="improve" onSubmit={() => {}}>
        <input name="description" placeholder="description" type="text" value={form.description} onChange={handleFormChange} />
        <input type="text" onChange={handleFormChange} value={form.description} />
        <input type="text" onChange={handleFormChange} value={form.description} />
        <input type="text" onChange={handleFormChange} value={form.description} />
      </form>
    ) : <button type="button" onClick={handleClick}>Improve This Listing</button>}
  </div>
);

ImproveListing.propTypes = {
  clicked: PropTypes.bool,
  form: PropTypes.shape({
    description: PropTypes.string,
    isOpen: PropTypes.bool,
    suggestedDuration: PropTypes.number,
    address: PropTypes.string,
  }),
  handleFormChange: PropTypes.func,
  handleClick: PropTypes.func,
};

ImproveListing.defaultProps = {
  clicked: false,
  form: {
    description: '',
  },
  handleFormChange: () => {},
  handleClick: () => {},
};

export default ImproveListing;
