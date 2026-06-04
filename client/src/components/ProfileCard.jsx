function ProfileCard({ profile }) {

    return(
        <section className="max-w-5xl mx-auto px-6 pb-12">

  <div className="bg-[#161B22] border border-gray-800 rounded-3xl p-8 shadow-lg">

    <div className="flex flex-col md:flex-row items-center gap-8">

      
      <img
        src={profile.avatar}
        alt={profile.username}
        className="w-36 h-36 rounded-full border-4 border-blue-500"
      />

     
      <div className="flex-1 text-center md:text-left">

        <h2 className="text-4xl font-bold">
          {profile.name}
        </h2>

        <p className="text-blue-400 text-lg mt-2">
          @{profile.username}
        </p>

        <p className="text-gray-400 mt-4 leading-relaxed">
          {profile.bio}
        </p>

       
        <div className="flex flex-wrap gap-6 mt-6 justify-center md:justify-start">

          <div className="bg-[#0D1117] px-5 py-3 rounded-xl border border-gray-800">
            <p className="text-gray-400 text-sm">
              Followers
            </p>

            <h3 className="text-2xl font-bold">
              {profile.followers}
            </h3>
          </div>

          <div className="bg-[#0D1117] px-5 py-3 rounded-xl border border-gray-800">
            <p className="text-gray-400 text-sm">
              Following
            </p>

            <h3 className="text-2xl font-bold">
              {profile.following}
            </h3>
          </div>

          <div className="bg-[#0D1117] px-5 py-3 rounded-xl border border-gray-800">
            <p className="text-gray-400 text-sm">
              Public Repos
            </p>

            <h3 className="text-2xl font-bold">
              {profile.publicRepos}
            </h3>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>
    )
}

export default ProfileCard;