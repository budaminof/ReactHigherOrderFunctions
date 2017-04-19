import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h2>Home Sweet Home</h2>
        {this.props.children}
      </div>
    );
  }
}

// {this.props.children} => tells App to render any child component that is being handed by react router.
