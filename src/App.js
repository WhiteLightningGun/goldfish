import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';
import {getNewExpirationTime } from './utilities';

export default function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: -2,
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: -1,
      text: "They'll be removed after 6 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);


  const addThought = (thought) => {
    
    setThoughts([thought, ...thoughts]);

  };

  function removeThought(thoughtIdToRemove) {
    setThoughts(thoughts => thoughts.filter((thought) => thought.id !== thoughtIdToRemove ));
  }

  return (
    <div className="App">
      <header>
        <h1>Goldfish Brain Simulator</h1>
        <p>Experience the 6 second memory of a Goldfish</p>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThoughtB={removeThought} />
          ))}
        </ul>
      </main>
    </div>
  );
}
