import {Router} from 'express'
import { registerUser } from '../controllers/user.controller.js'
import { uploads } from '../middlewares/multer.middleware.js'
const router = Router()
router.post('/register',
         uploads.fields([
            {
                name:'avatar',
                maxCount:1
            },
            {
                name:'coverImage',
                maxCount:1
            }
         ]),
    
    registerUser)
// router.route('/register').post(registerUser)
export default router