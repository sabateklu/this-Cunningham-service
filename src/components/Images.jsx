import React from 'react';
import PropTypes from 'prop-types';

export default class Images extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { images } = this.props;
    return (
      <div className="images">
        <img src={images[0]} alt="" />
      </div>
    );
  }
}

Images.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
