import express from "express";
import userRouter from "./User.route.js";
import serviceRouter from "./Service.route.js";
import requestRouter from "./Request.route.js";
//import videoRouter from "./Video.route.js";
import authRouter from "./Auth.route.js";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/services", serviceRouter);
router.use("/requests", requestRouter);
//router.use("/videos", videoRouter);

router.get("/", (req, res) => {
  res.send("Backend DepanGO fonctionne 🚀");
});

export default router;
