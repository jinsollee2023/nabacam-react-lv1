import "./reset.css";
import "./App.css";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "1", content: "1", isDone: true },
    { id: 2, title: "2", content: "2", isDone: true },
    { id: 3, title: "3", content: "3", isDone: false },
    { id: 4, title: "4", content: "4", isDone: false },
  ]);

  // useState는 비동기 함수이기 때문에 바로 확인을 위해서는 useEffect 메서드가 필요
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  //Todo 삭제하기
  const deleteBtnHandler = (id) => {
    const deletedTodoList = todos.filter((todos) => id !== todos.id);
    setTodos(deletedTodoList);
  };

  //Todo 상태 완료하기 (1)
  const finishBtnHandler = (todo) => {
    setTodos((prev) => {
      const finishedTodos = prev.map((item) => {
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
  const cancleBtnHandler = (todo) => {
    setTodos((prev) => {
      const canceledTodos = prev.map((item) => {
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
}

//working 섹션 그리기
const PaintWorkingTodo = ({ item, finishBtnHandler, deleteBtnHandler }) => {
  return (
    <div className="todo-card" key={item.id}>
      <div className="todo-card-content">
        <div className="text-container">
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
        <div className="btn-container">
          <button onClick={() => finishBtnHandler(item)}>완료</button>
          <button onClick={() => deleteBtnHandler(item.id)}>삭제하기</button>
        </div>
      </div>
    </div>
  );
};

//done 섹션 그리기
const PaintDoneTodo = ({ item, cancleBtnHandler, deleteBtnHandler }) => {
  return (
    <div className="todo-card" key={item.id}>
      <div className="todo-card-content">
        <div className="text-container">
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
        <div className="btn-container">
          <button onClick={() => cancleBtnHandler(item)}>취소</button>
          <button onClick={() => deleteBtnHandler(item.id)}>삭제하기</button>
        </div>
      </div>
    </div>
  );
};

//todo 추가하기
const AddTodo = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //todo 추가하기
  const addBtnHandler = (event) => {
    const addedTodo = {
      id: nanoid(),
      // id: todos?.[todos.length - 1]?.id + 1 || 1,
      title,
      content,
      isDone: false,
    };
    setTodos([...todos, addedTodo]);
    setTitle("");
    setContent("");
    event.preventDefault();
    console.log(addedTodo);
  };

  return (
    <form className="form" onSubmit={addBtnHandler}>
      <div className="input-container">
        <p>제목</p>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            // console.log("title", title);
          }}
        />
        <p>내용</p>
        <input
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            // console.log("content", content);
          }}
        />
      </div>
      <button>추가하기</button>
    </form>
  );
};
export default App;
