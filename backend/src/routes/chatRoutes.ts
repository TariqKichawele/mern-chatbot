import { Router } from "express";
import { chatCompletionValidator, validate } from "../utils/validator.js";
import { verifyToken } from "../utils/token-manager.js";
import { generateChatCompletion, deleteChats, sendChatsToUser } from "../controllers/chatController.js";


const chatRoutes = Router();

chatRoutes.post("/new", validate(chatCompletionValidator), verifyToken, generateChatCompletion);
chatRoutes.get("/all-chats", verifyToken, sendChatsToUser);
chatRoutes.delete("/delete", verifyToken, deleteChats);

export default chatRoutes;