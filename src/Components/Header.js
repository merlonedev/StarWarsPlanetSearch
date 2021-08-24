import React from 'react';
import MyContext from '../Context';
import Table from './Table';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      headers: [],
    };
    this.fetchAPIStar = this.fetchAPIStar.bind(this);
  }

  componentDidMount() {
    this.fetchAPIStar();
  }

  async fetchAPIStar() {
    const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(END_POINT);
    const result = await response.json();
    const headerFilter = Object.keys(result.results[0]);
    return this.setState({
      data: result.results,
      headers: headerFilter.filter((el) => !el.includes('residents')),
    });
  }

  render() {
    const { data, headers } = this.state;
    const contextValue = {
      dataS: data,
    };
    return (
      <MyContext.Provider value={ contextValue }>
        <table>
          <thead>
            <tr>
              {
                headers.map((el) => <th key={ el }>{el}</th>)
              }
            </tr>
          </thead>
          <Table />
        </table>
      </MyContext.Provider>
    );
  }
}

export default Header;
