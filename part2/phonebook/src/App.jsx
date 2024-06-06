/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'

import Header from './components/Header'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import People from './components/People'
import personServices from './services/person'


const App = () => {  
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')
  
  useEffect( ()=> {
    personServices
    .getAll()
    .then(response => setPersons(response.data))
  },[])

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
    personServices
    .create(personObject)
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
  const handleDeleteID = (event) =>{
    // can't delete unless you reload 
    event.preventDefault();
    const deleteID = event.target.value
    const toDeletePerson = persons.find(p => p.id === deleteID)  
    // console.log(toDeletePerson.name);
    
    if(window.confirm(`Delete ${toDeletePerson.name}?` )){
    
      personServices.deleteEntryBy(deleteID)
      setPersons(persons.filter( p => p.id !== deleteID ))
  } 
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
      
      <People filter = {filter} people = {persons}  handleDeleteID={handleDeleteID} />

    </div>
  )
}

export default App