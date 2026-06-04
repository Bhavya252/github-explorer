import RepoGrid from "./RepoGrid";

function RepoTitle({ repositories }) {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">

     
      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Repositories
        </h2>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {repositories.map((repo) => (
          <RepoGrid key={repo.id} repo={repo} />
        ))}

      </div>

    </section>
  );
}

export default RepoTitle;