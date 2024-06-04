/* eslint-disable react/prop-types */

const Header = ({ course }) => <h1>{course.name}</h1>

//  const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ course }) => <>{ course.parts.map( part =>
    <li key = { part.id } > { part.name } { part.exercises } </li>)} 
  </>

const Content = ({ course }) => <ul> <Part course = { course } /> </ul>

const Course = ({ course }) =>
  <> 
  <Header course= { course } />
  <Content course ={ course } />
  </>


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  return <Course course={course} />
}
export default App
