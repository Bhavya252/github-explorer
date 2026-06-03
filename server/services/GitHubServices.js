import axios from "axios";


 export const fetchGitHubUser = async(username) =>{
    try{

        const profileResponse = await axios.get(`https://api.github.com/users/${username}`);
        const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);

        return {
            profile: profileResponse.data,
            repositories: reposResponse.data
        };

    }
    catch(err){
        throw new Error("Error fetching GitHub user data: " + err.message);
    }
}

