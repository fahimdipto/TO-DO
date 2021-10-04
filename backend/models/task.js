import mongoose from "mongoose";


const taskSchema = mongoose.Schema({
    task: {
        type:String, required:true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const taskModel = mongoose.model('postTask', taskSchema);

export default taskModel;
