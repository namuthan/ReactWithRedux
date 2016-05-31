import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Home</h1>
        <p> This is the Home page </p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more </Link>
      </div>
    );
  }
}


export default HomePage;
