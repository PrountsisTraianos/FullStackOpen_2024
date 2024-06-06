/* eslint-disable react/prop-types */
import { useState } from 'react'
import Header from './components/Header'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import People from './components/People'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

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