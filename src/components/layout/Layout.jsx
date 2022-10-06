import "./style.css";
import Header from "../header/Header.jsx";
import Form from "../form/Form.jsx";
import List from "../list/List.jsx";
import React, { useState } from "react";

function Layout() {
  let [todoList, settodoList] = useState([
    {
      key: 1,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      done: false,
    },
    {
      key: 2,
      title: "리액트 더 공부하기",
      content: "리액트 심화를 공부해봅시다.",
      done: true,
    },
  ]);

  // 각 Todo를 삭제하거나, done 변수를 토글해주는 함수
  function buttonAction(key, action) {
    if (action === "delete") {
      settodoList(todoList.filter((e) => e.key !== key));
    } else if (action === "toggle") {
      settodoList(
        todoList.map((e) => {
          if (e.key === key) e.done = !e.done;
          return e;
        })
      );
    }
  }

  return (
    <div className="layout">
      <Header />
      <Form todoList={todoList} settodoList={settodoList} />
      <List
        title="Working"
        todoList={todoList.filter((e) => !e.done)}
        buttonAction={buttonAction}
      />
      <List
        title="Done"
        todoList={todoList.filter((e) => e.done)}
        buttonAction={buttonAction}
      />
    </div>
  );
}

export default Layout;
