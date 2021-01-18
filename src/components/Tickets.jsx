import React from 'react';

const Tickets = ({ current }) => (
  <div className="tickets">
    <h3 className="ticket-header">
      {current.attractionTitle} Entrance Tickets
    </h3>
    <span className="ticket-price">from ${current.ticketPrice}</span>
    <button className="get-tix-btn" type="button">Check Availability</button>
  </div>
);

export default Tickets;
