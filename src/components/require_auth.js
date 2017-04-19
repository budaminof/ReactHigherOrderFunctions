import React, { Component } from 'react';
import { connect } from 'react-redux';

// this is skeleton of basically every HOC
export default function(ComposedComponent) {
  class Authentication extends Component {
    // static creates a property on the actuall class, no the instance, so I can call Authentication.contextTypes before instanciating the class.
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      // before the compoentent updates with new props we pass in the next-props for it to look at and decide what we are going to do.
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent { ...this.props } />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.authenticated }
  }
  return connect(mapStateToProps)(Authentication);
}
