import React from 'react';
import PropTypes from 'prop-types';
import MyContext from './context';

class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
    };
  }

  render() {
    const { children } = this.props;
    const planetsStore = { ...this.state };
    return (
      <MyContext.Provider value={ planetsStore }>
        { children }
      </MyContext.Provider>
    );
  }
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
