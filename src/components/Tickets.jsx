import React from 'react';
import PropTypes from 'prop-types';

const Tickets = ({ current }) => (
  <div className="tickets">
    <h3 className="ticket-header">
      {current.attractionTitle} Entrance Tickets
    </h3>
    <span className="ticket-price">from ${current.ticketPrice}</span>
    <button className="get-tix-btn" type="button">Check Availability</button>
  </div>
);

Tickets.propTypes = {
  current: PropTypes.shape({
    attractionTitle: PropTypes.string,
    ticketPrice: PropTypes.number,
  }),
};

Tickets.defaultProps = {
  current: {
    attractionTitle: 'There are no',
    ticketPrice: 0,
  },
};
export default Tickets;
