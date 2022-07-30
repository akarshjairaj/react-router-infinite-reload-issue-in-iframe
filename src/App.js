// * Import required libraries
import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  const handleClick = () => {
    console.log("history.push in Home component");
    history.push("/about");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Navigate to /about</button>
    </div>
  );
}

function About() {
  const history = useHistory();

  const handleClick = () => {
    console.log("history.push in About component");
    history.push("/home");
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Navigate to /home</button>
    </div>
  );
}

function App() {
  const history = useHistory();

  useEffect(() => {
    console.log("APP MOUNTED");
    console.log("history.push in useEffect");
    history.push("/home");
    return () => {
      console.error("APP UNMOUNTED");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <h1>OUTSIDE ROUTER</h1>
      <Switch>
        <Route path="/home" component={Home} exact />
        <Route path="/about" component={About} exact />
      </Switch>
    </main>
  );
}

export default App;
