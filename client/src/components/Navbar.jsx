import { FaGithub } from "react-icons/fa";

function Navbar({ username, setUsername, handleSearch, recentSearches }) {
  const filteredSearches = recentSearches.filter(
    (item) => item.toLowerCase().includes(username.toLowerCase()) && username,
  );

  return (
    <nav className="border-b border-gray-800 sticky top-0 bg-[#0D1117]/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <FaGithub className="text-3xl text-blue-400" />

          <h1 className="text-2xl font-bold tracking-tight">GitHub Explorer</h1>
        </div>

       <div className="flex items-center gap-3 flex-1 max-w-2xl">

  
  <div className="relative flex-1">

    <input
      type="text"
      placeholder="Search GitHub username..."
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      className="w-full bg-[#161B22] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
    />

   
    {filteredSearches.length > 0 && (
      <div className="absolute top-16 left-0 w-full bg-[#161B22] border border-gray-700 rounded-xl shadow-xl overflow-hidden z-50">

        {filteredSearches.map((search) => (
          <button
            key={search}
            onClick={() => {
              setUsername(search);
              handleSearch(search);
            }}
            className="w-full text-left px-4 py-3 hover:bg-[#21262D] transition border-b border-gray-800 last:border-none"
          >
            {search}
          </button>
        ))}

      </div>
    )}

  </div>

 
  <button
    onClick={handleSearch}
    className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
  >
    Search
  </button>

</div>

        <a
          href="https://github.com"
          target="_blank"
          className="text-gray-400 hover:text-white transition"
        >
          GitHub API
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
