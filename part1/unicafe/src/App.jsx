/* eslint-disable react/prop-types */
 import { useState } from 'react'

 const Header = ({text}) => {
  return(
    <div>
      <h1> {text} </h1>
    </div>
  )
 }
const Button = (props) => {
  return (
  <div>
    <button onClick={props.handleClick} >
      {props.text}
    </button>
  </div>
  )
}

const Statistics = ({good, neutral, bad}) =>{
  return(
    <div>
      <p>good:{good}</p>
      <p>good:{neutral}</p>
      <p>good:{bad}</p>
    </div>
  )
}

 const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () =>{
    return (
      setGood(good + 1)
    )
  } 
  const handleNeutralClick = () =>{
    return (
      setNeutral(neutral + 1)
    )
  } 
  const handleBadClick = () =>{
    return (
      setBad(bad + 1)
    )
  } 
  
  // console.log('good clicks', good )
  // console.log('neutral clicks', neutral )
  // console.log('bad clicks', bad )

  return (
  <div>
    <Header text = {'give feedback'}  />
    <div>
      <Button handleClick = {handleGoodClick} text = {'good'} />
      <Button handleClick = {handleNeutralClick} text = {'neutral'} />
      <Button handleClick = {handleBadClick} text = {'bad'} />
    </div>
    <Header text = {'Statistics'}  />
    <Statistics good={good} neutral={neutral} bad={bad}  />
 
  </div>
  )
}

export default App