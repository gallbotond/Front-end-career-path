import React from "react";
import LoginApp from "./components/LoginApp";
import './style.css'

export default function App() {
  let text = "add";

  const Button = ({children}) => <button>{children}</button>;

  const Badge = ({children, color}) => <span className={`badge ${color}`}>{children}</span>

  return (
    <section>
      <h1>Check out these badges!</h1>
      <Badge color="green">Success</Badge> This is operational. <br />
      <Badge color="red">Removed</Badge> This is critical. <br />
      <Badge color="yellow">Warning</Badge> This is a warning. <br />
      <Badge color="blue">Beta</Badge> This is in progress. <br />
      <LoginApp />
    </section>
  );
}
