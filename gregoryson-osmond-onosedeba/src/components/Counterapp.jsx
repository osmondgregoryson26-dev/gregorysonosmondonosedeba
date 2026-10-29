import { useState } from "react";

const Counterapp = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Count is even");
  const handleAdd = function () {
    if (count > -1 && count < 30) {
      setCount(count + 1);
    }
  };

  const handleSub = function () {
    if (count > 0 && count < 30) {
      setCount(count - 1);
    }
  };

  const handletext = function () {
    if (count / 2){
        setCount(0)
        setText("count is even")
    }else {
        setCount(0)
        setText("count is odd")
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        backgroundcolor: "aqua",
      }}
    >
      <div
        className="counter"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          boxShadow: "0px 0px 10px white",
          width: "300px",
          padding: "10px",
        }}
      >
        <h1 style={{ color: "white" }}>{count}</h1>
        <div className="buttons" style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={handleAdd}
            style={{
              padding: "5px 20px",
              fontWeight: "600",
              backgroundColor: "none",
              borderRadius: "8px",
              border: "1px solid white",
            }}
          >
            Add
          </button>
          <button
            onClick={handleSub}
            style={{
              padding: "5px 20px",
              fontWeight: "600",
              backgroundColor: "none",
              borderRadius: "8px",
              border: "1px solid white",
            }}
          >
            sub
          </button>
        </div>
        <p style={{color: "white"}}>{text}</p>
      </div>
    </div>
  );
};

export default Counterapp;
