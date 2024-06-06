/*eslint-disable react/prop-types */ 


const Entry = ({person,handleDeleteID}) => <p> {person.name} {person.number} <button value={person.id} onClick={handleDeleteID}>delete</button> </p>
const People =({filter, people,handleDeleteID }) => <div>{mapPerson(filter, people, handleDeleteID )}</div>

const mapPerson = (filter,people, handleDeleteID ) =>
  people.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())).map((person) =>
    <Entry key={person.name} person ={person} handleDeleteID={handleDeleteID} />)

export default People