import React, { useEffect, useState } from "react";
import "./App.css";
import Routes from "./Routes";
import { AuthProvider } from "./components/Auth";
import * as serviceWorker from "./serviceWorker"



function App() {
  const [projects, setProjects] = useState([])
  // useEffect(async () => {
  //   const db = firebase.firestore();
  //   const data = await db.collection('issues').get();
  //   setProjects(data.docs.map(project => project.data()))
  // }, [])

  return (
    <AuthProvider>
      <div className="App container">
        <Routes />
      </div>
    </AuthProvider>
  );
}
serviceWorker.register();


export default App;
