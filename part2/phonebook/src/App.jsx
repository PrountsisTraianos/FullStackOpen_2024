/* eslint-disable react/prop-types */
import { useState } from 'react'

const Number = ({person}) => <p> {person.name} </p>

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  
  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName
    }
    const isNameIncluded = persons.some(person => person.name === personObject.name)    
    
    if (isNameIncluded) {
      alert(`${personObject.name} is already added to phonebook`)
      return
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  } 

  const handleNameChange = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  }
  
  const mapPerson = persons.map((person) => <Number key={person.name} person ={person}/>)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value ={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{mapPerson}</div>
    </div>
  )
}

export default App