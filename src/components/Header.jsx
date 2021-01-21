import React from 'react';
import PropTypes from 'prop-types';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';
import css from '../styles/header.module.css';

const Header = ({
  current, updateHeartHover, likeHover, updateLikeStatus,
}) => (
  <div className={css.header}>
    <h1 className={css['header-lg']}>{current.attractionTitle}</h1>
    <div className={css['reviews-like']}>
      <p className={css.reviews}>{current.reviews} Reviews </p>
      <div className={css.icon}>
        {current.likedStatus ? (
          <FaHeart color="red" size={20} onClick={() => updateLikeStatus(current._id)} onMouseEnter={updateHeartHover} onMouseLeave={updateHeartHover} />/* eslint-disable-line no-underscore-dangle */
        ) : <FaRegHeart color={likeHover ? 'red' : 'black'} size={20} onMouseEnter={updateHeartHover} onMouseLeave={updateHeartHover} onClick={() => updateLikeStatus(current._id)} /> /* eslint-disable-line no-underscore-dangle */}
      </div>
    </div>
    <div className={css['ranking-share']}>
      <p className={css.ranking}>
        #{current.relativeRanking[0]} of {current.relativeRanking[1]} things to do in {current.city}
      </p>
      <FiShare size={20} />
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
    _id: PropTypes.string,
    likedStatus: PropTypes.bool,
  }).isRequired,
  updateHeartHover: PropTypes.func,
  likeHover: PropTypes.bool,
  updateLikeStatus: PropTypes.func,
};

Header.defaultProps = {
  updateHeartHover: () => {},
  updateLikeStatus: () => {},
  likeHover: false,
};
export default Header;
