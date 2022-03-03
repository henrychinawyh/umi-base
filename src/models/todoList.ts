import type { AnyAction } from 'redux';

export interface TodoListProps {
  todoList: string[];
}

const TodoList = {
  namespace: 'todoList',
  state: {
    todoList: [],
  },
  effects: {
    // 此处为saga异步操作的编写方式，用来声明异步操作的方法
  },
  reducers: {
    setTodoList(state: TodoListProps, action: AnyAction) {
      const _state = Object.assign({}, state);
      const { type, value } = action.payload;
      const todoList = [..._state.todoList];
      const flag = todoList.indexOf(value);

      if (type === 'add') {
        // 新增
        if (flag > -1) {
          todoList.splice(flag, 1);
        }
        todoList.push(value);
      } else {
        todoList.splice(flag, 1);
      }

      return {
        ..._state,
        todoList,
      };
    },
  },
  // subscriptions:{
  //   setup({ dispatch, history }) {

  //   }
  // }
};

export default TodoList;
