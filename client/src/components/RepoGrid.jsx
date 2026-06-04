function RepoGrid({repo}) {
    return(
        <div
  key={repo.id}
  className="bg-[#161B22] border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition duration-300"
>

  <h3 className="text-2xl font-semibold mb-3 truncate">
    {repo.name}
  </h3>

  <p className="text-gray-400 text-sm leading-relaxed min-h-[80px]">
    {repo.description || "No description available"}
  </p>

  <div className="flex flex-wrap items-center gap-4 mt-6 text-sm">

    <span className="bg-[#0D1117] px-3 py-1 rounded-full border border-gray-700">
      {repo.language || "Unknown"}
    </span>

    <span className="text-yellow-400">
      ⭐ {repo.stars}
    </span>

  </div>

  <p className="text-gray-500 text-sm mt-6">
    Updated:{" "}
    {new Date(repo.updatedAt).toLocaleDateString()}
  </p>

</div>

    )
}

export default RepoGrid;