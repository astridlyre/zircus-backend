import styled from "styled-components";
import { useEffect, useState } from "react";
import { login } from "./services/services.js";
import { useField } from "./hooks/hooks.js";
import { WebsocketContext } from "./services/Websocket.js";
import { useContext } from "react";

const StyledLogin = styled.main`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`;

const StyledForm = styled.form`
    margin-top: var(--lg-spacing);
    padding: var(--md-spacing);
    background-color: var(--gray-20);
    border-radius: var(--big-radius);
    display: flex;
    flex-flow: column nowrap;
    gap: 0.5rem;
`;

const StyledLabel = styled.label`
    display: flex;
    flex-flow: column nowrap;
`;

const StyledMessage = styled.p`
    color: ${(
  props,
) => (props.failedLogin ? "var(--red)" : "var(--text-color)")};
    margin: var(--base-spacing) 0;
    font-weight: 500;
`;

const StyledButton = styled.button`
    margin-top: 0.5rem;
`;

export default function Login({ setToken, setUser }) {
  const [failedLogin, setFailedLogin] = useState(false);
  const [usernameInput] = useField("text", "");
  const [passwordInput] = useField("password", "");
  const { initializeWebSocket } = useContext(WebsocketContext);

  const handleFailedLogin = () => {
    setFailedLogin(true);
    setTimeout(() => {
      setFailedLogin(false);
    }, 2000);
  };

  const handleSuccessfulLogin = ({ name, token }) => {
    setUser(name);
    setToken(token);
    localStorage.setItem("user", name);
    localStorage.setItem("token", token);
    initializeWebSocket();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(usernameInput.value, passwordInput.value)
      .then(handleSuccessfulLogin)
      .catch(handleFailedLogin);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (storedToken) setToken(storedToken);
    if (storedUser) setUser(storedUser);
    if (storedToken && storedUser) initializeWebSocket();
  }, [setToken, setUser, initializeWebSocket]);

  return (
    <StyledLogin>
      <StyledForm onSubmit={handleSubmit}>
        <h1>Zircus Admin</h1>
        <StyledMessage failedLogin={failedLogin}>
          {failedLogin ? "Login failed" : "Please Log in:"}
        </StyledMessage>
        <StyledLabel htmlFor="username">
          <span>Username</span>
          <input
            {...usernameInput}
            disabled={failedLogin ? true : false}
          />
        </StyledLabel>
        <StyledLabel htmlFor="password">
          <span>Password</span>
          <input
            {...passwordInput}
            disabled={failedLogin ? true : false}
          />
        </StyledLabel>
        <StyledButton
          className="button"
          type="submit"
          disabled={failedLogin ? true : false}
        >
          {failedLogin ? "Please wait" : "Log in"}
        </StyledButton>
      </StyledForm>
    </StyledLogin>
  );
}
