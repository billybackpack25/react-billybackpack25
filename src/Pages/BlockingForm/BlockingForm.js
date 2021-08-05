import { useState } from "react";
import { Prompt } from "react-router-dom";

// This page will block the user from changing pages if there is data in the form
export default function BlockingForm() {
    let [isBlocking, setIsBlocking] = useState(false);
    const [input, setInput] = useState('');
  
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          event.target.reset();
          setIsBlocking(false);
          setInput('');
        }}
      >
        <Prompt
          when={isBlocking}
          message={location => 
                `Are you sure you want to go to ${location.pathname}`
          }
        />
  
        <p>
          Blocking?{" "}
          {isBlocking ? "Yes, click a link or the back button" : "Nope"}
        </p>
  
        <p>
          <input
            value={input}
            size="50"
            placeholder="type something to block transitions"
            onChange={event => {
              setIsBlocking(event.target.value.length > 0);
              setInput(event.target.value);
            }}
          />
        </p>
  
        <p>
          <button>Submit to stop blocking</button>
        </p>
      </form>
    );
}