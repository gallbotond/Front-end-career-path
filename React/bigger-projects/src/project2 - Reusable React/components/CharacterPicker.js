import React, { useReducer, useState } from "react";

let backgrounds = [
  "Noble",
  "Urchin",
  "Folk Hero",
  "Acolyte",
  "Criminal",
  "Hermit",
  "Guild Artisan",
  "Sage",
];

let friendlyWords = [
  "affable",
  "agreeable",
  "approachable",
  "good-natured",
  "good-tempered",
  "gracious",
  "nice",
  "sweet",
];

function randomBackground() {
  return backgrounds[Math.floor(Math.random() * backgrounds.length)];
}

function randomName() {
  let names = friendlyWords;
  let string = names[Math.floor(Math.random() * names.length)];
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function useCustomState() {
  
}

export default function CharacterPicker() {
  // let [darkMode, setDarkMode] = useState(false);
  // let [name, setName] = useState("");
  // let [background, setBackground] = useState("");
  // let [error, setError] = useState(null);

  let [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_BACKGROUND": {
          return { ...state, background: action.value };
        }
        case "NONEXISTENT_BACKGROUND": {
          return { ...state, error: "This background does not exist" };
        }
        case "DARK_MODE": {
          return { ...state, darkMode: !state.darkMode };
        }
        case "OUT_OF_BOUNDS_ERROR": {
          return { ...state, error: "Name is too long" };
        }
        case "RESET_ERROR": {
          return { ...state, error: null };
        }
        case "SET_NAME": {
          return { ...state, name: action.value };
        }
      }
    },
    {
      darkMode: false,
      name: "",
      background: "",
      error: null,
    }
  );

  let { darkMode, name, background, error } = state;

  function handleBackgroundSelect(event) {
    let value = event.target.value;
    // setBackground(false);
    dispatch({ type: "SET_BACKGROUND", value });
    if (!background.includes(value)) {
      // setError("This background does not exist");
      dispatch({ type: "NONEXISTENT_BACKGROUND" });
    }
  }

  return (
    <div className={`App ${darkMode ? "darkmode" : ""}`}>
      <button onClick={() => dispatch({ type: "DARK_MODE" })}>
        Dark Mode {darkMode ? "ON" : "OFF"}
      </button>
      <br />
      <input
        type="text"
        placeholder="name here..."
        value={name}
        onChange={(event) => {
          dispatch({ type: "SET_NAME", value: event.target.value });
          if (event.target.value.length > 15) {
            // setError("Name is too long");
            dispatch({ type: "OUT_OF_BOUNDS_ERROR" });
          }
        }}
      />
      <select value={background} onChange={handleBackgroundSelect}>
        {backgrounds.map((b) => (
          <option key={`bg-${b}`}>{b}</option>
        ))}
      </select>
      {error && (
        <div className="error">
          {error}
          <button
            onClick={() => {
              // setError(null);
              dispatch({ type: "RESET_ERROR" });
            }}
          >
            Dismiss
          </button>
        </div>
      )}
      <button
        onClick={() => {
          dispatch({ type: "SET_NAME", value: randomName() });
          dispatch({ type: "SET_BACKGROUND", value: randomBackground() });
        }}
      >
        Do it all for me instead
      </button>
    </div>
  );
}
