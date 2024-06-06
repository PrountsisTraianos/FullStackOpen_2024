/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from './components/Header'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import People from './components/People'

const App = () => {


  useEffect(() => {
    axios
      .get(baseURL)
      .then(response =>{
        setPersons(response.data)
      })
  },[] )  


  const baseURL = 'http://localhost:3001/persons'
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')
  
  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName, 
      number: newNumber
    }
    const isNameIncluded = persons.some(person => person.name === personObject.name)    

    if (isNameIncluded) {
      alert(`${personObject.name} is already added to phonebook`)
      return
    }
    axios
      .post(baseURL, personObject)
      .then(response => {
        console.log(response)
      })

      
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  } 

  const handleNumberChange = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  }
  
  const handleNameChange = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  }
  
  const handleFilterChange = (event) => {
    event.preventDefault();
    setNewFilter(event.target.value);
  }
  
  return (
    <div>
      <Header title={"Phonebook"} />
      
      <Filter filter ={filter} handleFilterChange={handleFilterChange} />
      
      <Header title={"add a new"} />

      <PersonForm addPerson={addPerson} 
      newName={newName} handleNameChange={handleNameChange} 
      newNumber={newNumber} handleNumberChange={handleNumberChange} 
      />

      <Header title={"Numbers"} />
      
      <People filter = {filter} people = {persons} />

    </div>
  )
}
export default App
