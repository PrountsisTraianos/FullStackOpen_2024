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
      {/* <p> {content.part1} {content.exercises1}  </p>
      <p> {content.part2} {content.exercises2}  </p>
      <p> {content.part3} {content.exercises3}  </p>
       */}
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      {/* <h1>{course}</h1> */}

      <Header heading = {course} />
     
      {/* <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p> */}

       <Content part1 ={part1} exercises1 = {exercises1} 
       part2 ={part2} ex2 = {exercises2}
       part3 ={part3} ex3 = {exercises3} />

      {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
    
    <Total exercises1 ={exercises1}
     exercises2 ={exercises2}
     exercises3 ={exercises3} />
    
    </div>
  )
}

export default App