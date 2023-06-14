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
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // useState는 비동기 함수이기 때문에 바로 확인을 위해서는 useEffect 메서드가 필요
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  //todo 추가하기
  const addBtnHandler = (event) => {
    const addedTodo = {
      id: todos?.[todos.length - 1]?.id + 1 || 1,
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

  //Todo isDone 상태 변경하기 (2)

  // const finishBtnHandler = (item) => {
  //   setTodos((이전todos) => {
  //     // isDone 변경
  //     const 완료할놈 = {
  //       ...item,
  //       isDone: true,
  //     };

  //     // 이전 todos 복사하여 새로운 변수에 담기
  //     const newTodos = [...이전todos];

  //     // 바꿀 놈(완료할놈)의 인덱스 찾기
  //     const index = 이전todos.findIndex((todo) => todo.id === item.id);

  //     //이전 객체 삭제 후 isDone 변경된 새로운 객체 추가하기
  //     newTodos.splice(index, 1, 완료할놈);
  //     return newTodos;
  //   });
  // };

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
      <div className="todo-container">
        <h2>Working🔥</h2>
        <div className="card-container">
          {todos
            .filter((todo) => todo.isDone !== true)
            .map((item) => {
              return (
                <div className="todo-card">
                  <div key={item.id} className="todo-card-content">
                    <div className="text-container">
                      <h3>{item.title}</h3>
                      <p>{item.content}</p>
                    </div>
                    <div className="btn-container">
                      <button onClick={() => finishBtnHandler(item)}>
                        완료
                      </button>
                      <button onClick={() => deleteBtnHandler(item.id)}>
                        삭제하기
                      </button>
                    </div>
                  </div>
                </div>
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
                <div className="todo-card">
                  <div key={item.id} className="todo-card-content">
                    <div className="text-container">
                      <h3>{item.title}</h3>
                      <p>{item.content}</p>
                    </div>
                    <div className="btn-container">
                      <button onClick={() => cancleBtnHandler(item)}>
                        취소
                      </button>
                      <button onClick={() => deleteBtnHandler(item.id)}>
                        삭제하기
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
