export type User = {
  id: string;
  email: string;
  created_at: string;
};

export type ApiResponse<T> = {
  data: T | null;
  error: string | null;
};
