import express from 'express';
import { body } from 'express-validator';
import { validate } from '../middleware/validator.js';
import * as userController from '../controller/userController.js';

const router = express.Router();

const validateCredential = [ // validate credential for signup
  body('username')
    .trim()
    .notEmpty()
    .withMessage('Username should be at least 4 characters'),
  body('password')
    .trim()
    .isLength({ min: 8 })
    .withMessage('Password should be at least 8 characters'),
  validate,
];

const validateSignup = [ // validate for signup
  ...validateCredential,
  body('name').notEmpty().withMessage('Name is missing'),
  body('email').isEmail().normalizeEmail().withMessage('Invalid email'),
  validate,
];


router.post('/signup', validateSignup, userController.signup);
router.post('/login', validateCredential, userController.login);

export default router;
