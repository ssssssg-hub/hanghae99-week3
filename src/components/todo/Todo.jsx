import "./style.css";

function Todo({ todoList, buttonAction }) {
  return (
    <>
      <div className="todo">
        <h2>{todoList.title}</h2>
        <span>{todoList.content}</span>
        <div className="btn">
          <button
            className="btn1"
            onClick={() => buttonAction(todoList.key, "delete")}
          >
            삭제하기
          </button>
          <button
            className="btn2"
            onClick={() => buttonAction(todoList.key, "toggle")}
          >
            {todoList.done ? "취소" : "완료"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Todo;
