import express from "express";
import Ingredient from "../models/Ingredient.js";

const router = express.Router();

// ✅ Get all ingredients
router.get("/", async (req, res) => {
    try {
        const ingredients = await Ingredient.find();
        res.json(ingredients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Add a new ingredient
router.post("/", async (req, res) => {
    const { name, category } = req.body;
    try {
        const newIngredient = new Ingredient({ name, category });
        await newIngredient.save();
        res.status(201).json(newIngredient);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

export default router;
