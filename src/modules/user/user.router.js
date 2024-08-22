import { Router } from "express";
import { getUser,postUser,updateUser,deleteUser } from "./user.controller.js";
const router=Router()
const baseURL= '/users'
router.get(baseURL,getUser)

router.post(baseURL,postUser)

router.put(baseURL,updateUser)

router.delete(baseURL,deleteUser)
export default router