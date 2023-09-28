import styles from "./Login.module.css";
import { useState } from "react";
import Button from "../components/Button";
import { useAuth } from "../../context/FakeAuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const navigate = useNavigate();
  const [email, setEmail] = useState("devhalltech@gmail.com");
  const [password, setPassword] = useState("@Pass123");

  const { Login, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) navigate("/app", { replace: true });
  }, [isAuthenticated]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) Login(email, password);
  };

  return (
    <main className={styles.login}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button onClick={handleSubmit} type="primary">
            Login
          </Button>
        </div>
      </form>
    </main>
  );
}
