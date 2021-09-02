import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';

const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default class Provider extends Component {
  constructor() {
    super();
    this.state = {
      filters: {},
      planets: '',
    };
    this.fetchAPI = this.fetchAPI.bind(this);
  }

  async fetchAPI() {
    try {
      const response = await fetch(endPoint);
      const data = await response.json();
      this.setState({ planets: data });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { children } = this.props;
    return (
      <Context.Provider
        value={ {
          ...this.state,
          getPlanets: this.fetchAPI,
        } }
      >
        { children }
      </Context.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.any,
}.isRequired;
