function SortDropdown({ sortBy, setSortBy }) {
  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="bg-[#161B22] border border-gray-700 text-white px-4 py-3 rounded-xl outline-none focus:border-blue-500 transition"
    >
      <option value="stars">
        Sort by Stars
      </option>

      <option value="name">
        Sort by Name
      </option>

      <option value="updated">
        Sort by Updated
      </option>
    </select>
  );
}

export default SortDropdown;