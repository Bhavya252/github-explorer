import { FaGithub } from "react-icons/fa";

function Navbar({
  username,
  setUsername,
  handleSearch,
}) {
  return (
    <nav className="border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-3">
          <FaGithub className="text-3xl text-blue-400" />

          <h1 className="text-2xl font-bold tracking-tight">
            GitHub Explorer
          </h1>
        </div>

        {/* SEARCH BAR */}
        <div className="flex items-center gap-3 flex-1 max-w-2xl">

          <input
            type="text"
            placeholder="Search GitHub username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1 bg-[#161B22] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition"
          />

          <button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-xl font-medium transition"
          >
            Search
          </button>
        </div>

        {/* RIGHT SIDE */}
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
