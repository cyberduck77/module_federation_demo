import { reactive } from "vue";
import type { Todo } from "./types";

export interface Store {
  todos: Todo[];
  finalizedTodos: Todo[];
  newTodo: Todo;
  searchText: string;
  dateFilter: string;
}

export const store = reactive<Store>({
  todos: [],
  finalizedTodos: [],
  newTodo: {
    title: "",
    description: "",
    date: "",
  },
  searchText: "",
  dateFilter: "",
});

export const finalize = (): void => {
  const filteredTodos = store.todos.filter(
    ({ title, description, date }) =>
      (title.match(new RegExp(store.searchText, "i")) ||
        description.match(new RegExp(store.searchText, "i"))) &&
      (!store.dateFilter ||
        new Date(date).toISOString().slice(0, 10) === store.dateFilter)
  );
  store.finalizedTodos = filteredTodos.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export const search = (text: string): void => {
  store.searchText = text
  finalize()
}

export const selectDate = (date: string): void => {
  store.dateFilter = date
  finalize()
}

export const load = async (client: string): Promise<void> => {
  const resp = await fetch(`http://localhost:${import.meta.env.VITE_PORT}/${client}.json`)
  store.todos = await resp.json()
  finalize()
};

export const addTodo = (): void => {
  if (!store.newTodo.title || !store.newTodo.description || !store.newTodo.date) return
  store.todos.push(store.newTodo)
  store.newTodo = {
    title: "",
    description: "",
    date: "",
  }
  finalize()
}
