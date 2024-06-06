/*eslint-disable react/prop-types */ 


const Entry = ({person}) => <p> {person.name} {person.number} </p>
const People =({filter, people}) => <div>{mapPerson(filter, people)}</div>

const mapPerson = (filter,people ) =>
  people.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())).map((person) =>
    <Entry key={person.name} person ={person}/>)


export default People