import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 5001,
  nodeEnv: process.env.NODE_ENV || "development",
  databaseUrl:
    process.env.DATABASE_URL || "mysql://user:password@localhost:3306/todo_db",
  cors: {
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  },
};

