import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  color: z.string().default("blue"),
});

export const updateTaskSchema = z.object({
  title: z.string().min(1, "Title is required").optional(),
  color: z.string().optional(),
  completed: z.boolean().optional(),
});