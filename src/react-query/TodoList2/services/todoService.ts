import APIClient from "./apiClient";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

//instance of APIClient working with a specific object (enpoints)
export default new APIClient<Todo>("/todos");
