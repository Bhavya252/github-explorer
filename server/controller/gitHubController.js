import express from 'express';
import { fetchGitHubUser } from'../services/GitHubServices.js';


export const getGitHubUser = async (req,res)=>{
    try{

        const { username } = req.params;
        const page = req.query.page || 1;

        const data = await fetchGitHubUser(username,page);

        res.status(200).json(data);


    }
    catch(err){
        res.status(500).json({error: "Error fetching GitHub user data: " + err.message});
    }

}

