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
    // reduders，修改state
  },
  // subscriptions:{
  //   setup({ dispatch, history }) {

  //   }
  // }
};

export default TodoList;
