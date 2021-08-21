import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { children } = this.props;
    const contextValue = { ...this.state };
    return (
      <StarwarsContext.Provider value={ contextValue }>
        { children }
      </StarwarsContext.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
export default Provider;
