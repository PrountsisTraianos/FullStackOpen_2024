/* eslint-disable react/prop-types */
import { useState } from 'react'

const Number = ({person}) => <p> {person.name} {person.number} </p>

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { number: '040-1234567'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName, 
      number: newNumber
    }
    const isNameIncluded = persons.some(person => person.name === personObject.name)    
    console.log( persons.some(person => person.name ===personObject.name));
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
  
  const mapPerson = persons.map((person) => <Number key={person.name} person ={person}/>)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value ={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value ={newNumber} onChange={handleNumberChange} />
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