import mongoose from "mongoose";

const foodSchema = new mongoose.schema({
    name: {
        type:String,
        required: true
    },
    description: {
        typr: String,
        required: true
    },
    price: {
        type: Number, 
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
});

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;