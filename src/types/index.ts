export type { IUser } from "./user.types"
export type { ILogin } from "./auth"


export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  meta?: Meta;
  data: T;
}

export interface Meta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}