import express from 'express';
import { getGitHubUser } from '../controller/gitHubController.js';
import  limiter  from '../middleware/rateLimiter.js';

const router = express.Router();

router.get('/github/:username', limiter, getGitHubUser);

export default router;