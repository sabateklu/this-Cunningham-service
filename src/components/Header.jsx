import React from 'react';
import PropTypes from 'prop-types';
import { FaRegHeart } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';

const Header = ({ current }) => (
  <div className="header">
    <h3 className="header-lg">{current.attractionTitle}</h3>
    <div className="reviews-like">
      <p className="reviews">{current.reviews} Reviews </p>
      <FaRegHeart color="black" size={20} />
    </div>
    <div className="ranking-share">
      <p className="ranking">
        #{current.relativeRanking[0]} of {current.relativeRanking[1]} things to do in {current.city}
      </p>
      <FiShare size={25} />
    </div>
    <p className="type">{current.attractionType}</p>
  </div>
);
// Header.defaultProps = {
//   current: 'Loading Header',
// };

Header.propTypes = {
  current: PropTypes.shape({
    attractionTitle: PropTypes.string,
    reviews: PropTypes.number,
    relativeRanking: PropTypes.arrayOf(PropTypes.number),
    city: PropTypes.string,
    attractionType: PropTypes.string,
  }).isRequired,
};
export default Header;
