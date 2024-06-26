export type ToDoAPI = {
  userId: number
  id: number
  title: string
  completed: boolean
};

export type ToDo = Omit<ToDoAPI, 'userId'> & {
  color: string | null
};
