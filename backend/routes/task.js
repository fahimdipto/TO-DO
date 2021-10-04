import express from "express";
import mongoose from "mongoose";
import {postRoute, getRoute,updateRoute, deleteRoute} from "../controller/postroute.js";

const router = express.Router();

router.post('/',postRoute);
router.get('/',getRoute);
router.put('/:id', updateRoute);
router.delete('/:id',deleteRoute);

export default router;