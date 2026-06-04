import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    console.log(username);
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <Navbar
        username={username}
        setUsername={setUsername}
        handleSearch={handleSearch}
      />
    </div>
  );
}

export default App;
