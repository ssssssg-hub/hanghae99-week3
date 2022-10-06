import "./App.css";
import TodoList from "./pages/TodoList";

function App() {
  return <TodoList />;
}

export default App;
// import logo from "./logo.svg";
// import "./App.css";
// import React, { useState } from "react";

// function App() {
//   return <Layout />;
// }

// //
// //
// //
// //
// //
// //

// function Layout() {
//   let [todoList, settodoList] = useState([
//     {
//       key: 1,
//       title: "리액트 공부하기",
//       content: "리액트 기초를 공부해봅시다.",
//       isDone: false,
//     },
//     {
//       key: 2,
//       title: "과제 해결하기",
//       content: "레이아웃고장",
//       isDone: true,
//     },
//   ]);

//   // 각 Todo를 삭제하거나, isDone 변수를 토글해주는 함수
//   function f_action(key, action) {
//     if (action === "delete") {
//       settodoList(todoList.filter((e) => e.key !== key));
//     } else if (action === "toggle") {
//       settodoList(
//         todoList.map((e) => {
//           if (e.key === key) e.isDone = !e.isDone;
//           return e;
//         })
//       );
//     }
//   }

//   return (
//     <div className="layout">
//       <Header />
//       <Form todoList={todoList} settodoList={settodoList} />
//       <List
//         title="Working"
//         todoList={todoList.filter((e) => !e.isDone)}
//         f_action={f_action}
//       />
//       <List
//         title="Done"
//         todoList={todoList.filter((e) => e.isDone)}
//         f_action={f_action}
//       />
//     </div>
//   );
// }

// function Header() {
//   return (
//     <div className="header">
//       <p>My Todo List</p>
//       <p>React</p>
//     </div>
//   );
// }
// //
// //
// //

// function Form({ todoList, settodoList }) {
//   // 새로운 Todo 입력 및 Form에 남아있는 Value 값을 초기화 시키는 함수
//   let nextKey = todoList[todoList.length - 1].key + 1;
//   console.log(nextKey);
//   const addTodo = (event) => {
//     event.preventDefault();
//     settodoList([
//       ...todoList,
//       {
//         key: nextKey,
//         title: event.target.title.value || "notitle",
//         content: event.target.content.value || "nocontent",
//         isDone: false,
//       },
//     ]);
//     event.target.title.value = "";
//     event.target.content.value = "";
//   };

//   return (
//     <div className="form">
//       <form onSubmit={addTodo}>
//         <label>제목</label>
//         <input type="text" name="title" />
//         <label>내용</label>
//         <input type="text" name="content" />
//         <input type="submit" className="add" value="추가하기"></input>
//       </form>
//     </div>
//   );
// }

// //
// //
// //

// function List({ title, todoList, f_action }) {
//   return (
//     <div className="title">
//       <span>{title}</span>
//       <div>
//         {todoList.map((todoList) => (
//           <Todo todoList={todoList} f_action={f_action} key={todoList.key} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function Todo({ todoList, f_action }) {
//   return (
//     <>
//       <div className="todo">
//         <h2>{todoList.title}</h2>
//         <span>{todoList.content}</span>
//         <div className="btn">
//           <button
//             className="btn1"
//             onClick={() => f_action(todoList.key, "delete")}
//           >
//             삭제하기
//           </button>
//           <button
//             className="btn2"
//             onClick={() => f_action(todoList.key, "toggle")}
//           >
//             {todoList.isDone ? "취소" : "완료"}
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
