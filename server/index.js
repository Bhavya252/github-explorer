import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import gitHubRouter from './router/gitHubRouter.js';

const app = express();
dotenv.config();


const PORT = process.env.PORT || 5000;
app.use(cors());



app.get('/', (req,res)=>{
    res.json({message: "Welcome to the Git Repo Explorer API!"});
})

app.use('/api', gitHubRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});