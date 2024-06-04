/* eslint-disable react/prop-types */

const Header = ({ course }) => <h1>{course.name}</h1>

const Total = ({ course }) => 
{
  let total = course.parts.reduce((summedPart, currentPart ) => {return summedPart + currentPart.exercises},0) 
  // console.log("sum", total);

  return(
    <p>Number of exercises {total}</p>
  )
}

const Part = ({ course }) => <>{ course.parts.map( part =>
    <li key = { part.id } > { part.name } { part.exercises } </li>)} 
  </>

const Content = ({ course }) => <ul> <Part course = { course } /> </ul>

const Course = ({ course }) =>
  <> 
  <Header course= { course } />
  <Content course ={ course } />
  <Total course = { course } />
  </>


const App = () => {
    const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
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
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]
    let mappedCourses = courses.map( (course, key) => <Course key = {key} course = {course}/>)   
  //  console.log(mappedCourses); 
    return mappedCourses

}
export default App
