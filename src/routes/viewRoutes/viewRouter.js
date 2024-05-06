import { Router } from "express";

import artistViewRouter from "./artistViewRouter.js";
import bandViewRouter from "./bandViewRouter.js";

const router = Router();


router.use("/artist",artistViewRouter);
router.use("/band",bandViewRouter);

export default router;