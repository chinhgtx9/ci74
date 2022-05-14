import React from 'react';
import { useState } from 'react';
import Students from './students';
import { Button, Table, } from 'reactstrap';

const App = () => {
  const [listStudents, setListStudents ] = useState([
    {
      id: 1,
      name: 'Nguyen Van A',
      age: 36,
      math :8,
      english: 8, 
      history : 8,
      mediumScore: 8,
    },
    {
      id: 2,
      name: 'Nguyen Van B',
      age: 35,
      math :7,
      english: 7, 
      history : 7,
      mediumScore: 7,
    }
  ]) 
  return (
    <Table
    >
      <thead>
        <tr>
          <th>
            #ID
          </th>
          <th>
            Name
          </th>
          <th>
            Age
          </th>
          <th>
            Math
          </th>
          <th>
            English
          </th>
          <th>
            History
          </th>
          <th>
            Medium Score
          </th>
          <th>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {
          listStudents.map((e,i) =>{
            return (
              <Students
                key = {i}
                id = {e.id}
                name = {e.name}
                age = {e.age}
                math = {e.math}
                english = {e.english}
                history = {e.history}
              />
            )
          })
        }
  
        
      </tbody>
    </Table>
  )
}

export default App;
