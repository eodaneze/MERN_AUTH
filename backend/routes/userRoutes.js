import express from 'express';
const router = express.Router();
import { 
    authUser,  
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile 
} from '../controller/userController.js';
import { protect } from '../middleware/authMiddleWare.js';
router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)

export default router


// SQY9hGCTQNLw1Doh
// dancode