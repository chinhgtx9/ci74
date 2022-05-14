import React from 'react';
import { Button, Table, Container } from 'reactstrap';

export default function Students ({id, name, age, math,english, history, mediumScore}){
    return (
        <tr>
        <th scope="row">
          {id}
        </th>
        <td>
            {name}
        </td>
        <td>
             {age}
        </td>
        <td>
            {math}
        </td>
        <td>
            {english}
        </td>
        <td>
            {history}
        </td>
        <td>
            {mediumScore}
        </td>
        <td>
          <Button color="success">Update</Button>
          <Button color="danger">Update</Button>
        </td>
      </tr>
    )
}