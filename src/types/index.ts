export interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}
export interface BaseTodoComponentProps {
  item: Todo;
  deleteBtnHandler: (id: string) => void;
}
