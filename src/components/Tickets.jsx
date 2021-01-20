import React from 'react';
import PropTypes from 'prop-types';
import css from '../styles/tickets.module.css';

const Tickets = ({ current }) => (
  <div className={css.tickets}>
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
