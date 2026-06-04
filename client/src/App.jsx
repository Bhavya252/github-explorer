import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import ProfileCard from "./components/ProfileCard";
import RepoTitle from "./components/RepoTitle";
import SortButton from "./components/SortButton";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [searchedUser, setSearchedUser] = useState("");

  const [repositories, setRepositories] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [sortBy, setSortBy] = useState("stars");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const sortedRepositories = [...repositories];
  if (sortBy === "stars") {
    sortedRepositories.sort((a, b) => b.stars - a.stars);
  }

  if (sortBy === "name") {
    sortedRepositories.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === "updated") {
    sortedRepositories.sort(
      (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt),
    );
  }

  useEffect(() => {
    const savedSearches =
      JSON.parse(localStorage.getItem("recentSearches")) || [];

    setRecentSearches(savedSearches);
  }, []);
 const handleSearch = async (customUsername) => {

  const searchValue = customUsername || username;

  try {

    setLoading(true);

    setError("");

    setPage(1);

    setHasMore(true);

    const response = await axios.get(
      `https://github-explorer-tl0l.onrender.com/api/github/${searchValue}?page=1`
    );

    setSearchedUser(searchValue);

    setProfile(response.data.profile);

    setRepositories(response.data.repositories);

    const updatedSearches = [
      searchValue,
      ...recentSearches.filter(
        (item) => item !== searchValue
      ),
    ].slice(0, 5);

    setRecentSearches(updatedSearches);

    localStorage.setItem(
      "recentSearches",
      JSON.stringify(updatedSearches)
    );

    setUsername("");

  } catch (err) {

    setProfile(null);

    setRepositories([]);

    setError("User not found or something went wrong");

  } finally {

    setLoading(false);

  }
};

  const handleLoadMore = async () => {
    try {
      const nextPage = page + 1;

      const response = await axios.get(
        `https://github-explorer-tl0l.onrender.com/api/github/${searchedUser}?page=${nextPage}`,
      );

      const newRepositories = response.data.repositories;

      if (newRepositories.length === 0) {
        setHasMore(false);
        return;
      }

      setRepositories((prev) => [...prev, ...newRepositories]);

      setPage(nextPage);
    } catch (err) {
      setError("Failed to load more repositories");
    }
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <Navbar
        username={username}
        setUsername={setUsername}
        handleSearch={handleSearch}
        recentSearches={recentSearches}
      />

      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-6xl font-bold leading-tight">
          Explore <span className="text-blue-400">GitHub Developers</span>
        </h1>

        <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
          Search GitHub developers and explore their repositories through a sleek modern dashboard.
        </p>
      </section>

      {loading && <Loader />}
      {error && (
        <div className="max-w-2xl mx-auto bg-red-500/10 border border-red-500 text-red-400 px-6 py-4 rounded-xl">
          {error}
        </div>
      )}
      {profile && <ProfileCard profile={profile} />}

      {repositories.length > 0 && (
        <RepoTitle
          repositories={sortedRepositories}
          sortBy={sortBy}
          setSortBy={setSortBy}
          handleLoadMore={handleLoadMore}
        />
      )}
    </div>
  );
}



export default App;
