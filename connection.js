import mongoose from "mongoose";

export default function mongoDbConnection(url){
    return mongoose.connect(url);
}