import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

const Table = () => {
    const {planets} = useContext(MyContext)
return (
    <table>
        <thead>
            <tr>
                
            </tr>
        </thead>
        <tbody>
        {planets.map((planet, index) => {
            return (
                <tr key={index}>
                    <td>{planet.name}</td>
                    <td>{planet.rotation_period}</td>
                    <td>{planet.orbital_period}</td>
                    <td>{planet.diameter}</td>
                    <td>{planet.climate}</td>
                    <td>{planet.gravity}</td>
                    <td>{planet.terrain}</td>
                    <td>{planet.surface_water}</td>
                    <td>{planet.population}</td>
                </tr>
            )}) 
        }
    </tbody>
    </table>
)
}

export default Table;