import  taskModel from '../models/task.js'
import errorResponse from '../../../TO-DO/backend/utils/errorresponse.js'
import mongoose from "mongoose";


export const postRoute = async (req,res)=>{
    try {
        const taskMsg = await new taskModel(req.body).save();
        res.status(201).json(taskMsg);
    }catch (e) {
        res.status(409).json(errorResponse('Error while adding new task',e));
    }
}
export const getRoute = async (req,res)=>{
    try {
        const taskMsg = await  taskModel.find();
        res.status(200).json(taskMsg);
    }catch (e) {
        res.status(404).json(errorResponse('Error while parsing tasks',e));
    }
}
export const updateRoute = async (req,res)=>{
    try {
        const taskMsg = await  taskModel.findOneAndUpdate({_id:req.params.id},req.body );
        res.status(202).json(taskMsg);
    }catch (e) {
        res.status(204).json(errorResponse('No Content',e));
    }
}
export const deleteRoute = async (req,res)=>{
    try {
        const taskMsg = await  taskModel.findByIdAndDelete(req.params.id);
        res.status(202).json(taskMsg);
    }catch (e) {
        res.status(204).json(errorResponse('No Content',e));
    }
}