import RepoGrid from "./RepoGrid";
import SortButton from "./SortButton";

function RepoTitle({
  repositories,
  sortBy,
  setSortBy,
    handleLoadMore,
}) {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">

    
      <div className="flex items-center justify-between mb-8">

        <h2 className="text-3xl font-bold">
          Repositories
        </h2>

        <SortButton
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {repositories.map((repo) => (
          <RepoGrid key={repo.id} repo={repo} />
        ))}

      </div>
      <div className="flex justify-center mt-12">

  <button
    onClick={handleLoadMore}
    className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold transition"
  >
    Load More
  </button>

</div>

    </section>
  );
}

export default RepoTitle;
