import express from 'express';
import * as itemController from '../controller/itemController.js';

const router = express.Router();

router.get('/list', itemController.getAllItems);
router.post('/detail', itemController.getItemDetails);

export default router;