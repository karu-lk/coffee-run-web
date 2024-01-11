import React, { useEffect, useState } from 'react';
import './App.css';
import { getCoffeeTypes } from './App.service';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  interface ICoffeeTypes {
    title: string;
    description: string;
    ingredients: string[];
    image: string;
  }

  const [coffeeTypes, setCoffeeTypes] = useState<ICoffeeTypes[]>([]);

  useEffect(() => {
    getCoffeeTypesFromService();
  }, []);


  const getCoffeeTypesFromService = async () => {
    const coffeeTypes = await getCoffeeTypes();
    setCoffeeTypes(coffeeTypes);
  }


  return (
    <div className="App">
      <div className='header'>
        <p>COFFEE RUN</p>
      </div>
      <div className='coffee-types'>
        <Table striped bordered hover className='coffee-table'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Ingredients</th>
            </tr>
          </thead>
          <tbody>
            {
              coffeeTypes.map((c, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img style={{ width: 40, height: 40 }} src={c.image} alt=''></img>
                    </td>
                    <td>{c.title}</td>
                    <td>{c.description && c.description.substring(0, 100)}</td>
                    <td>{c.ingredients && c.ingredients.join(" | ")}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;
