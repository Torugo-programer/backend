import { Router } from "express";
import { createUser, fetchUsers, getUserById } from "../controllers/user.js";

const router = Router();

router.get('/', fetchUsers)
router.post('/', createUser)
router.get('/user/:id', getUserById)

export default router;

