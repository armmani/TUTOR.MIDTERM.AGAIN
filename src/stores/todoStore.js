import { create } from "zustand";
import todoApi from "../api/todo";

const useTodoStore = create((set) => ({
  todos: [],
  isLoading: false
  actionGetTodos: async (token) => {
    try {
      set({isLoading: true})
      const res = await todoApi.getTodos(token);
      set({ todos: res.data.todos });
    } catch (error) {
      console.log(error);

      throw error;
    } finally {
      set({ isLoading: false})
    }
  },
}));
