import express from 'express';
import { getGitHubUser } from '../controller/gitHubController.js';

const router = express.Router();

router.get('/github/:username', getGitHubUser);

export default router;