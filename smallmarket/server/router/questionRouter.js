import express from 'express';
import * as questionController from '../controller/questionController.js';
import { body } from 'express-validator';
import { isAuth } from '../middleware/authentication.js';
import { validate } from '../middleware/validator.js';

const router = express.Router();

const validateQuestion = [
  body('content')
    .trim()
    .isLength({ min: 4 })
    .withMessage('Centent should be at least 4 characters'),
  validate,
];

router.post('/', isAuth, validateQuestion, questionController.createQuestion);

router.put('/:id', isAuth, validateQuestion, questionController.updateQuestion);

router.delete('/:id', isAuth, questionController.deleteQuestion); 

router.get('/', questionController.getQuestions);
router.get('/:id', questionController.getQuestion);

export default router;