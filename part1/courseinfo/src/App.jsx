const Header = ({props}) =>{
  return (
  <div>
    <h1> {props} </h1>
  </div> )
}

const Content = ({part1,ex1,part2,ex2,part3,ex3}) =>{
  return(
    <div>
      <p> {part1} {ex1}  </p>
      <p> {part2} {ex2}  </p>
      <p> {part3} {ex3}  </p>
    </div>
  )
}

const Total = ({ex1, ex2, ex3}) => {
  return (
    <div>
      <p> Number of exercises {ex1 + ex2 + ex3}</p>
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

      <Header props = {course} />
     
      {/* <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p> */}

       <Content part1 ={part1} ex1 = {exercises1} 
       part2 ={part2} ex2 = {exercises2}
       part3 ={part3} ex3 = {exercises3} />

      {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
    
    <Total 
    ex1 ={exercises1}
    ex2 ={exercises2}
    ex3 ={exercises3} />
    
    </div>
  )
}

export default App