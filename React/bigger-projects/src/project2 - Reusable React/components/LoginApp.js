import React, {
  createElement,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";

export default function LoginApp() {
  let data = [
    { name: "Log In", component: LoginForm },
    { name: "Sign Up", component: SignupForm },
  ];

  return (
    <section>
      <h2>Log in / Sign up</h2>
      <ToggleableForm options={data} />
    </section>
  );
}

const ToggleableForm = ({ options }) => {
  const [currentForm, setCurrentForm] = useState(0);
  let focusRef = useRef(null);

  return (
    <>
      {options.map((item, index) => (
        <ButtonToggle
          toggleForm={() => setCurrentForm(index)}
          key={`button${index}`}
        >
          {item.name}
        </ButtonToggle>
      ))}
      <FormToggle currentIndex={currentForm}>
        {options.map((item, index) => (
          <div key={`form${index}`}>
            {createElement(item.component, {
              ref: focusRef,
            })}
          </div>
        ))}
      </FormToggle>
    </>
  );
};

const ButtonToggle = ({ children, toggleRef, toggleForm }) => (
  <button
    onClick={() => {
      toggleForm();
    }}
  >
    {children}
  </button>
);

const FormToggle = ({ children, currentIndex }) => {
  if (Array.isArray(children)) {
    return <div>{children[currentIndex]}</div>;
  }
  return null;
};

const LoginForm = forwardRef((props, ref) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => ref.current.focus(), []);

  return (
    <form>
      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        autoComplete={username}
        ref={ref}
      />
      <br />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        autoComplete={password}
      />
      <br />
      <button>Submit</button>
      <br />
      <br />
    </form>
  );
});

const SignupForm = forwardRef((props, ref) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => ref.current.focus(), []);

  return (
    <form>
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        autoComplete={email}
        ref={ref}
      />
      <br />
      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        autoComplete={username}
      />
      <br />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        autoComplete={password}
      />
      <br />
      <button>Submit</button>
    </form>
  );
});
