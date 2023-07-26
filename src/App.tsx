import "./reset.css";
import "./App.css";
import { useState } from "react";
import PaintWorkingTodo from "./components/PaintWorkingTodo";
import PaintDoneTodo from "./components/PaintDoneTodo";
import AddTodo from "./components/AddTodo";
import { Todo } from "./types";
import React from "react";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(() =>
    JSON.parse(window.localStorage.getItem("todos") || "[]")
  );

  window.localStorage.setItem("todos", JSON.stringify(todos));

  //Todo 삭제하기
  const deleteBtnHandler = (id: string) => {
    const deletedTodoList = todos.filter((todo: Todo) => id !== todo.id);
    setTodos(deletedTodoList);
  };

  //Todo 상태 완료하기 (1)
  const finishBtnHandler = (todo: Todo) => {
    setTodos((prev: Todo[]) => {
      const finishedTodos = prev.map((item: Todo) => {
        if (item.id === todo.id) {
          return {
            ...todo,
            isDone: true,
          };
        }
        return item;
      });
      return finishedTodos;
    });
  };

  //Todo 상태 취소하기 (1)
  const cancleBtnHandler = (todo: Todo) => {
    setTodos((prev: Todo[]) => {
      const canceledTodos = prev.map((item: Todo) => {
        if (todo.id === item.id) {
          return {
            ...todo,
            isDone: false,
          };
        }
        return item;
      });
      return canceledTodos;
    });
  };

  return (
    <div className="container">
      <header className="header">
        <span>My Todo List</span>
        <span>React</span>
      </header>

      <AddTodo todos={todos} setTodos={setTodos} />

      <div className="todo-container">
        <h2>Working🔥</h2>
        <div className="card-container">
          {todos
            .filter((todo) => todo.isDone !== true)
            .map((item) => {
              return (
                <PaintWorkingTodo
                  item={item}
                  finishBtnHandler={finishBtnHandler}
                  deleteBtnHandler={deleteBtnHandler}
                />
              );
            })}
        </div>
      </div>

      <div className="todo-container">
        <h2>Done🎉</h2>
        <div className="card-container">
          {todos
            .filter((todo) => todo.isDone !== false)
            .map((item) => {
              return (
                <PaintDoneTodo
                  item={item}
                  cancleBtnHandler={cancleBtnHandler}
                  deleteBtnHandler={deleteBtnHandler}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default App;
