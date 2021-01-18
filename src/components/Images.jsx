import React from 'react';
import PropTypes from 'prop-types';

export default class Images extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { images, travelersChoice } = this.props;
    return (
      <div className="images">
        {travelersChoice ? <div className="award">Award</div> : null}
        <div className="overlay">
          <button type="button" className="next">{'>'}</button>
          <button type="button" className="prev">{'<'}</button>
        </div>
        <img src={images[0]} alt="" className="image" />
      </div>
    );
  }
}

Images.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  travelersChoice: PropTypes.bool.isRequired,
};
