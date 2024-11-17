import React from "react";

const arrObj = [
  { name: "jack", age: 18, job: "student" },
  { name: "john", age: 17, job: "homeless" },
  { name: "tom", age: 20, job: "free" },
  { name: "tom", age: 20, job: "free" },
  { name: "tom", age: 20, job: "free" },
  { name: "tom", age: 20, job: "free" },
  { name: "tom", age: 20, job: "free" },
  { name: "tom", age: 20, job: "free" },
  { name: "tom", age: 20, job: "free" },
  { name: "tom", age: 20, job: "free" },
  { name: "tom", age: 20, job: "free" },
];

export default function Home() {
  return (
    <div className="grid grid-cols-5 gap-4">
      {arrObj.map((item, index) => {
        return (
          <div key={index} className="p-4 border rounded">
            <div>name: {item.name}</div>
            <div>age: {item.age}</div>
            <div>job: {item.job}</div>
          </div>
        );
      })}
    </div>
  );
}
