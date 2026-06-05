import axios from "axios";
import cache from "../cache/MemoryCache.js";

export const fetchGitHubUser = async (username, page) => {
  try {
    const cacheKey = `${username}-${page}`;
    const cachedUser = cache[cacheKey];

    if (cachedUser && Date.now() - cachedUser.timestamp < 60000) {
      console.log("Serving from cache");

      return cachedUser.data;
    }

    const profileResponse = await axios.get(
      `https://api.github.com/users/${username}`,
    );
    const reposResponse = await axios.get(
      `https://api.github.com/users/${username}/repos?page=${page}&per_page=10`,
    );

    const profileData = profileResponse.data;

    const formattedProfile = {
      username: profileData.login,
      name: profileData.name,
      avatar: profileData.avatar_url,
      bio: profileData.bio,
      followers: profileData.followers,
      following: profileData.following,
      publicRepos: profileData.public_repos,
      githubProfileUrl: profileData.html_url,
    };

    const formattedRepositories = reposResponse.data.map((repo) => {
      return {
        id: repo.id,
        name: repo.name,
        description: repo.description,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        updatedAt: repo.updated_at,
        repoUrl: repo.html_url,
      };
    });

    const finalData = {
      profile: formattedProfile,
      repositories: formattedRepositories,
    };

    cache[cacheKey] = {
      data: finalData,
      timestamp: Date.now(),
    };
    return finalData;
  } catch (err) {

    console.log(err.response?.data || err.message);
    throw new Error("Error fetching GitHub user data: " + err.message);
  }
};
