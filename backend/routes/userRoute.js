import express from 'express';
import { test } from '../controllers/userController.js';

const router = express.Router();

router.get('/register', test);
router.get('/login', test);

export default router