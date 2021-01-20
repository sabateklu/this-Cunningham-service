import React from 'react';
import PropTypes from 'prop-types';
import { FaRegHeart } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';
import css from '../styles/header.module.css';

const Header = ({ current, updateHeartHover, likeHover }) => (
  <div className={css.header}>
    <h3 className={css['header-lg']}>{current.attractionTitle}</h3>
    <div className={css['reviews-like']}>
      <p className={css.reviews}>{current.reviews} Reviews </p>
      <FaRegHeart className="icon" color={likeHover ? 'red' : 'black'} size={20} onMouseEnter={updateHeartHover} onMouseLeave={updateHeartHover} />
    </div>
    <div className={css['ranking-share']}>
      <p className={css.ranking}>
        #{current.relativeRanking[0]} of {current.relativeRanking[1]} things to do in {current.city}
      </p>
      <FiShare size={25} />
    </div>
    <p className={css.type}>{current.attractionType}</p>
  </div>
);

Header.propTypes = {
  current: PropTypes.shape({
    attractionTitle: PropTypes.string,
    reviews: PropTypes.number,
    relativeRanking: PropTypes.arrayOf(PropTypes.number),
    city: PropTypes.string,
    attractionType: PropTypes.string,
  }).isRequired,
  updateHeartHover: PropTypes.func,
  likeHover: PropTypes.bool,
};

Header.defaultProps = {
  updateHeartHover: () => {},
  likeHover: false,
};
export default Header;
