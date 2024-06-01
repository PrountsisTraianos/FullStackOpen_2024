const Header = (header) =>{
  return (
  <div>
    <h1> {header.course} </h1>
  </div> )
}

const Part = (prop) =>{
  return(
    <div>
      <p> {prop.part.name} {prop.part.exercises}</p>
    </div>
  )
}

const Content = (content) =>{
  return(
    <div>
       <Part part = {content.parts[0]} />
       <Part part = {content.parts[1]} />
       <Part part = {content.parts[2]} />
    </div>
  )
}

const Total = (total) => {
  return (
    <div>
      <p>Number of exercises {total.parts[0].exercises + total.parts[1].exercises + total.parts[2].exercises}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  )
}
export default App