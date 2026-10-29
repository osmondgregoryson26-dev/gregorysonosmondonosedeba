import { useState } from "react";

const Simpleformapp = () => {
  const [name, setName] = useState("");
  const [output, setform] = useState("");
  const handleName = () => {
    setform(name)
    if (name !== ""){
       setform("Hello " + name)
    }
  };

  return (
    <div
      className="show-name"
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "yellow",
        width: "300px"
      }}
    >
      <input
        type="text"
        name=""
        id=""
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "5px 20px",
          fontWeight: "600",
          backgroundColor: "none",
          borderRadius: "8px",
          border: "1px solid grey",
        }}
      />
      <button
        onClick={handleName}
        style={{
            padding: "5px 20px",
            fontWeight: "600",
            backgroundColor: "none",
            borderRadius: "8px",
            border: "1px solid white",
        }}
      >
        Output Name
      </button>
        <p style={{ fontWeight: "700", color: "black" }}>{output}</p>
    </div>
  );
};

export default Simpleformapp;
