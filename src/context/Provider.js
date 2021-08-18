import React from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';

function MyProvider({ children }) {
//  const [user, setUser] = useState('');
//  const [email, setEmail] = useState('');
  const contextUserValue = {
    // user,
    // setUser,
    // email,
    // setEmail,
  };

  return (
    <MyContext.Provider value={ contextUserValue }>
      { children }
    </MyContext.Provider>
  );
}
MyProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default MyProvider;
