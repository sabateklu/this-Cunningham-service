import React from 'react';
import PropTypes from 'prop-types';

export default class Images extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      attractionImages: [],
      displayedImage: '',
      index: 0,
    };
    this.changeImage = this.changeImage.bind(this);
  }

  componentDidMount() {
    const { images } = this.props;
    const sliced = images.slice();
    this.setState({
      attractionImages: sliced,
      displayedImage: sliced[0],
    });
  }

  changeImage(direction) {
    const { index, attractionImages } = this.state;
    if (direction === 'next') {
      if (attractionImages[index + 1] === undefined) {
        return;
      }
      this.setState({
        displayedImage: attractionImages[index + 1],
        index: index + 1,
      });
    }
    if (direction === 'prev') {
      if (attractionImages[index - 1] === undefined) {
        return;
      }
      this.setState({
        displayedImage: attractionImages[index - 1],
        index: index - 1,
      });
    }
  }

  render() {
    const { travelersChoice, images } = this.props;
    const { displayedImage } = this.state;
    return (
      <div className="images">
        {travelersChoice ? <div className="award">Award</div> : null}
        {images.length ? (
          <div className="overlay">
            <button type="button" className="next" onClick={() => this.changeImage('next')}>{'>'}</button>
            <button type="button" className="prev" onClick={() => this.changeImage('prev')}>{'<'}</button>
          </div>
        ) : null}
        <img src={displayedImage} alt="" className="image" />
      </div>
    );
  }
}

Images.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  travelersChoice: PropTypes.bool.isRequired,
};
