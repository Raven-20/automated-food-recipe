import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Ingredient", ingredientSchema);
