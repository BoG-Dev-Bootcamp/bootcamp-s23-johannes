import mongoose from "mongoose"

const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    dateEntered: Date,
    dateAdopted: Date

})

export default mongoose.model("Dog", dogSchema)