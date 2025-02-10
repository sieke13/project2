import express from "express";
import { addComment, getCommentsByPost } from "../../controllers/commentController.js";

const router = express.Router();

router.post("/", addComment);
router.get("/:postId", getCommentsByPost);

export default router; 
