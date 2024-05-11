import React from "react";

const MapTest = () => {
  const fruits = ["apple", "banana", "orange"];

  return (
    <div>
      <h2>과일</h2>
      <ul>
        {fruits.map((e, idx) => (
          <li key={idx}>{e}</li>
        ))}
      </ul>
    </div>
  );
};
