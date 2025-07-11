import { load } from "todolist/store";
import mountTodos from "todolist/VanillaTodos";
import mountAdd from "todolist/VanillaAdd";
import mountSearch from "todolist/VanillaSearch";

mountTodos('#todos');
mountAdd('#add');
mountSearch('#search');

load('todo_list');