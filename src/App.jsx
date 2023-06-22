import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";

const style = {
  border: "1px solid black",
  padding: "10px",
  margin: "10px",
};

const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleInputHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentInputHandler = (event) => {
    setContent(event.target.value);
  };

  const addTodoHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      id: nanoid(),
      title,
      content,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    const newTodo = todos.filter((todo) => todo.id !==id)
    setTodos(newTodo)
  }
  const isDoneTodoHandler = (id) => {
    const newTodo = todos.map((todo) => {
      if (todo.id ===  id) {
        if (todo.isDone === false) {
          todo.isDone = true
        } else {
          todo.isDone = false
        }
    }}
    )
      setTodos(newTodo)
    }

  return (
    <>
      <nav style={style}>
        <form>
          제목: <input value={title} onChange={titleInputHandler} />
          내용: <input value={content} onChange={contentInputHandler} />
          <button onClick={addTodoHandler}>등록하기</button>
        </form>
      </nav>
      <main>
        <div>
          <h1>진행중</h1>
          {todos
            .filter((item) => item.isDone === false)
            .map((item) => {
              return (
                <div style={style} key={item.id}>
                  <h1>{item.title}</h1>
                  <p>{item.content}</p>
                  <button onClick={() => deleteTodoHandler(item.id)}>삭제하기</button>
                  <button onClick={() => isDoneTodoHandler(item.id)}>{item.isDone ? "취소하기" : "완료하기"}</button>
                </div>
              );
            })}
        </div>
      </main>
      <footer style={style}></footer>
    </>
  );
};

export default App;
