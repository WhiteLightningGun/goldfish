import React, {useEffect, useState} from 'react';

export function Thought(props) {
    const { thought, removeThoughtB } = props;
    const [timer, setTime] = useState(thought.expiresAt - Date.now());
    
    useEffect(() => {
        const timeRemaining = thought.expiresAt - Date.now();

        setTimeout(() => { setTime((timeRemaining) - 1000) }, 1000); // - 1000 corrects for the fact it takes 1000 ms for this to trigger

        const timeout = setTimeout(() => {
            removeThoughtB(thought.id); //activate it's own prop function assigned in App

        }, timeRemaining);

        return () => {
            clearTimeout(timeout);
        };
    }, [thought, timer, removeThoughtB]);

  const handleRemoveClick = () => {
    removeThoughtB(thought.id); //activate it's own prop function assigned in App
  };
    

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
          <div className="text">{thought.text} <br></br>({Math.round(timer/1000)} seconds remaining)</div>
    </li>
  );
}
