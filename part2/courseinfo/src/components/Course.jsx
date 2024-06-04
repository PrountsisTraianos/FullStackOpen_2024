
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

export default Course 