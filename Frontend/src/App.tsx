// import React from "react";
import { useEffect, useState } from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

function App() {
  const [backendData, setBackendData] = useState(null); // State to store data from backend

  useEffect(() => {
    // Replace 'https://your-vercel-backend-url/api/endpoint' with your actual backend URL
    axios
      .get("https://your-vercel-backend-url/api/endpoint")
      .then((response) => {
        console.log("Data received from backend:", response.data);
        setBackendData(response.data); // Store the backend data in state
      })
      .catch((error) => {
        console.error("Error fetching data from backend:", error);
      });
  }, []); // Runs once when the component is mounted
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
