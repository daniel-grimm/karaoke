import { useEffect, useState } from "react";
import "./App.css";
import { videos } from "./videos";
import { Fit } from "./App.style";

function App() {
  const [song, setSong] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function setUsernameText(e: any) {
    let usernameVal = "";
    if (e.data != null) {
      usernameVal = username + e?.data;
    } else {
      username.length > 1
        ? (usernameVal = username.substring(0, username.length - 1))
        : (usernameVal = "");
    }
    setUsername(usernameVal);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function setPasswordText(e: any) {
    let passwordVal = "";
    if (e.data != null) {
      passwordVal = password + e?.data;
    } else {
      password.length > 1
        ? (passwordVal = password.substring(0, password.length - 1))
        : (passwordVal = "");
    }
    setPassword(passwordVal);
  }

  function login() {
    if (username === "daniel" && password === "grimm") {
      setIsAuthenticated(true);
    }

    localStorage.setItem("loggedIn", "true")

    setUsername("");
    setPassword("");
  }
  
  useEffect(() => {
    setSong(videos[Math.floor(Math.random() * 14)])
    
    if (localStorage.getItem("loggedIn")) {
      setIsAuthenticated(true)
    }
  }, [])

  return (
    <>
      {!isAuthenticated && (
        <>
          <h1>Please Login</h1>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={() => setUsernameText(event)}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={() => setPasswordText(event)}
            />
          </div>

          <button onClick={() => login()}>Submit</button>
        </>
      )}
      {isAuthenticated && (
        <>
          <h3>Welcome to Karaoke!</h3>
          <Fit>
            <video controls>
              <source src={song} type="video/mp4" />
              Video not supported
            </video>
          </Fit>
        </>
      )}
    </>
  );
}

export default App;
