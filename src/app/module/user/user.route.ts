import express from "express";
import { getBooks, getFeatured, getTwoTypeBooks, updatePriceControler } from "./user.controler";


const router = express.Router()




router.get('/task2/', getBooks)
router.get('/task3/', getTwoTypeBooks)

router.get('/task4/', updatePriceControler)
router.get('/task5/', getFeatured)



export default router;