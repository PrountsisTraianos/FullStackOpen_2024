/* eslint-disable react/prop-types */

import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({handleClick, text}) => <button onClick = {handleClick} > {text}  </button>

const Anecdote = ({anecdote}) =><div><h2>{anecdote}</h2></div>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [voted, setVoted ] = useState(Array(anecdotes.length).fill(0))

  const nextAnecdote = () => setSelected(Math.floor(Math.random()*(anecdotes.length)))
  
  const voteAnecdote = () => {
    const copy = [...voted]
    copy[selected] += 1 
    setVoted(copy)
  }
  let mostVoted = voted.indexOf( Math.max(...voted))

  return (
    
    <div>
      <Header text = {"Anecdote of the Day"} />
      <div>
      <Anecdote anecdote = {anecdotes[selected]} />
      <Button handleClick={voteAnecdote} text ={ "Vote"} />
      <Button handleClick = {nextAnecdote} text = {"next anecdote"} />
      </div>
      <Header text = {"Anecdote with the most Votes"} />
      <div>
        <Anecdote anecdote={anecdotes[mostVoted]}/>
      </div>
    </div>
  )
}

export default App