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
    };
  }

  componentDidMount() {
    axios.get('/api/showcase')
      .then(({ data }) => {
        this.setState({
          current: data[0],
        });
      }).catch((err) => console.log('error GETTING all', err));
  }

  render() {
    const { current } = this.state;
    return (
      <>
        {current ? (
          <div className="attraction">
            <Header current={current} />
            <Overview current={current} />
            <Tickets current={current} />
            <Images current={current} />
          </div>
        ) : <div className="loading">Loading...</div>}
      </>
    );
  }
}
