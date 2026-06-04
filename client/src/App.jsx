import { useState } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import ProfileCard from "./components/ProfileCard";
import RepoTitle from "./components/RepoTitle";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);

  const [repositories, setRepositories] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSearch = async () => {
  try {
    setLoading(true);

    setError("");

    const response = await axios.get(
      `http://localhost:5000/api/github/${username}`
    );

    setProfile(response.data.profile);
    console.log(profile);

    setRepositories(response.data.repositories);
    console.log(repositories);

  } catch (err) {
    setError("User not found or something went wrong");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <Navbar
        username={username}
        setUsername={setUsername}
        handleSearch={handleSearch}
      />
      


      {/* HERO SECTION */}
<section className="max-w-5xl mx-auto px-6 py-24 text-center">

  <h1 className="text-6xl font-bold leading-tight">
    Explore{" "}
    <span className="text-blue-400">
      GitHub Developers
    </span>
  </h1>

  <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
    Search profiles, repositories, and developer
    activity instantly with a modern GitHub
    explorer dashboard.
  </p>

</section>

{loading && <Loader />}
{error && (
  <div className="max-w-2xl mx-auto bg-red-500/10 border border-red-500 text-red-400 px-6 py-4 rounded-xl">
    {error}
  </div>
)}
{profile && <ProfileCard profile={profile} />}
{repositories.length > 0 && <RepoTitle repositories={repositories} />}
    </div>
  );
}

<section className="max-w-7xl mx-auto px-6 pb-20">

  <div className="flex items-center justify-between mb-8">

    <h2 className="text-3xl font-bold">
      Repositories
    </h2>

  </div>

</section>

export default App;
