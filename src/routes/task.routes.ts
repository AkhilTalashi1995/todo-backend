import { Router } from "express";
import * as taskController from "../controllers/task.controller";
import { validate } from "../middleware/validate.middleware";
import {
  createTaskSchema,
  updateTaskSchema,
} from "../validators/task.validator";

const router = Router();

router.get("/", taskController.getTasks);
router.post("/", validate(createTaskSchema), taskController.createTask);
router.put("/:id", validate(updateTaskSchema), taskController.updateTask);
router.delete("/:id", taskController.deleteTask);
router.get("/:id", taskController.getTaskById);

export default router;
