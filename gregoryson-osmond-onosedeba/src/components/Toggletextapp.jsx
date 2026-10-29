import { useState } from "react";

const ToggletextApp = () => {
  const [name, setName] = useState("");
  const [buttonText, setButtonText] = useState("Show");

  const handleToggle = () => {
    if (name === "") {
      setName("Hello, World");
      setButtonText("Hide");
    } else {
      setName("");
      setButtonText("Show");
    }
  };

  return (
    <div
      className="toggle-app"
      style={{
        backgroundColor: "beige",
        width: "200px",
        height: "fit-content",
        color: "cyan",
        fontFamily: "cursive",
        margin: "opx auto",
        textAlign: "center",
        padding: "20px",
        border: "2px solid orange",
        borderRadius: "11px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>{name}</h1>
      <button
        className="toggle"
        style={{ padding: "8px", borderRadius: "8px", border: "1px solid" }}
        onClick={handleToggle}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ToggletextApp;
