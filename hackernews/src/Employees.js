import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


const employees = [
  {
    firstName: 'Paul',
    lastName: 'Walker',
    email: 'walker@gmail.com',
    cell: 27654321421,
    address: 'Blue Str',
    objectID: 0,
  },

  {
    firstName: 'David',
    lastName: 'Black',
    email: 'black@gmail.com',
    cell: 27898933521,
    address: 'Tree Str',
    objectID: 1,
  },

  {
    firstName: 'Chris',
    lastName: 'Red',
    email: 'red@gmail.com',
    cell: 27333445691,
    address: 'walker Str',
    objectID: 2,
  },

  {
    firstName: 'Browny',
    lastName: 'Blake',
    email: 'browny@gmail.com',
    cell: 27675435618,
    address: 'Pink Str',
    objectID: 3,
  },

  {
    firstName: 'David',
    lastName: 'Black',
    email: 'black@gmail.com',
    cell: 27787954633,
    address: 'Water Str',
    objectID: 4,
  },
];


class Employees extends Component {


  constructor(props) {
    super(props);

    this.state = {
        employees,
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.employees.filter(isNotId);
    this.setState({ employees: updatedList });
  }

  render() {
    return (
      <div className="myEmployees">
        {this.state.employees.map(item =>
          <div key={item.objectID}>
            <span>{item.firstName}</span>
            <span>{item.lastName}</span>
            <span>{item.email}</span>
            <span>{item.cell}</span>
            <span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button"
              >Dismiss</button>
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default Employees;