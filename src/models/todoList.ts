import { AnyAction } from 'redux';

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
    // 更改当前namespace的state
    setTodoList(state: TodoListProps, action: AnyAction) {
      const _state = Object.assign({}, state);
      const { type, value } = action.payload;
      const todoList = [..._state['todoList']];
      const flag = todoList.indexOf(value);

      if (type === 'add') {
        // 新增
        if (flag > -1) {
          // 如果有相同值的话，就删除已存在的值，插入新值
          todoList.splice(flag, 1);
        }
        todoList.push(value);
      } else {
        // 删除
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
