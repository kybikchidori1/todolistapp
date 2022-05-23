import React, { useState } from "react";
import { v1 as uuid, v1 } from "uuid";

function AddTodo({ todo, setTodo }) {
  const [value, setValue] = useState("");
  function saveTodo() {
    setTodo([
      ...todo,
      {
        id: v1(),
        title: value,
        status: true,
      },
    ]);
    setValue("");
  }

  console.log(todo);

  return (
    <div>
      <input
        placeholder="Введите задачу"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={saveTodo}>Сохранить</button>
    </div>
  );
}

export default AddTodo;
