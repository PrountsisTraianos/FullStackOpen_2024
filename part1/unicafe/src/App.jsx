/* eslint-disable react/prop-types */
 import { useState } from 'react' 

 const Header = ({text}) => <h1> {text} </h1>

const Button = (props) => <button onClick={props.handleClick} >{props.text}</button>

const StatisticLine = ({text, value}) => <tr><td>{text} </td><td>{value} </td></tr>

const Statistics = ({good, neutral, bad}) =>{

  let total = good+neutral+bad
  let average = (good*1 + neutral*0 + bad*-1)/total
  let positive = good*100/total

  if (total === 0 ) 
  { 
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return(
      <table>
      <StatisticLine text={"good"} value={good} />
      <StatisticLine text={"neutral"} value={neutral} />
      <StatisticLine text={"bad"} value={bad} />
      <StatisticLine text={"total"} value={total} />
      <StatisticLine text={"average"} value={average} />
      <StatisticLine text={"positive"} value={positive + '% '} />
      </table>
  )
}

 const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () =>{ setGood(good + 1)}

  const handleNeutralClick = () =>{ setNeutral(neutral + 1)}
   
  const handleBadClick = () =>{ setBad(bad + 1) } 
  
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