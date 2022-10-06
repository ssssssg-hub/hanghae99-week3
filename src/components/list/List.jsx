import "./style.css";

import Todo from "../todo/Todo.jsx";

function List({ title, todoList, buttonAction }) {
  return (
    <div className="title">
      <span>{title}</span>
      <div>
        {todoList.map((todoList) => (
          <Todo
            todoList={todoList}
            buttonAction={buttonAction}
            key={todoList.key}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
