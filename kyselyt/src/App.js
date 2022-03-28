import React, { useState, useEffect } from 'react';
import './App.css';
import {
  useQuery,
  gql,
} from "@apollo/client";

function App() {
  const GET_JOBS = gql`
    query GetJobs {
      countries {
        code, 
        name,
        }
      }
  `;

  const { loading, error, data } = useQuery(GET_JOBS);

  if (loading) return <p>Loading...</p>;
  else if (error) return <p>Error...</p>
  else {
    return (
      <div className="App">
        <table>
          <th>Code</th>
          <th>Country</th>
          <th>Continent</th>
          <tbody>
            {
              data.countries.map((country, index) => 
                <tr key={index}>
                  <td>{country.code}</td>
                  <td>{country.name}</td>
                  <td>{country.continent}</td>

                  
                </tr>
              )
             }
          </tbody>
         </table>
      </div>
    );
  }
}

export default App;