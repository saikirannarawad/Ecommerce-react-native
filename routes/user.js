import express from "express";
import {
  changePassword,
  forgetpassword,
  getMyProfile,
  login,
  logout,
  resetpassword,
  signup,
  updatePic,
  updateProfile,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.route("/login").post(login);
router.route("/new").post(singleUpload, signup);
router.route("/me").get(isAuthenticated, getMyProfile);
router.route("/logout").get(isAuthenticated, logout);

// Updating Routes
router.put("/updateprofile", isAuthenticated, updateProfile);
router.put("/changepassword", isAuthenticated, changePassword);
router.put("/updatepic", isAuthenticated, singleUpload, updatePic);

// forget password and reset password routes

router.route("/forgetpassword").post(forgetpassword).put(resetpassword);

export default router;
