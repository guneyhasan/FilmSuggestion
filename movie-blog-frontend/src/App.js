import React from "react";
import "./App.css";
import Login from "./Login"; // Login bileşenini dahil ediyoruz

function App() {
  return (
      <div className="App">
        <Login /> {/* Login bileşenini ana ekrana yerleştiriyoruz */}
      </div>
  );
}

export default App;
