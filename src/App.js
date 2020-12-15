import React, { useEffect, useState } from "react";
import "./App.css";
import Routes from "./Routes";
import { AuthProvider } from "./components/Auth";
import * as serviceWorker from "./serviceWorker"



function App() {
  const [projects, setProjects] = useState([])

  return (
    <AuthProvider>
      <div className="App container">
        <Routes />
      </div>
    </AuthProvider>
  );
}

serviceWorker.register()


export default App;
