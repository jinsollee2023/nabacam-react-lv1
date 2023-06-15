import { nanoid } from "nanoid";
import { useState } from "react";

//todo 추가하기
const AddTodo = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //todo 추가하기
  const addBtnHandler = (event) => {
    event.preventDefault();
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

    // //로컬스토리지에 저장
    // localStorage.setItem("todos", JSON.stringify(todos));
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

export default AddTodo;
