import express from 'express';
import { fetchGitHubUser } from'../services/GitHubServices.js';


export const getGitHubUser = async (req,res)=>{
    try{

        const { username } = req.params;

        const data = await fetchGitHubUser(username);

        res.status(200).json(data);


    }
    catch(err){
        res.status(500).json({error: "Error fetching GitHub user data: " + err.message});
    }

}

