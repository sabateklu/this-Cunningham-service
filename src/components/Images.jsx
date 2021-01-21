import React from 'react';
import PropTypes from 'prop-types';
import css from '../styles/images.module.css';

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
      <div className={css.images}>
        {travelersChoice ? <img className={css.award} src="http://www.tripadvisor.com/img/cdsi/img2/awards/TC_2019_downloadable_L_R-40840-5.jpg" alt="Trip advisor award logo" /> : null}
        {images.length > 1 ? (
          <div className={css.overlay}>
            <button type="button" className={css.next} onClick={() => this.changeImage('next')}>{'>'}</button>
            <button type="button" className={css.prev} onClick={() => this.changeImage('prev')}>{'<'}</button>
          </div>
        ) : null}
        <img src={displayedImage} alt="" className={css.image} />
      </div>
    );
  }
}

Images.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  travelersChoice: PropTypes.bool.isRequired,
};
