import React from 'react';
import PropTypes from 'prop-types';
import css from '../styles/improveListing.module.css';

const ImproveListing = ({
  clicked, form, handleFormChange, handleClick,
}) => (
  <div className={css.improveListing}>
    {clicked ? (
      <>
        <form className={css.improveForm} onSubmit={() => {}}>
          <input name="description" placeholder="description" type="text" value={form.description} onChange={handleFormChange} />
          <label htmlFor="duration">
            How long will it take to experience this attraction?
            <input type="number" id="duration" name="suggestedDuration" min="1" max="240" value={form.suggestedDuration} onChange={handleFormChange} />
            {form.suggestedDuration > 24 ? ` (${(form.suggestedDuration / 24).toFixed(1)} days)` : ' hours' }
          </label>
          <label htmlFor="open">
            <input name="isOpen" type="radio" onChange={handleFormChange} value id="open" />
            Open
          </label>
          <label htmlFor="closed">
            <input name="isOpen" type="radio" onChange={handleFormChange} value="false" id="closed" />
            Closed
          </label>
          <input name="address" type="text" onChange={handleFormChange} value={form.address} />
          <button type="submit">Submit</button>
        </form>
        <button type="button" onClick={handleClick}>Close</button>
      </>
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
