import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true },
  difficulty: { type: String, required: true },
  time: { type: String, required: true }
});

export default mongoose.model("Recipe", RecipeSchema);
