import { Router } from "express";
import Adoption from "../models/adoption.model.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Adoption
 *   description: Pet adoption flow
 */

/**
 * @swagger
 * /api/adoption:
 *   get:
 *     summary: List all adoptions
 *     tags: [Adoption]
 *     responses:
 *       200:
 *         description: Array of adoptions
 */
router.get("/", async (_, res, next) => {
  try {
    const adoptions = await Adoption.find().populate("adopter", "name email");
    res.json(adoptions);
  } catch (err) {
    next(err);
  }
});

/**
 * @swagger
 * /api/adoption:
 *   post:
 *     summary: Request adoption
 *     tags: [Adoption]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Adoption'
 *     responses:
 *       201:
 *         description: Adoption request created
 */
router.post("/", async (req, res, next) => {
  try {
    const adoption = await Adoption.create(req.body);
    res.status(201).json(adoption);
  } catch (err) {
    next(err);
  }
});

export default router;
