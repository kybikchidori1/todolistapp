import React, { useState } from "react";
import { v1 } from "uuid";
import { Row, Col, Button, FormControl } from "react-bootstrap";
import s from "./AddTodo.module.css";

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
    <Row>
      <Col className={s.addTodoForm}>
        <FormControl
          placeholder="Введите задачу"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={saveTodo} className={s.btn}>
          Сохранить
        </Button>
      </Col>
    </Row>
  );
}

export default AddTodo;
