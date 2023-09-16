import express from 'express';
const router = express.Router();
import { 
    authUser,  
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile 
} from '../controller/userController.js';

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile)

export default router


// SQY9hGCTQNLw1Doh
// dancode