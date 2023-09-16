import express from 'express';
const router = express.Router();
import { authUser } from '../controller/userController.js';

router.post('/auth', authUser)

export default router