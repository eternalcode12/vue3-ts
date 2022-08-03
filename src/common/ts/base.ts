export interface IBaseQuery {
  currentNo?: number;
  pageSize?: number;
  all?: boolean;
  [key: string]: any;
}
