import express from "express";
import {
  signup_get,
  signup_post,
  login_get,
  login_post,
} from "./controllers/Controlers";
const router = express.Router();

router.get("/signup", () => {});
router.post("/signup", () => {});
router.get("/login", () => {});
router.post("/login", () => {});
export default router;
