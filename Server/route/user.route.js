import  { Router } from 'express'
import { loginUserContoller, logoutContoller, registerUserController,verifyEmailController } from "../controllers/user.controller.js"
import auth from '../middleware/auth.js'

const userRouter = Router()

userRouter.post('/register',registerUserController)
userRouter.post('/verifyEmail',verifyEmailController)
userRouter.post('/login',loginUserContoller)
userRouter.get('/logout',auth,logoutContoller)

export default userRouter;