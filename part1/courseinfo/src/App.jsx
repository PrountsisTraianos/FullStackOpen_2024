const Header = ({heading}) =>{
  return (
  <div>
    <h1> {heading} </h1>
  </div> )
}

const Part = (part) =>{
  return(
    <div>
      <p> {part.part} {part.exercises}</p>
    </div>
  )
}

const Content = (content) =>{
  return(
    <div>
       <Part part = {content.part1} exercises = {content.exercises1} />
       <Part part = {content.part2} exercises = {content.exercises2} />
       <Part part = {content.part3} exercises = {content.exercises3} />
    </div>
  )
}

const Total = (total) => {
  return (
    <div>
      <p>Number of exercises {total.exercises1 + total.exercises2 + total.exercises3}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>

      <Header heading = {course} />
      
      <Content part1 ={part1.name} exercises1 = {part1.exercises} 
       part2 ={part2.name} ex2 = {part2.exercises}
       part3 ={part3.name} ex3 = {part3.exercises} />
       
       <Total exercises1 ={part1.exercises}
       exercises2 ={part2.exercises}
       exercises3 ={part3.exercises} />
    
    </div>
  )
}
export default App