// في ملف App.jsx

import { useState } from "react";
import NavBar from "./assets/navbar/nav";
import Sidebar from "./assets/sidebar/sidebar";
import Footer from "./assets/footer/Footer";
import "./index.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app-layout">
      <NavBar toggleSidebar={() => setIsOpen(!isOpen)} />
      <Sidebar isOpen={isOpen} />
      <main className="content">
        <h2>Welcome 👋</h2>
        <p>welcome to react app.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;