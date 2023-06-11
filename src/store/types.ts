export type TFilter = "all" | "active" | "complited";

export interface IFilter {
  active: TFilter;
}

export interface ITodo {
  id: number;
  title: string;
  isDone: boolean;
}
