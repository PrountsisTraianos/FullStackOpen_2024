/* eslint-disable react/prop-types */
import { useState } from 'react'

const Header = ({title}) => <h2> {title} </h2>

const Number = ({person}) => <p> {person.name} {person.number} </p>

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
  
  const mapPerson = (filter) =>
     persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())).map((person) =>
       <Number key={person.name} person ={person}/>)

  return (
    <div>
      <Header title={"Phonebook"} />
      <div>
        filter shown with <input value ={filter} onChange={handleFilterChange} />
      </div>
      <Header title={"add a new"} />
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
      <Header title={"Numbers"} />
      <div>{mapPerson(filter)}</div>
    </div>
  )
}

export default App