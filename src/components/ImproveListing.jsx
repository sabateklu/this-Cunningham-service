import React from 'react';

const ImproveListing = ({ clicked }) => (
  <div className="improveListing">
    {clicked ? (
      <form className="improve" onSubmit={() => {}}>
        <input type="text" />
      </form>
    ) : 'Improve This Listing'}
  </div>
);

export default ImproveListing;
