import { useState } from "react";
import "./App.css";
import React from "react";

import Button from "@material-ui/core/Button";
import { FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";

function App() {
  const [todos, seTodos] = useState([]);

  const [input, setinput] = useState("");
  console.log(input);

  const addTodo = (event) => {
    event.preventDefault();
    console.log("i am saif");
    seTodos([...todos, input]);
    setinput("");
  };

  return (
    <div className="App">
      <h1>HELLO Clever programmer </h1>
      <h2>testing git second push</h2>

      <FormControl>
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
        <InputLabel>Write a To Do</InputLabel>
        <Input
          value={input}
          onChange={(Event) => setinput(Event.target.value)}
        ></Input>
        <br></br>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add to do
        </Button>

        <ul>
          {todos.map((todo) => (
            <Todo text={todo}></Todo>
            //<li>{todo}</li>
          ))}
        </ul>
      </FormControl>
    </div>
  );
}

export default App;
