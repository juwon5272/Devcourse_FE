import React from "react";
import "./App.css";
import TodoList from "./TodoList";
import Timer from "./Timer";
import MyWeather from "./MyWeather";

function App() {
  return (
    <div className="App">
      <TodoList />
      <Timer />
      <MyWeather weather="맑음">일기예보</MyWeather>
    </div>
  );
}

export default App;
