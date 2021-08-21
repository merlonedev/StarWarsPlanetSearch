import { createContext } from 'react';
const INITIAL_STATE = {
    planets: [],
}
const MyContext = createContext(INITIAL_STATE)

export default MyContext;