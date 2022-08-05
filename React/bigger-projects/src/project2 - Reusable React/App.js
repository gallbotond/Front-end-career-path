import React from "react";

export default function App() {
  let text = "add";

  const Button = ({children}) => <button>{children}</button>;

  return (
    <div>
      <Button>
        <p>remove </p>
      </Button>
      <Button />
      <Button />
    </div>
  );
}
