import mongooes, { Schema } from "mongoose"

const bookSchema = new Schema(
    {
        title:{
            type:String,
            require:true
        },
        description:{
            type:String,
            require:true
        },
        price:{
            type:Number,
            require:true
        },
        sell:{
            type:String,
            require:true
        },
        category:{
            type:String,
            require:true
        },
        avatar: {
            type: String, 
            require: true,
        },
    }
)
export const Book = mongooes.model("Book",bookSchema)