import { PrismaClient } from "@prisma/client";
import { Task } from "../models/task.model";

const prisma = new PrismaClient();

export async function getAllTasks(): Promise<Task[]> {
  return prisma.task.findMany({
    orderBy: { createdAt: "desc" },
  });
}
export async function getTaskById(id: string): Promise<Task | null> {
  return prisma.task.findUnique({
    where: { id },
  });
}

export async function createTask(
  data: Omit<Task, "id" | "createdAt" | "updatedAt">
): Promise<Task> {
  return prisma.task.create({
    data,
  });
}

export async function updateTask(
  id: string,
  data: Partial<Task>
): Promise<Task> {
  return prisma.task.update({
    where: { id },
    data,
  });
}

export async function deleteTask(id: string): Promise<void> {
  await prisma.task.delete({
    where: { id },
  });
}
