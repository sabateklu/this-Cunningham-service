import React from 'react';
import axios from 'axios';
import Header from './Header';
import Overview from './Overview';
import Tickets from './Tickets';
import Images from './Images';

export default class Attraction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: null,
      likeHover: false,
    };
    this.updateHeartHover = this.updateHeartHover.bind(this);
  }

  componentDidMount() {
    axios.get('/api/showcase')
      .then(({ data }) => {
        this.setState({
          current: data[0],
        });
      }).catch((err) => console.log('error GETTING all', err));
  }

  updateHeartHover() {
    const { likeHover } = this.state;
    this.setState({
      likeHover: !likeHover,
    });
  }

  render() {
    const { current, likeHover } = this.state;
    return (
      <>
        {current ? (
          <div className="attraction">
            <Header
              current={current}
              updateHeartHover={this.updateHeartHover}
              likeHover={likeHover}
            />
            <Overview overview={current.overview} />
            <Tickets current={current} />
            <Images images={current.imageUrl} />
          </div>
        ) : <div className="loading">Loading...</div>}
      </>
    );
  }
}
