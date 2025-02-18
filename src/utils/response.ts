interface ApiResponse<T> {
  status: "success" | "error";
  data?: T;
  message?: string;
  errors?: any[];
}

export const successResponse = <T>(
  data: T,
  message?: string
): ApiResponse<T> => ({
  status: "success",
  data,
  message,
});

export const errorResponse = (
  message: string,
  errors?: any[]
): ApiResponse<null> => ({
  status: "error",
  message,
  errors,
});
