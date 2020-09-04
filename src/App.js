import React, { useEffect, useState } from "react";
import "./App.css";
import Routes from "./Routes";
import { AuthProvider } from "./components/Auth";
import firebase from "firebase"

function App() {
  const [projects, setProjects] = useState([])
  useEffect(async () => {
    const db = firebase.firestore();
    const data = await db.collection('issues').get();
    setProjects(data.docs.map(project => project.data()))
  }, [])

  return (
    <AuthProvider>
      <div className="App container">
        <Routes />
      </div>
    </AuthProvider>
  );
}



export default App;
